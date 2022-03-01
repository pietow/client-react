/** @format */

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import Admin from './routes/admin'

export default function App() {
    const [token, setToken] = useState('')
    if (!token) {
        return <Login setToken={setToken}></Login>
    }  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}
