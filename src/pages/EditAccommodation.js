/** @format */

import React, { useState, useEffect, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser, putUser } from '../util/fetchUser'
import Modal from '../components/Modal'
import EditNavbar from '../components/EditNavbar'
import Description from '../components/Description'

export default function EditAccount({ state, dispatch }) {
    const [message, setMessage] = useState('Profile updated')
    const [entering, setEntering] = useState(true)
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

    const styles = {
        section:
            'p-4 mb-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md',
        h1: 'w-full underline underline-offset-8 decoration-1 text-best-white text-4xl mb-4',
        label: 'w-32 text-right text-best-white text-sm',
        input: 'py-1 bg-best-white text-sm px-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:border-pistachio-dark focus:border-2 shadow-pistachio-dark focus:shadow-lg selection:bg-pistachio-dark',
        container: 'flex mb-4 items-center',
        btnClass: 'active:scale-95  w-fit mb-7 p-2 text-best-white',
    }

    if (accessToken) {
        return (
            <main className="w-full h-screen flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <Modal
                    entering={entering}
                    setEntering={setEntering}
                    message={message}
                />
                <div className="w-full mt-6 md:mt-12 xl:justify-center flex flex-col mb-20">
                    <div className="flex flex-row m-auto w-full md:px-4 lg:w-10/12 xl:w-9/12">
                        <EditNavbar />
                        <div className="flex flex-col w-11/12 m-auto md:w-8/12">
                            <section className="p-4 mb-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
                                <h1 className={styles.h1}>Change your Data</h1>
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
                                                        accommodation.guests ===
                                                        0
                                                            ? (accommodation.guests = 1)
                                                            : guests,
                                                })
                                            }
                                            className={
                                                state.accommodation
                                                    .availability === 'Yes'
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
                                                state.accommodation
                                                    .availability === 'No'
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
                                                            state.accommodation
                                                                .guests,
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
                                                        ? accommodation.guests -
                                                          1
                                                        : 0,
                                                    availability:
                                                        accommodation.guests <=
                                                        1
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
                            <Description
                                state={state}
                                styles={styles}
                                dispatch={dispatch}
                                setEntering={setEntering}
                            />
                        </div>
                    </div>
                </div>
                <LogoLink />
            </main>
        )
    } else {
        return <Home />
    }
}
