/** @format */
// import Header from './components/Header'

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Register from './pages/Register'
/* import Navbar from './components/Navbar' */
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

export default function App() {

    const [toggle, setToggle] = useState(0)

    const toggleBurger = (e) => { //menu visible or not?
        e.preventDefault()
        toggle ? setToggle(0) : setToggle(1);
      }   

    return (
        <BrowserRouter>
            <Header toggle={toggle} setToggle={setToggle} toggleBurger={toggleBurger}/>
            {/*<Navbar />*/}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register toggle={toggle}/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
