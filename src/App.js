/** @format */
// import Header from './components/Header'

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
import Dashboard from './pages/dashboard'

export default function App() {

    /* const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }   */
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            {/* <Hero /> */}
            {/* <nav>
                <Link to="/"> Home </Link>
                <Link to="/"> Login </Link>
                <Link to="/"> Register </Link>
                <Link to="/about"> About </Link>
                <Link to="./contact"> Contact </Link>
            </nav> */}
            <Header />
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}