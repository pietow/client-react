/** @format */
// import Header from './components/Header'

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Register from './pages/Register'
/* import Navbar from './components/Navbar' */
import Hero from './components/Hero'
import Features from './components/Features'
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
            <Hero />
            <Features />
            <Routes>
                <Route path="/register" element={<Register toggle={toggle}/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
