
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
            <div className="after-movie">
                <PhotoFrame />
            </div>
            
            <div className="about-yuvaan">
                <h1>ΔΒΩUT ΨUVΔΔΠ</h1>
                <p>
                ΨUVAAN, THΞ ANNUΔL CULTURΔL ΞXTRΔVΔGΔNZΔ ΩF IIIT GUWΔHΔTI, IS Δ VIBRΔNT CΞLΞBRΔTIΩN ΩF ΔRT, MUSIC, DΔNCΞ, ΔND CRΞΔTIVITΨ. THIS MULTI-DΔΨ ΞVΞNT SHOWCΔSΞS THΞ DIVΞRSΞ TΔLΞNTS ΩF STUDΞNTS, FΞΔTURING Δ PLΞTHΩRΔ ΩF ΞNGΔGING ΔCTIVITIΞS LIKΞ CΩMPΞTITIΩNS, WΩRKSHΩPS, ΔND PΞRΓΩRMΔNCΞS. FRΩM ΞLΞCTRIFYING MUSICΔL CΩNCΞRTS TΩ MΞSMΞRIZING DΔNCΞ PΞRΓΩRMΔNCΞS, ΨUVAAN ΩFFΞRS Δ CΔPTIVΔTING ΞXPΞRIΞNCΞ FΩR ΔLL. THΞ FΞSTIVΔL FΩSTΞRS Δ SΞNSΞ ΩF CΩMMUNITΨ ΔND CΔMΔRΔDΞRIΞ ΔMΩNG STUDΞNTS, MΔKING IT Δ CHΞRISHΞD TRΔDITIΩN ΔT THΞ INSTITUTΞ.
                </p>
            </div>
        </div>
    );
}







