import { useState, useEffect, useRef } from 'react';
import './About.css'

export default function About(){
    return(
    <div className='about-container'>
        <div className='after-movie'>
            <h1>AFTERMOVIES</h1>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HuRkfQ2vESA?si=a-Ep0u6JltmGcLF9"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

        </div>

        <div className='about-yuvaan'>
            <h1>About Yuvaan</h1>
            <p>Yuvaan, the annual cultural extravaganza of IIIT Guwahati, is a vibrant celebration of art,
                music, dance, and creativity. This multi-day event showcases the diverse talents of students,
                featuring a plethora of engaging activities like competitions, workshops, and performances.
                From electrifying musical concerts to mesmerizing dance performances, Yuvaan offers a
                captivating experience for all. The festival fosters a sense of community and camaraderie
                among students, making it a cherished tradition at the institute.</p>
        </div>

    </div>)}
