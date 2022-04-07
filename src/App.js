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
import Logout from './pages/Logout'
import EditProfile from './pages/EditProfile'
import { Authentication } from './context/accessTokenContext'
import { SetAuthentication } from './context/setAccessTokenContext'

export default function App() {

    const [toggle, setToggle] = useState(0);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('key') || '')

    const toggleBurger = (e) => { //menu visible or not?
        e.preventDefault()
        toggle ? setToggle(0) : setToggle(1);
    }

    return (
        <BrowserRouter>
            <Authentication.Provider value={accessToken}>
                <SetAuthentication.Provider value={setAccessToken}>
                    <Header toggle={toggle} setToggle={setToggle} toggleBurger={toggleBurger}/> {/* needs accessToken and setAccessToken */}
                    <div className={toggle ? "transition duration-75 blur ease-in saturate-50" : "transition duration-50 ease-in"}> {/* should be put in its own context */}
                    <Routes>
                        <Route path="/" element={<Home/>}/> {/* could use accessToken to toggle between the buttons */}
                        <Route path="/register" element={<Register/>} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/profile" element={<Profile/>} /> {/* needs accessToken */}
                        <Route path="/login" element={<Login setAccessToken={setAccessToken} />}/> {/* could redirect to <Home/> and change to <Logout/> */}
                        <Route path="/logout" element={<Logout/>} />
                        <Route path="/editprofile" element={<EditProfile accessToken={accessToken}/>} /> {/* needs accessToken */}
                    </Routes>
                    </div>
                    <Footer />
                </SetAuthentication.Provider>
            </Authentication.Provider>
        </BrowserRouter>
    )
}