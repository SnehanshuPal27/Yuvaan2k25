import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/cards/Cards';

function App() {
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
      title: 'Mountain View',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
      button: 'View Trips',
      imageUrl: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28',
      buttonUrl: '/mountain-trips'
    },
    {
      title: 'To The Beach',
      copy: 'Plan your next beach trip with these fabulous destinations',
      button: 'View Trips',
      imageUrl: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de',
      buttonUrl: '/beach-trips'
    },
    {
      title: 'Desert Destinations',
      copy: 'It\'s the desert you\'ve always dreamed of',
      button: 'Book Now',
      imageUrl: 'https://images.unsplash.com/photo-1545243424-0ce743321e11',
      buttonUrl: '/desert-destinations'
    },
    // Add other card data as needed...
  ];
  

  return (
    <>
      <Navbar />
      <div className="navbar-space">
        <img src="/cs2.png" alt="CS2" className="coming-soon" />
        <img src="/image_Yuvaan.png" alt="Yuvaan" className="image-yuvaan" />
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

        {[...Array(140)].map((_, i) => (
          <br key={i} />
        ))}
      </div>

      {isAtTop && (
        <div className="scroll-down-icon">
          <span>↓</span> Scroll Down
        </div>
      )}
    </>
  );
}

export default App;
