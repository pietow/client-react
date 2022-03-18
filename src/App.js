/** @format */

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './routes/login'
import Admin from './routes/admin'
import Contact from './routes/contact'
import Register from './routes/register'
import useToken from './components/useToken'

export default function App() {
    const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }
    return (
        <BrowserRouter>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/"> Login </Link>
                <Link to="/"> Register </Link>
                <Link to="/"> About </Link>
                <Link to="/"> Contact </Link>
            </nav>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
