import './Nav.css'
import React, { useEffect, useState } from 'react'
import image from '../images/580b57fcd9996e24bc43c529 (1).png'

function Nav() {
  const [show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scroll>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  console.log(show);
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img  style={{width:'150px'}} src={image} alt="netflix-logo" />
    </div>
  )
}

export default Nav