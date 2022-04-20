/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser, putUser } from '../util/fetchUser'
import InputField from '../components/InputField'
import Description from '../components/Description'

export default function EditProfile({ state, dispatch }) {
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
    const [profile, setProfile] = useState(profileInput)

    const accessToken = useContext(Authentication)

    useEffect(() => {
        const getUserUrl = `api/users/${sessionStorage.getItem('user')}`
        getUser(getUserUrl, accessToken, dispatch)
    }, [accessToken, dispatch])

    const putUserUrl = `api/users/${sessionStorage.getItem('user')}/profile`

    const editUserData = (e) => {
        e.preventDefault()
        putUser(putUserUrl, accessToken, dispatch, profile)
    }

    const inputFields = Object.keys(profileInput).map((key, i) => (
        <InputField
            key={i}
            name={key}
            okey={key}
            input={profile}
            setInput={setProfile}
            state={state.profile}
        />
    ))

    if (accessToken) {
        return (
            <main className="w-full xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <div className="w-full mt-6 xl:justify-center flex flex-col">
                    <section className="mx-4 p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
                        <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                            Descript Yourself
                        </h1>
                        <Description
                            description={state.profile}
                            dispatch={dispatch}
                        />
                    </section>
                    {/* -----------------------profile section start------------------- */}

                    <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md"></section>

                    {/* -----------------------profile section end--------------------- */}
                </div>
                <LogoLink />
            </main>
        )
    } else {
        return <Home />
    }
}
