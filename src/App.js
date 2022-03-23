/** @format */
// import Header from './components/Header'

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Register from './pages/Register'
// import useToken from './components/useToken'
/* import Navbar from './components/Navbar.js' */
import Hero from './components/Hero'
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
