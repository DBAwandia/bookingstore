import React, { useContext, useState } from 'react'
import './Hotel.css'
import  Navbar from '../Components/Navbar'
import  Header from '../Components/Header'
import { LocationOn,Cancel,ArrowRight,ArrowLeft } from '@mui/icons-material'
import { Typography } from '@mui/material'
import MailList from '../Components/MailList'
import Footer from '../Components/Footer'
import useFetch from "../Hooks/useFetch";
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../Context/SearchContext'
import { AuthContext } from '../Context/authContext'
import Reserve from "./Reserve"

function Hotel() {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const { data,loading,error ,reFetch} = useFetch(`http://localhost:5000/hotels/find/${id}`)
  const {dates, options} = useContext(SearchContext)
  const[openModal, setOpenModal] = useState(false)


  const MILLISECONDS_PER_DAY =1000 * 60 * 60 * 24;
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    return diffDays
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)
  const { user} =  useContext(AuthContext)
  const navigate = useNavigate()
  const handleClick = ()=>{
      if(user){
        setOpenModal(true)
      }else{
        navigate("/login")
      }
  }
//   const photos =[ 
//   {image:"/images/hotel1.jpg"},
//   {image:"/images/hotel1.jpg"},
//   {image:"/images/hotel1.jpg"},
//   {image:"/images/hotel1.jpg"},
//   {image:"/images/hotel1.jpg"},
 

// ]
  const[ slideNumber, setSlideNumber] = useState(0)
  const[ open, setOpen ]= useState(false)
  const handleOpen =(i)=>{
    setSlideNumber(i)
    setOpen(true)
  }
  const handleMove =(direction)=>{
      let newSlideNumber;
      if(direction === "l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
      }else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        
      }

      setSlideNumber(newSlideNumber)
  }

  return (
    <div className='main_hotel'>
      <Navbar/>
      <Header type='list'/>
   {  loading? "loading" : <div>
    <div className='display_header'>
      { open && <div className='slider'>
      <ArrowLeft  className='arrow' sx={{fontSize: "50px !important", marginLeft:"100px !important"}} onClick={ ()=> handleMove("l")}/>
      <div className='sliderWrapper'>
        <img className='sliderImg' src={data.photos[slideNumber]} alt=''/>
         <ArrowRight className='arrows'  sx={{fontSize: "50px !important", marginLeft:"100px !important"}} onClick={ ()=> handleMove("r")}/>
      </div>
      </div>}
      <div className='header_hotel'>
           <h1 className='header_hotels'>{data.name}</h1>
        <div className='styled_components'>
          <LocationOn sx={ {
                            color: "red !important",
                            width: 30,
                            cursor: "pointer",
                            height: 30,
                            marginLeft: 20,
                            }}/>
          <Typography sx={{
                        fontSize: 17,
                        fontWeight: 400,
                        marginLeft: "5px"
                     }}>{data.distance} Magadi Road</Typography>
        </div>
          <b className='excellent'>{data.address} -500m from center</b>
          <p className='excellents'>Book a stay over {data.cheapestPrice} at the property and get a free Airport Taxi</p>
      </div>
      <div className='buttonss'>
        <button>Reserve or Book Now</button>
      </div>
      </div>
      <div className="hotel_Image">
        <div className='hotelWrapper'>
         {data.photos?.map((photo,i) =>(
             <div className='hotelWrappers'>
              <img onClick={()=>handleOpen(i)}className='hotss' src={photo}  alt=''/>
            </div>
            ))} 
        </div>
      </div>
      <div className='header_footer'>
        <div className='header_footers'>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        </div>  
        <div className='right_button'>
          <h2>Perfect for a {days}-night stay!</h2>
          <p>Located in the real heart of Krakow with excellent score of 9.8</p>
          <b>${days * data.cheapestPrice * options.room} <span> ({days})</span></b>
          <button onClick={handleClick}>Reserve or Book Now</button>
        </div>
        <MailList/>
        <Footer/>
    </div>
    </div>}
    {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel