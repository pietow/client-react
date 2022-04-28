/** @format */

import React, { useState, useEffect, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser } from '../util/fetchUser'
import EditNavbar from '../components/EditNavbar'
import Description from '../components/Description'
import BasicsInput from '../components/BasicsInput'
import Modal from '../components/Modal'

export default function EditProfile({ state, dispatch }) {
    const [entering, setEntering] = useState(true)
    const [message, setMessage] = useState('Profile updated!')
    const profileInput = {
        onlineStatus: '',
        title: '',
        text: '',
        motto: '',
        gender: '',
        language: [],
        city: '',
        destrict: '',
        country: '',
        birthday: '',
    }

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
                    {/* -----------------------describe section ------------------- */}
                    <div className="flex flex-row m-auto w-full lg:w-10/12 md:px-4 xl:w-9/12">
                        <EditNavbar />
                        <div className="flex flex-col md:w-8/12">
                            <Description
                                state={state}
                                styles={styles}
                                dispatch={dispatch}
                                setEntering={setEntering}
                            />
                            <BasicsInput
                                styles={styles}
                                state={state}
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
