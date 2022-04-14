/** @format */
import React, { useState, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import { useNavigate } from 'react-router-dom'
import { SetAuthentication } from '../context/setAccessTokenContext'
import alertTimeoutMessage from '../data/alertTimeoutMessage'

export default function Login({ dispatch, state }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const setAccessToken = useContext(SetAuthentication)

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        const result = await response.json()
        if (result.token) {
            dispatch({ type: 'login_fetch', user: result })
            setAccessToken(result.token)
            sessionStorage.setItem('key', result.token)
            sessionStorage.setItem('user', result._id)
            navigate('/profile')
        } else {
            setUsername('')
            setPassword('')
        }
    }

    return (
        <main className="flex flex-col justify-evenly items-center bg-huggingCrowd lg:bg-top bg-center bg-cover bg-fixed h-screen">
            <h1 className="underline underline-offset-8 decoration-1 font-zeyada text-center text-x6l px-8 backdrop-brightness-75 backdrop-blur-sm text-best-white border rounded">
                Login
            </h1>

            <form
                onSubmit={onSubmit}
                className="lg:w-1/3 w-2/3 flex backdrop-brightness-75 backdrop-blur-sm flex-col border-best-white border rounded">
                <input
                    className="mt-4 mx-4 p-1 rounded opacity-70"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={({ target: { value } }) => setUsername(value)}
                    required
                />
                <input
                    className="my-2 mx-4 p-1 rounded opacity-70"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    required
                />
                <button
                    type="submit"
                    className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2">
                    login
                </button>
            </form>
            <LogoLink />
        </main>
    )
}
