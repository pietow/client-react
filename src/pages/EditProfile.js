/** @format */

import React, { useState, useEffect, useReducer } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../hooks/reducer'

export default function EditProfile({ accessToken }) {
    const [state, dispatch] = useReducer(reducer, {
        fetched: [],
        fname: '',
        lname: '',
        username: '',
        email: '',
    })
    const [value, setValue] = useState('') //to reset the input field after sending the data to mongoDB

    useEffect(() => {
        ;(async () => {
            const response = await fetch('api/users/', { // fetch users/_id ???
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${accessToken}`, //after successful login you get access token
                },
            })
            const result = await response.json()
            dispatch({
                type: 'fetched_data',
                fetched: result,
            })
        })()
    }, [])

    const editUserData = async (e) => {
        //send data to mongoDB
        e.preventDefault()
        const responds = await fetch(`api/users/${state.fetched[0]?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${accessToken}`,
            },
            body: JSON.stringify(state), //state is an object
        })
        const result = await responds.json()
        dispatch({
            type: 'modified_user',
            fname: state.fname === '' ? state.fname : state.fname,
            lname: state.lname === '' ? state.lname : state.lname,
            username: state.username === '' ? state.username : state.username,
            email: state.email === '' ? state.email : state.email,
            modification: result,
        })
        setValue('')
    }

    const inputChangeFname = (e) => {
        e.preventDefault()
        setValue(e.target.value)
        dispatch({
            type: 'changed_fname',
            fname:
                e.target.value === '' ? state.fetched[0].fname : e.target.value,
        })
    }
    const inputChangeLname = (e) => {
        e.preventDefault()
        setValue(e.target.value)
        dispatch({
            type: 'changed_lname',
            lname:
                e.target.value === '' ? state.fetched[0].lname : e.target.value,
        })
    }
    const inputChangeUsername = (e) => {
        e.preventDefault()
        setValue(e.target.value)
        dispatch({
            type: 'changed_username',
            username:
                e.target.value === ''
                    ? state.fetched[0].username
                    : e.target.value,
        })
    }
    const inputChangeEmail = (e) => {
        e.preventDefault()
        setValue(e.target.value)
        dispatch({
            type: 'changed_email',
            fname:
                e.target.value === '' ? state.fetched[0].email : e.target.value,
        })
    }

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
                    {state.fetched[0]?.fname}
                </figcaption>
            </figure>
            {/* -----------------------profile pic end------------------------- */}

            <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
                {/* -----------------------profile section start------------------- */}

                <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
                    <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 tex-3xl">
                        {state.fetched[0]?.fname}
                    </h1>
                    <form onSubmit={editUserData}>
                        <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                            fname: {state.fetched[0]?.fname}
                        </p>
                        <input
                            value={value}
                            type="text"
                            onChange={inputChangeFname}
                            placeholder="Enter new first name here"
                            required
                        />
                        <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                            lname: {state.fetched[0]?.lname}
                        </p>
                        <input
                            value={value}
                            type="text"
                            onChange={inputChangeLname}
                            placeholder="Enter new last name here"
                            required
                        />
                        <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                            username: {state.fetched[0]?.username}
                        </p>
                        <input
                            value={value}
                            type="text"
                            onChange={inputChangeUsername}
                            placeholder="Enter new username here"
                            required
                        />
                        <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                            email: {state.fetched[0]?.email}
                        </p>
                        <input
                            value={value}
                            type="text"
                            onChange={inputChangeEmail}
                            placeholder="Enter new email here"
                            required
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
}
