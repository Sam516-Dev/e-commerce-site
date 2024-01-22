import React from 'react'
import { useOurContext } from "../Context/MyContext";


const AboutUs = () => {

  const { cartItems } = useOurContext();


  return (
    <div className='h-screen mt-56'>
      <p> Hello From About us </p>
      {
        cartItems.map((item,index)=>{
          return(
            <h1 key={index}> {item.category} </h1>
            
          )
        })
      }
    </div>
  )
}

export default AboutUs
