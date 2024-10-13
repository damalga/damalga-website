import React from 'react'
import ReactDOM from 'react-dom/client'

import Cursor from './components/Cursor'
import Canvas from './components/Canvas'

import Header from './Header'
import Resume from './Resume'
import Footer from './Footer'

import './assets/stylessheets/css/style.css'

ReactDOM.createRoot(document.getElementById('portfolio')).render(
  <React.StrictMode>
    <Cursor />
    <Canvas />
    <Header />
    <Resume />
    <Footer />
  </React.StrictMode>
)
