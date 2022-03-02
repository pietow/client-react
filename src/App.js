/** @format */

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import Admin from './routes/admin'
import useToken from './components/useToken'

export default function App() {

    const { token, setToken } = useToken()

    if (!token) {
        return <Login setToken={setToken}></Login>
    }  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}
