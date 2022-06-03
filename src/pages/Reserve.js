import { Cancel } from '@mui/icons-material'
import React, { useState ,useContext} from 'react'
import useFetch from '../Hooks/useFetch'
import { SearchContext } from '../Context/SearchContext'
import "./Reserve.css"
function Reserve({setOpen, hotelId}) {
    const [selectedRooms, setSelectedRooms] =useState([])
    const { data,loading,error } = useFetch(`http://localhost:5000/hotels/room/${hotelId}`)
    const {dates} = useContext(SearchContext)

    const getDatesInRange = (startDate,endDate)=>{
      const start = new Date(startDate)
      const end = new Date(endDate)

      const date =  new Date(start.getTime())
      let dates = []
      while(date <= end){
        dates.push(new Date(date))
        date.setDate(date.getDate()+1)
      }
      return dates
    }
    const alldates= getDatesInRange(dates[0].startDate, dates[0].endDate)

    const isAvailable = (roomNumber) =>{
      const isFound = roomNumber.unAvailableDates.some((date)=>{
        alldates.include(new Date(date).getTime())
    })
      return !isFound
    }

    const handleSelect =(e) =>{
        const checked = e.target.checked;
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms,value] : selectedRooms.filter((item) => item !== value))
    }
    const handleClick= ()=>{

    }
  return (
    <div className='reserve'>
        <div className='rContainer'>
      <Cancel className='rClose' sx={{fontSize: "30px !important",width:"30px !important", height:"30px !important"}} onClick={()=>setOpen(false)}/>
        <span>Select your room</span>
        {data.map((item)=>(
            <div className='rItem'>
                <div className='rItemInfo'>
                    <div className='rItemInfo'>
                    <div className='rTitle'>Title: {item.title}</div>
                    <div className='rDesc'>Description: {item.desc}</div>
                    <div className='rMax'>maxPeople: <b>{item.maxPeople}</b></div>
                    <div className='rPrice'>Price: {item.price}</div>

                    </div>
                    <div className='rSelectedRooms'>
                    {item.roomNumbers.map(roomNumber=>(
                        <div className="room">
                            <label>{roomNumber.number}</label>
                            <input type='checkbox' value={roomNumber._id} disabled={!isAvailable(roomNumber)}  onChange={handleSelect}/>

                         </div>

                        ))}
                      </div>
                 </div>
                 <button className='rButton' onClick={handleClick}>Reserve Now</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Reserve