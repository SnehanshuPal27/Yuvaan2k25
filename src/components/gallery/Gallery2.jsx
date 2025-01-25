import React from 'react'
import './Gallery2.css'

const images = [
    { src: 'https://enyugma.iiitbh.ac.in/assets/2-5ee6b14d.webp', alt: 'Image 1' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/4-ecc6f386.webp', alt: 'Image 2' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/3-8cdc40b4.webp', alt: 'Image 3' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/6-9ca8d35c.webp', alt: 'Image 4' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/7-de8d9aca.webp', alt: 'Image 5' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/1-ae264b04.webp', alt: 'Image 6' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/8-280433be.webp', alt: 'Image 7' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/5-23279f79.webp', alt: 'Image 8' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/10-05ae4fe2.webp', alt: 'Image 8' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/11-c7fadc08.webp', alt: 'Image 8' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/12-2758f7dc.webp', alt: 'Image 8' },
    { src: 'https://enyugma.iiitbh.ac.in/assets/9-ffffdb5c.webp', alt: 'Image 8' },
  ];

const Gallery2 = () => {
  return (
    <>
    <h1>Past Glimpses</h1>
    <div className='flex md:flex-nowrap flex-wrap flex-row gap-4 justify-center '>
        <div className='r1 lg:w-[24%] md:w-[30%]  w-full flex flex-col gap-4'>
            <img src={images[0].src} alt={images[0].alt} />
            <img src={images[4].src} alt={images[0].alt} />
            <img src={images[8].src} alt={images[0].alt} />
            <img src={images[5].src} alt={images[0].alt} />
        </div>
        <div className='r1 lg:w-[24%] md:w-[30%] flex flex-col gap-4'>
            <img src={images[1].src} alt={images[0].alt} />
            <img src={images[5].src} alt={images[0].alt} />
            <img src={images[9].src} alt={images[0].alt} />
            <img src={images[1].src} alt={images[0].alt} />
        </div>
        <div className='r1 lg:w-[24%] md:w-[30%] flex flex-col gap-4'>
            <img src={images[2].src} alt={images[0].alt} />
            <img src={images[6].src} alt={images[0].alt} />
            <img src={images[10].src} alt={images[0].alt} />
            <img src={images[8].src} alt={images[0].alt} />
        </div>
        <div className='r1 lg:w-[24%] md:hidden lg:flex  flex flex-col gap-4'>
            <img src={images[3].src} alt={images[0].alt} />
            <img src={images[7].src} alt={images[0].alt} />
            <img src={images[11].src} alt={images[0].alt} />
            <img src={images[5].src} alt={images[0].alt} />
        </div>
      
    </div>
    </>
  )
}

export default Gallery2