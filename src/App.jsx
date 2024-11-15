import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="navbar-space">
        <img src="/cs2.png" alt="CS2" className="coming-soon" />
        <img src="/image_Yuvaan.png" alt="Yuvaan" className="image-yuvaan" />
      </div>

      <div>
        {[...Array(140)].map((_, i) => (
          <br key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
