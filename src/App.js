/** @format */
/* setup */
import React, { useState, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* pages */
import Contact from './pages/Contact'
import Register from './pages/Register'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Login from './pages/Login'
import EditProfile from './pages/EditProfile'
import EditAccount from './pages/EditAccount'
import EditAccommodation from './pages/EditAccommodation'
/* context */
import { Authentication } from './context/accessTokenContext'
import { SetAuthentication } from './context/setAccessTokenContext'
//USEREDUCER
import { initialState, userReducer } from './data/userReducer'

export default function App() {
    const [state, dispatch] = useReducer(userReducer, initialState)
    const [toggle, setToggle] =
        useState(0) /* blurs pages when menu is opening on small screens  */
    const [accessToken, setAccessToken] = useState(
        sessionStorage.getItem('key') || '',
    ) /* get safety token from backend */

    return (
        <BrowserRouter>
            <Authentication.Provider value={accessToken}>
                <SetAuthentication.Provider value={setAccessToken}>
                    <Header
                        toggle={toggle}
                        setToggle={setToggle}
                        dispatch={dispatch}
                    />
                    <div
                        className={
                            toggle
                                ? 'transition duration-75 blur ease-in saturate-50'
                                : 'transition duration-50 ease-in'
                        }>
                        {' '}
                        {/* should be put in its own context */}
                        <Routes>
                            <Route path="/*" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route
                                path="/profile"
                                element={
                                    <Profile
                                        state={state}
                                        dispatch={dispatch}
                                    />
                                }
                            />
                            <Route
                                path="/search"
                                element={<Search state={state} />}
                            />
                            <Route
                                path="/login"
                                element={
                                    <Login dispatch={dispatch} state={state} />
                                }
                            />
                            <Route
                                path="/editprofile"
                                element={
                                    <EditProfile
                                        dispatch={dispatch}
                                        state={state}
                                    />
                                }
                            />
                            <Route
                                path="/edithost"
                                element={
                                    <EditAccommodation
                                        dispatch={dispatch}
                                        state={state}
                                    />
                                }
                            />
                            <Route
                                path="/editaccount"
                                element={
                                    <EditAccount
                                        dispatch={dispatch}
                                        state={state}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                    <Footer />
                </SetAuthentication.Provider>
            </Authentication.Provider>
        </BrowserRouter>
    )
}
