import { useState, useEffect } from 'react';
import './App2.css';

import CardList from './components/cards/Cards';

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

    const cardsData = [
        {
            title: 'Media & Publicity',
            copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
            button: 'View Members',
            imageUrl: '/MediaPublicity.jpeg',
            buttonUrl: '/mediaTeam'
        },
        {
            title: 'Public Relations',
            copy: 'Plan your next beach trip with these fabulous destinations',
            button: 'View Members',
            imageUrl: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de',
            buttonUrl: '/prTeam'
        },
        {
            title: 'Event Management',
            copy: 'It\'s the desert you\'ve always dreamed of',
            button: 'View Members',
            imageUrl: 'https://images.unsplash.com/photo-1545243424-0ce743321e11',
            buttonUrl: '/desert-destinations'
        },
        {
            title: 'Sponsors',
            copy: 'The ones who earn the money for the event',
            button: 'View Members',
            imageUrl: 'https://images.unsplash.com/photo-1545243424-0ce743321e11',
            buttonUrl: '/desert-destinations'
        },
        {
            title: 'Web & Creatives',
            copy: 'The ones who earn the money for the event',
            button: 'View Members',
            imageUrl: 'https://images.unsplash.com/photo-1545243424-0ce743321e11',
            buttonUrl: '/desert-destinations'
        },

        // Add other card data as needed...
    ];


    return (
        <>
            <div className="intro-div">
            <div className="navbar-space">
                <img src="/cs2.png" alt="CS2" className="coming-soon" />
                <img src="/image_Yuvaan.png" alt="Yuvaan" className="image-yuvaan" />
            </div>
            </div>


            <div className='info'>
                <div className = "card-row">
                    <h2 className="card-heading">Teams:-</h2>
                    <CardList cards={cardsData} />
                </div>
                <div className = "card-row">
                    <h2 className="card-heading">SGC Members:-</h2>
                    <CardList cards={cardsData} />
                </div>
                <div className = "card-row">
                    <h2 className="card-heading">Sponsors:-</h2>
                    <CardList cards={cardsData} />
                </div>

                {/*{[...Array(140)].map((_, i) => (*/}
                {/*    <br key={i} />*/}
                {/*))}*/}
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
