/** @format */

import React, { useState, useEffect, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser } from '../util/fetchUser'
import Email from '../components/Email'
import DeleteAccount from '../components/DeleteAccount'
import Password from '../components/Password'
import Modal from '../components/Modal'
import EditNavbar from '../components/EditNavbar'

export default function EditAccount({ state, dispatch }) {
    const [entering, setEntering] = useState(true)
    const [message, setMessage] = useState('blaProfile updated')

    const accessToken = useContext(Authentication)

    useEffect(() => {
        const getUserUrl = `api/users/${sessionStorage.getItem('user')}`
        getUser(getUserUrl, accessToken, dispatch).catch(console.log)
    }, [accessToken, dispatch])

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
            <main className="w-full flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <Modal
                    entering={entering}
                    setEntering={setEntering}
                    message={message}
                />
                <div className="w-full mt-6 md:mt-12 xl:justify-center flex flex-col">
                    {/* -----------------------describe section ------------------- */}
                    <div className="flex flex-row m-auto w-full md:px-4 lg:w-10/12 xl:w-8/12">
                        <EditNavbar />
                        <div className="flex flex-col w-11/12 m-auto md:w-8/12">
                            <Email
                                state={state}
                                styles={styles}
                                dispatch={dispatch}
                                setEntering={setEntering}
                            />
                            <Password
                                styles={styles}
                                dispatch={dispatch}
                                setEntering={setEntering}
                                setMessage={setMessage}
                            />
                            <DeleteAccount
                                styles={styles}
                                dispatch={dispatch}
                                setEntering={setEntering}
                                setMessage={setMessage}
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
