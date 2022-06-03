import React from 'react'
import useFetch from '../Hooks/useFetch'
import './FeaturedProperties.css'
function FeaturedProperties() {

    const { data,loading,error } = useFetch("http://localhost:5000/hotels?featured=true&limit=4")


  return (
    <div className='fp'>
        { loading ? "loading": <>
            { data.map((item)=>( 
            <div className='fpItem' key={item._id}>
                <img className='fpImg' src={item.photos[0]} alt='' />
                <span className='fpName'>{item.name}</span>
                <span className='fpCity'>{item.city}</span>
                <span className='fpPrice'>Starting from <p>${item.cheapestPrice}</p></span>
            {item.rating && <div className='fpRating'>
                <button>{item.rating}</button>
                <span>Excellent</span>
            </div>}
        </div>
        ))}
        </> }
    </div>
  )
}

export default FeaturedProperties