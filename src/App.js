/** @format */
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import HeaderLarge from './components/HeaderLarge'

export default function App() {

    const [toggle, setToggle] = useState(0);

    const toggleBurger = (e) => { //menu visible or not?
        e.preventDefault()
        toggle ? setToggle(0) : setToggle(1);
    }

    return (
        <BrowserRouter>
            <HeaderLarge/>
            {/* <Header toggle={toggle} setToggle={setToggle} toggleBurger={toggleBurger}/> */}
            

            <div className={toggle ? "transition duration-75 blur ease-in saturate-50" : "transition duration-50 ease-in"}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}
