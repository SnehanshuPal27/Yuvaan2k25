import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ImagePathUpdaterProvider } from './hooks/useImagePathUpdater.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImagePathUpdaterProvider>
      <App />
    </ImagePathUpdaterProvider>
  </StrictMode>,
)
