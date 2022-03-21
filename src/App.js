/** @format */
// import Header from './components/Header'
import './assets/colorPattern.css'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Register from './pages/Register'
import useToken from './components/useToken'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {

    /* const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }   */
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            {/* <nav>
                <Link to="/"> Home </Link>
                <Link to="/"> Login </Link>
                <Link to="/"> Register </Link>
                <Link to="/about"> About </Link>
                <Link to="./contact"> Contact </Link>
            </nav> */}
            <Routes>
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}