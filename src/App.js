/** @format */
// import Header from './components/Header'

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Navbar from './components/Navbar'
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

    /* const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }   */
    return (
        <BrowserRouter>
            <Header toggle={toggle} setToggle={setToggle} toggleBurger={toggleBurger}/>
            <Navbar />
            <Hero />
            <Features />
            {/* <nav>
                <Link to="/"> Home </Link>
                <Link to="/"> Login </Link>
                <Link to="/"> Register </Link>
                <Link to="/about"> About </Link>
                <Link to="./contact"> Contact </Link>
            </nav> */}
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register toggle={toggle}/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
