import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div>
        {[...Array(100)].map((_, i) => (
          <br key={i} />
        ))}
      </div>
    </>
  )
}

export default App
