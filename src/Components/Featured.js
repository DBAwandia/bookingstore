import React from 'react'
import useFetch from '../Hooks/useFetch'
import './Featured.css'
function Featured() {

const { data,loading,error } = useFetch("http://localhost:5000/hotels/countByCity?cities=Berlin,Madrid,London,Chelsea")

  return (
    <div className='featured'>
        { loading ? ( "Loading please wait" ) : ( <><div className='featuredItem'>
            <img src='/images/bed1.jpg' alt='' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='/images/bed4.jpg' alt='' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
         <div className='featuredItem'>
            <img src='/images/bed3.jpg' alt='' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Austin</h1>
                <h2>{data[3]} properties</h2>
            </div>
        </div></>)}
        
    </div>
    
  )
}

export default Featured