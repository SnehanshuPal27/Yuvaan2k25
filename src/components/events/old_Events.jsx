import React from 'react'
import './Events.css'
import Slider from './Slider'
import Slider2 from './Slider2'

const Events = () => {
  return (
    <div className='main'>
        <div className='day'>
            <h1>EVENTS</h1>
            <h2>Day 1</h2>
            <div>
                <Slider />
            </div>
        </div>

        <div className='day day2'>
            <h2>Day 2</h2>
            <div>
                <Slider2 />
            </div>
        </div>
    </div>
  )
}

export default Events