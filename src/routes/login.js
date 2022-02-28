/** @format */
import React, { useState, useEffect } from 'react'

export default function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    function onSubmit(event) {
        fetch(`/api/login`, {
            method: 'POST',
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                if (res.status < 200 || res.status > 299)
                    return alert(
                        'We had a problem processing this...please try again.',
                    )
                return res.json()
            })
            .then(console.log)
        event.preventDefault()
    }
    return (
        <div className="w-fit mx-auto flex items-center h-screen">
            <div className="form border-2 rounded">
                <form onSubmit={onSubmit} className="flex flex-col m-5">
                    <input
                        className="m-3 p-1 border-2 rounded"
                        type="text"
                        placeholder="username"
                        value={user}
                        onChange={({ target: { value } }) => setUser(value)}
                    />
                    <input
                        className="m-3 p-1 border-2 rounded"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />
                    <button
                        type="submit"
                        className="mx-auto p-1 border-2 rounded bg-green-600 w-1/2"
                    >
                        login
                    </button>
                </form>
            </div>
        </div>
    )
}
