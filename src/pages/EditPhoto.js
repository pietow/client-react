/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser } from '../util/fetchUser'
import Photo from '../components/Photo'
import EditNavbar from '../components/EditNavbar'
import ProfileCard from '../components/ProfileCard'
import Modal from '../components/Modal'

export default function EditProfile({ state, dispatch }) {
    const [entering, setEntering] = useState(true)
    const [message, setMessage] = useState('Profile updated!')

    const accessToken = useContext(Authentication)

    useEffect(() => {
        const getUserUrl = `api/users/${sessionStorage.getItem('user')}`
        getUser(getUserUrl, accessToken, dispatch)
    }, [accessToken, dispatch])

    const styles = {
        label: 'w-28 text-right text-best-white text-sm',
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
                        <div className="w-full mt-6 md:mt-8 xl:justify-center flex flex-col">
                            {/* -----------------------describe section ------------------- */}
                            <div className="flex flex-row m-auto w-full md:px-4 xl:w-9/12">
                                <div className="flex flex-col md:w-4/12">
                                    <EditNavbar />
                                    <ProfileCard userData={state} />
                                </div>
                                <div className="flex flex-col md:w-8/12">
                                    <Photo
                                        state={state}
                                        styles={styles}
                                        dispatch={dispatch}
                                        setEntering={setEntering}
                                    />
                                </div>
                            </div>
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
