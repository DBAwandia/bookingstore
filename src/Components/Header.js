import React, { useContext, useState } from 'react'
import{ AirplanemodeActive,  CalendarMonth, HotelRounded, LocalTaxi, Person} from '@mui/icons-material';
import "./Header.css"
import { useNavigate} from 'react-router-dom'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { AuthContext} from "../Context/authContext"
import {format} from "date-fns"
import { SearchContext } from '../Context/SearchContext';
function Header({type}) {
    const navigate = useNavigate()
    const { user} =  useContext(AuthContext)
    const[destination, setDestination] =useState("")
    const[openDate, setOpenDate] = useState(false)
    const[openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [dates, setDates ] =useState([
        {
          startDate: new Date(),
          endDate:new Date(),
          key: 'selection'
        }
      ])
      const {dispatch} = useContext(SearchContext)

      const  handleSearch =()=>{
          dispatch({type: "NEW_SEARCH", payload:{destination, dates,options}})
          navigate('/hotels', { state:{ destination, dates, options } })
      }
      const handleClick = (name, operation)=>{
            setOptions( prev =>{return{
                ...prev,
                [name]: operation === "i"? options[name]+1 :  options[name]-1,
            }})
      }


  return (
    <div className={ type === 'list' ?"header listNode" : "header"}>
        <div className ='headerList'>
            <div className='headerListItem'>
                <HotelRounded sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }}/>
                <p>Stays</p>
            </div>
            <div className='headerListItem'>
                < AirplanemodeActive sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }} />
                <p>Flights</p>
            </div> 
              <div className='headerListItem'>
                <HotelRounded sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }} />
                <p>Attractions</p>
            </div> 
              <div className='headerListItem'>
                <LocalTaxi sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }}/>
                <p>Airport Taxis</p>
            </div> 
            { type !== "list" && <>  <div className='menus'>
                <h1 className='headerTitle'> A lifetime discount?</h1>
                <p className='headerDesc'>Get reward for your travels, unlock 10% savings </p>
                {!user && <button className='headerButton'>Sign in / Register</button>}
            </div>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                    <p>
                    <HotelRounded sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }}/>
                    </p>
                    <input type='text' placeholder='Where are you going' onChange={ e=>setDestination(e.target.value)} />
                </div>
                <div className='headerSearchItem'>
                    <p>
                    <CalendarMonth sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }}/>
                    </p>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item)=> setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        minDate={new Date()}
                        className='date'
                    />}
                </div>
                <div className='headerSearchItem'>
                    <p>
                    <Person sx={{
                    marginRight: "15px",
                    width: "35px !important",
                    height:"35px !important",
                }}/>
                    </p>
                    <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children ${options.room} room`}</span>
                    { openOptions &&
                    <div className='options'>
                        <div className='optionItem'>
                            <span>Adult</span>
                            <div className='optionCounter'>
                                <button disabled={options.adult <= 1}  onClick={()=>handleClick("adult", "d")}>-</button>
                                    <span className='optionCounterNumber'>{options.adult}</span>
                                <button  onClick={()=>handleClick("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className='optionItem'>
                            <span>Children</span>
                            <div className='optionCounter'>
                                <button disabled={options.children <= 1}  onClick={()=>handleClick("children", "d")}>-</button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                <button  onClick={()=>handleClick("children", "i")}>+</button>
                            </div>
                        </div> <div className='optionItem'>
                            <span>Room</span>
                            <div className='optionCounter'>
                                <button disabled={options.room <= 1}   onClick={()=>handleClick("room", "d")}>-</button>
                                    <span className='optionCounterNumber'>{options.room}</span>
                                <button  onClick={()=>handleClick("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className='headerSearchItem'>
                   
                <button onClick={ handleSearch }>Search</button>
                </div>
                </div> </>}
            </div>
    </div>
  )
}

export default Header