import React from 'react'
import ReactDOM from 'react-dom/client'

import Canvas from './Canvas'
import Header from './Header'
import Resume from './Resume'

import './assets/stylessheets/css/style.css'

ReactDOM.createRoot(document.getElementById('portfolio')).render(
  <React.StrictMode>
    <Canvas />
    <Header />
    <Resume />
  </React.StrictMode>
)
