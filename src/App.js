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
import EditPhoto from './pages/EditPhoto'
import EditAccommodation from './pages/EditAccommodation'
/* context */
import { Authentication } from './context/accessTokenContext'
import { SetAuthentication } from './context/setAccessTokenContext'
//USEREDUCER
import { initialState, userReducer } from './data/userReducer'
import ChatBox from './components/ChatBox'

export default function App() {
    const [state, dispatch] = useReducer(userReducer, initialState)
    const [toggle, setToggle] =
        useState(0) /* blurs pages when menu is opening on small screens  */
    const [resize, setResize] = useState(0)
    const [accessToken, setAccessToken] = useState(
        sessionStorage.getItem('key') || '',
    ) /* get safety token from backend */
    const [userId, setUserId] = useState() //searchbar vs chatbox, brief and ugly
    const [chatValue, setChatValue] = useState('') //prop-drilling for chatbox
    const [allMessages, setAllMessages] = useState([])
    const [allSenders, setAllSenders] = useState([])

    const seeAllMessages = async () => {
        const receiver = sessionStorage.getItem('user')
        const response = await fetch(`/api/message/${receiver}/receive`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application',
                'authorization': `bearer ${accessToken}`,
            },
        })
        const result = await response.json()
        setAllMessages(result.reverse())
        const reducedObj = result.reduce((acc, curr) => {
            acc[curr.sender._id] = {
                sender: curr.sender.username,
                id: curr.sender._id,
                text: curr.text,
            }
            return acc
        }, {})
        const userList = Object.values(reducedObj)
        setAllSenders(userList)
    }

    return (
        <BrowserRouter>
            <Authentication.Provider value={accessToken}>
                <SetAuthentication.Provider value={setAccessToken}>
                    <Header
                        toggle={toggle}
                        setToggle={setToggle}
                        dispatch={dispatch}
                        setChatValue={setChatValue}
                        state={state}
                    />
                    <ChatBox
                        allSenders={allSenders}
                        seeAllMessages={seeAllMessages}
                        setAllMessages={setAllMessages}
                        allMessages={allMessages}
                        accessToken={accessToken}
                        resize={resize}
                        setResize={setResize}
                        userId={userId}
                        chatValue={chatValue}
                        setChatValue={setChatValue}
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
                                element={
                                    <Search
                                        seeAllMessages={seeAllMessages}
                                        allMessages={allMessages}
                                        setAllMessages={setAllMessages}
                                        state={state}
                                        resize={resize}
                                        setResize={setResize}
                                        setUserId={setUserId}
                                    />
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <Login dispatch={dispatch} state={state} />
                                }
                            />
                            <Route
                                path="/editphoto"
                                element={
                                    <EditPhoto
                                        dispatch={dispatch}
                                        state={state}
                                    />
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
