import React from 'react'
import useFetch from '../Hooks/useFetch'
import './PropertyList.css'
function PropertyList() {
    const { data,loading,error } = useFetch("http://localhost:5000/hotels/countByType")
    console.log(data)
    const images =[
       
            '/images/bed3.jpg',
            '/images/bed4.jpg',
            '/images/bed3.jpg',
            '/images/bed4.jpg',
    
    ]
    console.log(data)

  return (
    <div  className='pList'>
        { loading?( "loading" ) :(
        <>
           {data && images.map((img, i)=>(
            <div className='pListItem' key={i}>
                     <img className='pListImg' src={img} alt='' />
                        <div className='pListTitles'>
                                 <h1>{data[i]?.type}</h1> 
                              <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>     
                      </div>
           ))} 
       </>)}
    </div>
  )
}

export default PropertyList