/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser, putUser } from '../util/fetchUser'
import InputField from '../components/InputField'
import Email from '../components/Email'
import BasicsInput from '../components/BasicsInput'
import Modal from '../components/Modal'
import { Transition } from 'react-transition-group'

export default function EditAccount({ state, dispatch }) {
    const [savable, setSavable] = useState(false)
    const [entering, setEntering] = useState(true)

    const accessToken = useContext(Authentication)

    useEffect(() => {
        const getUserUrl = `api/users/${sessionStorage.getItem('user')}`
        getUser(getUserUrl, accessToken, dispatch)
    }, [accessToken, dispatch])

    const putUserUrl = `api/users/${sessionStorage.getItem('user')}/profile`

    const styles = {
        label: 'w-28 text-right text-best-white text-sm',
        input: 'py-1 bg-best-white text-sm px-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:border-pistachio-dark focus:border-2 shadow-pistachio-dark focus:shadow-lg selection:bg-pistachio-dark',
        container: 'flex mb-4 items-center',
        btnClass: 'active:scale-95  w-fit mb-7 p-2 text-best-white',
    }

    if (accessToken) {
        return (
            <main className="w-full flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <Modal entering={entering} setEntering={setEntering} />
                <div className="w-full mt-6 md:mt-12 xl:justify-center flex flex-col">
                    {/* -----------------------describe section ------------------- */}
                    <div className="flex flex-row m-auto w-full md:px-4 lg:w-10/12 xl:w-8/12">
                        <nav className="hidden md:block h-fit p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md md:w-4/12 md:mr-3">
                            NavBar
                        </nav>
                        <div className="flex flex-col w-11/12 m-auto md:w-8/12">
                            <Email
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
