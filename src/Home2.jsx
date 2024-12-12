import { useState, useEffect, useRef } from 'react';
import './App2.css';

import CardList from './components/cards/CardComponent.jsx';
import ProfileCard from './components/teams/ProfileCard.jsx';
import Navbar from "./components/Navbar.jsx";
import About from "./components/about/About.jsx";
import Footer from './components/footer/footer.jsx';
import Gallery from './components/gallery/gallery.jsx';
function Home() {
    const [isAtTop, setIsAtTop] = useState(true);

    // Create refs for each section
    const introDivRef = useRef(null);
    const teamsRef = useRef(null);
    const sgcMembersRef = useRef(null);
    const sponsorsRef = useRef(null);

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
            imageUrl: '/PR.jpeg',
            buttonUrl: '/prTeam'
        },
        {
            title: 'Event Management',
            copy: 'It\'s the desert you\'ve always dreamed of',
            button: 'View Members',
            imageUrl: '/EventManagement.jpeg',
            buttonUrl: '/eventTeam'
        },
        {
            title: 'Sponsors',
            copy: 'The ones who earn the money for the event',
            button: 'View Members',
            imageUrl: '/Sponsors.jpeg',
            buttonUrl: '/sponsorTeam'
        },
        {
            title: 'Web & Creatives',
            copy: 'The ones who earn the money for the event',
            button: 'View Members',
            imageUrl: '/WebCreatives.jpeg',
            buttonUrl: '/wcTeam'
        },

        // Add other card data as needed...
    ];

    const SGC_Members = [
        {
            name: "Sai Yashwant",
            jobTitle: "President",
            id: "2201174",
            email: "sai.gantasala22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "/sai.png"
        },
        {
            name: "Siddharth Singh",
            jobTitle: "Vice President",
            id: "2201192",
            email: "siddharth.singh22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "/siddharth.png"
        },
        {
            name: "Madhur Jain",
            jobTitle: "General Secretary-Cultural",
            id: "",
            email: "",
            linkedin: "",
            imageUrl: "/madhur.png"
        },
        {
            name: "V.Kethareswaran",
            jobTitle: "Advisor",
            id: "2201118",
            email: "madhur.jain22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
    ]

    return (
        <>
            <Navbar refs={{ home: introDivRef, teams: teamsRef, sgc: sgcMembersRef, sponsors: sponsorsRef }} />

            <div ref={introDivRef} className="intro-div">
                <div className="navbar-space">
                    <img src="/cs2.png" alt="CS2" className="coming-soon" />
                    <img src="/image_Yuvaan.png" alt="Yuvaan" className="image-yuvaan" />
                </div>
            </div>

            <div className='info'>
                <About/>
                <Gallery/>
                <div ref={teamsRef} className="card-row">
                    <h2 className="card-heading">Teams:-</h2>
                    <CardList cards={cardsData} />
                </div>

                {/* <div ref={sgcMembersRef} className="card-row">
                    <h2 className="card-heading">SGC Members:-</h2>
                    <div className="card-continer">
                        <CardList cards={cardsData} />
                    </div>   
                </div> */}

                <div ref={sgcMembersRef} className="card-row">
                    <h2 className="card-heading">SGC Members:-</h2>
                    <div className="card-continer">
                        {SGC_Members.map((member, index) => (
                            <ProfileCard
                            key={index}
                            name={member.name}
                            jobTitle={member.jobTitle}
                            image={member.imageUrl}
                        />
                        ))}
                    </div>   
                </div>
                
                {/*<div ref={sponsorsRef} className="card-row">*/}
                {/*    <h2 className="card-heading">Sponsors:-</h2>*/}
                {/*    /!* <div className="card-continer">*/}
                {/*        <CardList cards={cardsData} />*/}
                {/*    </div> *!/*/}
                {/*</div>*/}
            </div>
            {/*<Footer />*/}
            {isAtTop && (
                <div className="scroll-down-icon">
                    <span>↓</span> Scroll Down
                </div>
            )}
        </>
    );
}

export default Home;
