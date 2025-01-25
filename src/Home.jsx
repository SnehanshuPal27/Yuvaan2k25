import { useState, useEffect, useRef } from 'react';
import './Home.css';

import CardList from './components/cards/CardComponent.jsx';
import ProfileCard from './components/teams/ProfileCard.jsx';
import Navbar from "./components/Navbar.jsx";
import About from "./components/about/About.jsx";
import Gallery2 from './components/gallery/Gallery2.jsx';
import IntroDiv from "./components/IntroDiv.jsx";
import Counter from './components/Counter/Counter.jsx';

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
                <Counter/>
                <Gallery2/>
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
