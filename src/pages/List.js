import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Lists from './Lists'

function List() {

  return (
    <div>
      <Navbar/>
      <Header type='list'  /> 
      <Lists/>
   
    </div>
  )
}

export default List