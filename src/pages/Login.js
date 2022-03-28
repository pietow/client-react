/** @format */
import React, { useState/* , useEffect */ } from 'react'
// import PropTypes from 'prop-types'
// import Logo from '../components/Logo'
import Logo_Big from '../assets/img/logo-big.png'

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

        <main className="bg-login bg-content bg-center bg-cover h-screen">
            <h1 className="text-best-white text-6xl font-zeyada text-center pt-8">Login</h1>
            <figure className="w-28 h-28 mx-auto pt-10">
                    <img className="" src={Logo_Big} alt="roam mate logo"/>
                    <figcaption></figcaption>
                </figure>
            <form onSubmit={onSubmit} className="backdrop-blur-sm mx-auto top-2 relative flex flex-col border-best-white border mx-4 rounded top-60 absolute">
                     <input
                        className="my-2 mx-4 p-1 rounded opacity-70"
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
            
                {/* <Logo /> */}
                
            
        </main>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }