import React from 'react'
import { proOne, proTwo } from '../../images'
import './gallery.css'


function Gallery() {
  return (
    <div className='gallery-con'>
      <h3>Gallery</h3>
      <div className="img-container">
        <img src={proOne} alt="" />
        <img src={proTwo}  alt="" />
        <img src={proOne}  alt="" />
        <img src={proTwo}  alt="" />
        <img src={proOne}  alt="" />
        <img src={proTwo}  alt="" />
      </div>
    </div>
  )
}

export default Gallery
