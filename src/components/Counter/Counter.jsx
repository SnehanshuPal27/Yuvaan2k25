import React from 'react'
import './Counter.css'
import SlotCounter from 'react-slot-counter';

const Counter = () => {
  return (
    <div class='counter-container'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex'>
                <SlotCounter
                    startValue={0}
                    value={10}
                    charClassName="char"
                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                />
                <span class='plus'>+</span>
            </div>
            <h2>EVENTS</h2>
        </div>
        
        <div className='flex flex-col justify-center items-center'>
            <div className='flex'>
                <SlotCounter
                    startValue={1000}
                    value={3000}
                    charClassName="char"
                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                />
                <span class='plus'>+</span>
            </div>
            <h2>FOOTFALL</h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className='flex'>
                <SlotCounter
                    startValue={10}
                    value={50}
                    charClassName="char"
                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                />
                <span class='plus'>+</span>
            </div>
            <h2>COMPETITIONS</h2>
        </div>
        
        

    </div>
  )
}

export default Counter