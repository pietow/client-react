/** @format */
import React, { useState } from 'react'
import Logo from '../components/Logo'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const onSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`/api/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username, password}),
            })
        const result = await response.json()

        console.log(result)
    }

    return (

        <main className="bg-login bg-center bg-cover bg-fixed h-screen">
            <h1 className="text-best-white text-6xl font-zeyada text-center py-8">Login</h1>

            <form onSubmit={onSubmit} className="backdrop-blur-sm flex flex-col border-best-white border mx-4 my-40 rounded">{/*  */}
                     <input
                        className="mt-4 mx-4 p-1 rounded opacity-70"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={({ target: { value } }) => setUsername(value)}
                    />
                    <input
                        className="my-2 mx-4 p-1 rounded opacity-70"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />
                    <button
                        type="submit"
                        className="mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2"
                    >
                        login
                    </button>
                </form>

                <div className="w-fit scale-[3] mx-auto border border-best-white rounded-full">
                <a href="/"><Logo /></a>
            </div>          
        </main>
    )
}