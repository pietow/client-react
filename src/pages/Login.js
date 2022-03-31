/** @format */
import React, { useState } from 'react'
import LogoLink from '../components/LogoLink'

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
        alert('you might be logged in.\n or are you?')
    }

    return (

        <main className="flex flex-col justify-evenly items-center bg-huggingCrowd lg:bg-top bg-center bg-cover bg-fixed h-screen">
            <h1 className="underline underline-offset-8 decoration-1 font-zeyada text-center text-x6l px-8 backdrop-brightness-75 backdrop-blur-sm text-best-white border rounded">Login</h1>

            <form onSubmit={onSubmit} className="lg:w-1/3 w-2/3 flex backdrop-brightness-75 backdrop-blur-sm flex-col border-best-white border rounded">{/* backdrop-brightness-75 backdrop-blur-sm  */}
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
                        className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2"
                    >
                        login
                    </button>
                </form>
                <LogoLink />        
        </main>
    )
}