/** @format */
// import Header from './components/Header'
import './assets/colorPattern.css'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import useToken from './components/useToken'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {

    /* const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }   */
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}