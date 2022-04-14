/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'

export default function EditAccommodation({ state, dispatch }) {
    console.log(state)
    const [valueFname, setValueFname] = useState('') //to reset the input field after sending the data to mongoDB
    const [valueLname, setValueLname] = useState('')
    const [valueUsername, setValueUsername] = useState('')
    const [render, setRender] = useState(0)

    const accessToken = useContext(Authentication)
    console.log(accessToken)

    const editUserData = async (e) => {
        e.preventDefault()
        const responds = await fetch(
            `api/users/${sessionStorage.getItem('user')}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${accessToken}`,
                },
                body: JSON.stringify(state), //state is an object
            },
        )
        const result = await responds.json()
        dispatch({
            type: 'modified_user',
            fname: state.fname,
            lname: state.lname,
            username: state.username,
            modification: result,
        })
        setValueFname('')
        setValueLname('')
        setValueUsername('')
        render ? setRender(0) : setRender(1)
    }

    function inputChangeFname() {}
    function inputChangeLname() {}
    function inputChangeUsername() {}

    if (true) {
        return (
            <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                {/* -----------------------profile pic start----------------------- */}
                <figure className="xl:w-60 xl:bottom-40 relative w-40 space-y-2 mt-6 lg:mt-14 flex flex-col items-center">
                    <img
                        className="xl:rounded-xl drop-shadow-lg rounded-full"
                        src={'https://picsum.photos/200/200.jpg'}
                        alt="lorem"
                    />
                    <figcaption className="text-best-white font-noto text-center">
                        {state.fname + ' ' + state.flname}
                    </figcaption>
                </figure>
                {/* -----------------------profile pic end------------------------- */}

                <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
                    {/* -----------------------profile section start------------------- */}

                    <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
                        <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 tex-3xl">
                            Change your Data
                        </h1>
                        <form onSubmit={editUserData}>
                            <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                                First Name: {state.fname}
                            </p>
                            <input
                                value={valueFname}
                                type="text"
                                onChange={inputChangeFname}
                                placeholder="New First Name"
                            />

                            <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                                Last Name: {state.lname}
                            </p>
                            <input
                                value={valueLname}
                                type="text"
                                onChange={inputChangeLname}
                                placeholder="New Last Name"
                            />

                            <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                                Username: {state.username}
                            </p>
                            <input
                                value={valueUsername}
                                type="text"
                                onChange={inputChangeUsername}
                                placeholder="New Username"
                            />

                            <button
                                type="submit"
                                className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2">
                                save data
                            </button>
                        </form>
                    </section>

                    {/* -----------------------profile section end--------------------- */}
                </div>
                <LogoLink />
            </main>
        )
    } else {
        return <Home />
    }
}
