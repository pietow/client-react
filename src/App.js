/** @format */

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import Contact from './pages/contact'
import Register from './pages/register'
import useToken from './components/useToken'
import Navbar from './components/navbar'
import Hero from './components/hero'

export default function App() {
    const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }
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
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
