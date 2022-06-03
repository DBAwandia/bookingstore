import React from 'react'
import { Link } from 'react-router-dom'
import './SearchItem.css'
function SearchItem({item}) {
  return (
    <div className='baz'>
    <div className='image_bar'>
      <div className='image'>
        <img src={item.photos[0]} alt='' />
      </div>
      <div className='center_bar'>
        <h1>{item.name}</h1>
        <p>{item.distance}</p>
        <button>Free Airport Taxi</button>
        <b>Studio Apartment with air conditioning</b>
        <p  className='Cancellations'>{item.desc}</p>
        <p className='Cancellation'>Free Cancellation</p>
        <p className='later'>You can cancel later... lock this profits</p>
      </div>
      <div className='right_bar'>
        {item.rating && <div className='ratingss'>
          <h1>Excellent</h1>
          <button>{item.rating}</button>
        </div>}
        <b>${item.cheapestPrice}</b>
        <p>Include taxes and fees</p>
        <div className='butoons'>
        <Link to={`/hotels/${item._id}`}>
        
          <button className='availability'>See Availability</button>
        </Link>
        </div>
      </div>
    </div>
 
  </div>
  )
}

export default SearchItem
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './SearchItem.css'
// function SearchItem() {
//   return (
//     <div className='baz'>
//     <div className='image_bar'>
//       <div className='image'>
//         <img src='/images/bed4.jpg' alt='' />
//       </div>
//       <div className='center_bar'>
//         <h1>thtr</h1>
//         <p>thtrhtrh</p>
//         <button>Free Airport Taxi</button>
//         <b>Studio Apartment with air conditioning</b>
//         <p  className='Cancellations'>gdsgsd</p>
//         <p className='Cancellation'>Free Cancellation</p>
//         <p className='later'>You can cancel later... lock this profits</p>
//       </div>
//       <div className='right_bar'>
//        <div className='ratingss'>
//           <h1>Excellent</h1>
//           <button>54</button>
//         </div>
//         <b>$545</b>
//         <p>Include taxes and fees</p>
//         {/* <Link to={`/hotels/${item._id}`}> */}
        
//           <button>See Availability</button>
//         {/* </Link> */}
//       </div>
//     </div>
 
//   </div>
//   )
// }

// export default SearchItem