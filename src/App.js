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
import { BlurContext } from './context/blurContext'


export default function App() {

    const [toggle, setToggle] = useState(0);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('key') || '')

    return (
        <BrowserRouter>
            <Authentication.Provider value={accessToken}>
                <SetAuthentication.Provider value={setAccessToken}>
                    <Header toggle={toggle} setToggle={setToggle} /> {/* needs accessToken and setAccessToken */}
                    <BlurContext.Provider>{/* could be filled with the toggle stuff from one line below, but might be too much work; would be useContext in every component; feels not right */}
                        <div className={toggle ? "transition duration-75 blur ease-in saturate-50" : "transition duration-50 ease-in"}> {/* should be put in its own context */}
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/register" element={<Register/>} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/profile" element={<Profile/>} />
                            <Route path="/login" element={<Login />}/>
                            <Route path="/logout" element={<Logout/>} />
                            <Route path="/editprofile" element={<EditProfile/>} /> {/* needs accessToken */}
                        </Routes>
                        </div>
                    </BlurContext.Provider>
                    <Footer />
                </SetAuthentication.Provider>
            </Authentication.Provider>
        </BrowserRouter>
    )
}