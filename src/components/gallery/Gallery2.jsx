import React from 'react'
import './Gallery2.css'

const images = [
    { src: '/Gallery_Images/Normal/M1.JPG', alt: 'Image 1' },//0
    { src: '/Gallery_Images/Normal/M2.JPG', alt: 'Image 2' },//1
    { src: '/Gallery_Images/Normal/M3.JPG', alt: 'Image 3' },//2
    { src: '/Gallery_Images/Normal/M4.JPG', alt: 'Image 4' },//3
    { src: '/Gallery_Images/Normal/M5.JPG', alt: 'Image 5' },//4
    { src: '/Gallery_Images/Large/S1.JPG', alt: 'Image 6' },//5
    { src: '/Gallery_Images/Large/S2.JPG', alt: 'Image 7' },//6
    { src: '/Gallery_Images/Normal/M6.JPG', alt: 'Image 8' },//7
    { src: '/Gallery_Images/Vertical/V1.JPG', alt: 'Image 9' },//8
    { src: '/Gallery_Images/Vertical/V2.JPG', alt: 'Image 10' },//9
    { src: '/Gallery_Images/Normal/M7.JPG', alt: 'Image 11' },//10
    { src: '/Gallery_Images/Vertical/V3.JPG', alt: 'Image 12' },//11
    { src: '/Gallery_Images/Large/S3.JPG', alt: 'Image 13' },//12
    { src: '/Gallery_Images/Normal/M8.JPG', alt: 'Image 14' },//13
    { src: '/Gallery_Images/Vertical/V4.JPG', alt: 'Image 15' },//14
    { src: '/Gallery_Images/Large/S4.JPG', alt: 'Image 16' },//15
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
            <img src={images[12].src} alt={images[0].alt} />
        </div>
        <div className='r1 lg:w-[24%] md:w-[30%] flex flex-col gap-4'>
            <img src={images[1].src} alt={images[0].alt} />
            <img src={images[5].src} alt={images[0].alt} />
            <img src={images[9].src} alt={images[0].alt} />
            <img src={images[13].src} alt={images[0].alt} />
        </div>
        <div className='r1 lg:w-[24%] md:w-[30%] flex flex-col gap-4'>
            <img src={images[2].src} alt={images[0].alt} />
            <img src={images[6].src} alt={images[0].alt} />
            <img src={images[10].src} alt={images[0].alt} />
            <img src={images[14].src} alt={images[0].alt} />
        </div>
        <div className='r1 lg:w-[24%] md:hidden lg:flex  flex flex-col gap-4'>
            <img src={images[3].src} alt={images[0].alt} />
            <img src={images[7].src} alt={images[0].alt} />
            <img src={images[11].src} alt={images[0].alt} />
            <img src={images[15].src} alt={images[0].alt} />
        </div>
      
    </div>
    </>
  )
}

export default Gallery2