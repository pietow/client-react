/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser, putUser } from '../util/fetchUser'
import InputField from '../components/InputField'
import Description from '../components/Description'
import Modal from '../components/Modal'

export default function EditProfile({ state, dispatch }) {
    const [savable, setSavable] = useState(false)
    const [isHidden, setIsHidden] = useState(true)
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
    const styles = {
        btnClass: 'active:scale-95  w-fit mb-7 p-2 text-best-white',
    }

    if (accessToken) {
        return (
            <main className="w-full xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <Modal isHidden={isHidden} setIsHidden={setIsHidden} />
                <div className="w-full mt-6 md:mt-8 xl:justify-center flex flex-col">
                    {/* -----------------------describe section ------------------- */}
                    <section className="mx-4 p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md md:w-8/12 xl:m-auto">
                        <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                            Descript Yourself
                        </h1>
                        <Description
                            description={state.profile}
                            savable={savable}
                            setSavable={setSavable}
                            input={profile}
                            setInput={setProfile}
                        />
                        <button
                            onClick={() => {
                                if (savable) {
                                    putUser(putUserUrl, accessToken, dispatch, {
                                        text: profile.text,
                                    })
                                    setSavable(false)
                                    setIsHidden(false)
                                    setTimeout(() => {
                                        setIsHidden(true)
                                    }, 2000)
                                }
                            }}
                            className={`${styles.btnClass} ${
                                savable
                                    ? 'bg-teal-dark'
                                    : 'bg-teal-bright cursor-not-allowed'
                            }`}>
                            Save
                        </button>
                    </section>

                    {/* -----------------------Basic section end--------------------- */}
                </div>
                <LogoLink />
            </main>
        )
    } else {
        return <Home />
    }
}
