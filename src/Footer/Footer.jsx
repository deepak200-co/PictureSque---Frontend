import "./Footer.css";
import React from 'react'

export default function Footer() {
  return (
    <div>
       <div className='box'>
      <div className='boxcontainer'>
        <div className='boxrow'>
          <div className='boxcolumn'>
            <p className='header'>About us</p>
            <a href="sa" className='flinks'>Find more about us</a>
          </div>
          <div className='boxcolumn'>
            <p className='header'>Contactus</p>
            <a href="sa" className='flinks'>picturesque@gmail.com</a>
          </div>
          <div className='boxcolumn'>
            <p className='header'>Social Media</p>
            <a href="as" className='flinks'> Instagram </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}