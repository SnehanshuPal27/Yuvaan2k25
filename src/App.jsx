import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/cards/Cards';


function App() {
  // Example usage
  const cardsData = [
    { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
    { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
    { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
    { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
  ];
  return (
    <>
      <Navbar />
      <div className="navbar-space">
        <img src="/cs2.png" alt="CS2" className="coming-soon" />
        <img src="/image_Yuvaan.png" alt="Yuvaan" className="image-yuvaan" />
      </div>
      

      <div className='info'>
      <CardList cards={cardsData} />
        {[...Array(140)].map((_, i) => (
          <br key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
