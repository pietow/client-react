/** @format */
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Login from './pages/Login'
// import Test from './pages/Test'
import EditProfile from './pages/EditProfile'

export default function App() {

    const [toggle, setToggle] = useState(0);

    const toggleBurger = (e) => { //menu visible or not?
        e.preventDefault()
        toggle ? setToggle(0) : setToggle(1);
    }

    return (
        <BrowserRouter>
            <Header toggle={toggle} setToggle={setToggle} toggleBurger={toggleBurger}/>
            <div className={toggle ? "transition duration-75 blur ease-in saturate-50" : "transition duration-50 ease-in"}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/test" element={<Test/>}/> */}
                <Route path="/register" element={<Register/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/editprofile" element={<EditProfile />} />
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}
