import { useEffect } from 'react';
import './About.css';
import PhotoFrame from "./PhotoFrame.jsx";

export default function About() {
    useEffect(() => {
        const paragraph = document.querySelector('.about-yuvaan p');
        const words = paragraph.textContent.split(' '); // Split text into words
        paragraph.innerHTML = ''; // Clear the paragraph

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' '; // Add a space after each word
            span.style.animationDelay = `${index * 0.05}s`; // Delay for each word
            paragraph.appendChild(span);
        });
    }, []);

    return (
        <div className="about-container">
            {/* Background Video */}
            <video className="background-video" autoPlay muted loop>
                <source src="/videoBG1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="after-movie">
                <PhotoFrame />
            </div>

            <div className="about-yuvaan">
                <h1>AΒOUT YUVAAN</h1>
                <div className="about-scroll">
                    {/* <p>ΨUVAAN, THΞ ANNUΔL CULTURΔL ΞXTRΔVΔGΔNZΔ ΩF IIIT GUWΔHΔTI, IS Δ VIBRΔNT CΞLΞBRΔTIΩN ΩF ΔRT, MUSIC, DΔNCΞ, ΔND CRΞΔTIVITΨ. THIS MULTI-DΔΨ ΞVΞNT SHOWCΔSΞS THΞ DIVΞRSΞ TΔLΞNTS ΩF STUDΞNTS, FΞΔTURING Δ PLΞTHΩRΔ ΩF ΞNGΔGING ΔCTIVITIΞS LIKΞ CΩMPΞTITIΩNS, WΩRKSHΩPS, ΔND PΞRΓΩRMΔNCΞS. FRΩM ΞLΞCTRIFYING MUSICΔL CΩNCΞRTS TΩ MΞSMΞRIZING DΔNCΞ PΞRΓΩRMΔNCΞS, ΨUVAAN ΩFFΞRS Δ CΔPTIVΔTING ΞXPΞRIΞNCΞ FΩR ΔLL. THΞ FΞSTIVΔL FΩSTΞRS Δ SΞNSΞ ΩF CΩMMUNITΨ ΔND CΔMΔRΔDΞRIΞ ΔMΩNG STUDΞNTS, MΔKING IT Δ CHΞRISHΞD TRΔDITIΩN ΔT THΞ INSTITUTΞ.</p> */}
                    <p>YUVAAN, THE ANNUAL CULTURAL EXTRAVAGANZA OF IIIT GUWAHATI, IS A VIBRANT CELEBRATION OF ART, MUSIC, DANCE, AND CREATIVITY. THIS MULTI-DAY EVENT SHOWCASES THE DIVERSE TALENTS OF STUDENTS, FEATURING A PLETHORA OF ENGAGING ACTIVITIES LIKE COMPETITIONS, WORKSHOPS, AND PERFORMANCES. FROM ELECTRIFYING MUSICAL CONCERTS TO MESMERIZING DANCE PERFORMANCES, YUVAAN OFFERS A CAPTIVATING EXPERIENCE FOR ALL. THE FESTIVAL FOSTERS A SENSE OF COMMUNITY AND CAMARADERIE AMONG STUDENTS, MAKING IT A CHERISHED TRADITION AT THE INSTITUTE</p>
                </div>
            </div>
        </div>
    );
}
