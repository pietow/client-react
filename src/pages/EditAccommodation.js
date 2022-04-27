/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import InputField from '../components/InputField'
import { getUser, putUser } from '../util/fetchUser'

export default function EditAccommodation({ state, dispatch }) {
    const [accommodation, setAccommodation] = useState({
        availability: state.accommodation.availability,
        guests: state.accommodation.guests,
        location: state.accommodation.location,
        description: state.accommodation.description,
    })

    const accessToken = useContext(Authentication)

    useEffect(() => {
        const getUserUrl = `api/users/${sessionStorage.getItem('user')}`
        getUser(getUserUrl, accessToken, dispatch)
    }, [accessToken])

    const putUserUrl = `api/users/${sessionStorage.getItem(
        'user',
    )}/accommodation`

    const editUserData = async (e) => {
        e.preventDefault()
        putUser(putUserUrl, accessToken, dispatch, accommodation)
    }

    console.log(accommodation)
    if (accessToken) {
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
                        {state.fname + ' ' + state.lname}
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
                            <div className="flex text-best-white items-center gap-2">
                                <p className="text-justify p-4 text-best-white">
                                    Availability:
                                </p>

                                <button
                                    onClick={() =>
                                        setAccommodation({
                                            ...accommodation,
                                            availability: 'Yes',
                                            guests:
                                                accommodation.guests === 0
                                                    ? (accommodation.guests = 1)
                                                    : guests,
                                        })
                                    }
                                    className={
                                        state.accommodation.availability ===
                                        'Yes'
                                            ? 'border rounded px-4 hover:scale-[1.1] bg-teal-dark'
                                            : 'border rounded px-4 hover:scale-[1.1]'
                                    }>
                                    YES
                                </button>
                                <button
                                    onClick={() =>
                                        setAccommodation({
                                            ...accommodation,
                                            availability: 'No',
                                            guests: 0,
                                        })
                                    }
                                    className={
                                        state.accommodation.availability ===
                                        'No'
                                            ? 'border rounded px-4 hover:scale-[1.1] bg-apricot-dark'
                                            : 'border rounded px-4 hover:scale-[1.1]'
                                    }>
                                    NO!
                                </button>
                            </div>

                            <div className="flex text-best-white items-center gap-2">
                                <p className="text-justify p-4 text-best-white">
                                    Guests: {' ' + accommodation.guests}
                                </p>

                                <button
                                    onClick={() =>
                                        setAccommodation({
                                            ...accommodation,
                                            guests:
                                                Number(
                                                    state.accommodation.guests,
                                                ) + 1,
                                            availability: 'Yes',
                                        })
                                    }
                                    className="border rounded px-4 hover:scale-[1.1]">
                                    +
                                </button>
                                <button
                                    onClick={() => {
                                        setAccommodation({
                                            ...accommodation,
                                            guests: accommodation.guests
                                                ? accommodation.guests - 1
                                                : 0,
                                            availability:
                                                accommodation.guests === 1
                                                    ? 'No'
                                                    : 'Yes',
                                        })
                                    }}
                                    className="border rounded px-4 hover:scale-[1.1]">
                                    -
                                </button>
                            </div>
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
