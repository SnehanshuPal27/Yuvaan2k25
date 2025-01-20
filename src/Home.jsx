import { useState, useEffect, useRef } from 'react';
import './Home.css';

import CardList from './components/cards/CardComponent.jsx';
import ProfileCard from './components/teams/ProfileCard.jsx';
import Navbar from "./components/Navbar.jsx";
import About from "./components/about/About.jsx";
import Gallery from './components/gallery/Gallery.jsx';
import IntroDiv from "./components/IntroDiv.jsx";
function Home() {
    const [isAtTop, setIsAtTop] = useState(true);

    // Function to check scroll position
    const handleScroll = () => {
        setIsAtTop(window.scrollY === 0);
    };

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
        <IntroDiv/>
            <div className='info'>
                <About/>

                <Gallery/>
            </div>

            {isAtTop && (
                <div className="scroll-down-icon">
                    <span>↓</span> Scroll Down
                </div>
            )}
        </>
    );
}

export default Home;
