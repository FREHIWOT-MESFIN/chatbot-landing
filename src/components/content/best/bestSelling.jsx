import React from 'react'
import { proOne, proTwo } from '../../images.js'
import './best.css'

function BestSelling() {
  return (
    <div className='bestSelling-content'>
      <h2>Best Selling</h2>
      <p>Lorem iicing elit. Tempore aliquid minima dolorum.</p>
      <div className="card-container">
        <div className='card'>
            <img src={proOne} alt="" />
            <h4>Strawberry Donut</h4>
            <p>$7.00</p>
        </div>
        <div className='card'>
            <img src={proTwo} alt="" />
            <h4>Strawberry Donut</h4>
            <p>$7.00</p>
        </div>
        <div className='card'>
            <img src={proOne} alt="" />
            <h4>Strawberry Donut</h4>
            <p>$7.00</p>
        </div>
      </div>
      <button>All Donuts</button>
    </div>
  )
}

export default BestSelling
