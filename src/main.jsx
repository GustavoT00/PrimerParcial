import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PrimerPunto from './PrimerPunto'
import SegundoPunto from './SegundoPunto'
import TercerPunto from './TercerPunto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerPunto/>
    <SegundoPunto/>
    <TercerPunto/>
  </React.StrictMode>,
)
