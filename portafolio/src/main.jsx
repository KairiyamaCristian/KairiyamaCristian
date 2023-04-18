import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './components/card'
import Navbar from './components/navBar'
import './index.css'
import Perfil from './components/perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Perfil/>
    <Card /><Card />
    <Navbar/> 
  </React.StrictMode>,
)
