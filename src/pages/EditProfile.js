/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import { getUser, putUser } from '../util/fetchUser'
import InputField from '../components/InputField'

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
        console.log(profile)
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
                            {inputFields}
                            <button
                                type="submit"
                                className="active:scale-95 mx-auto m-2 mb-7 p-1 border border-best-white text-best-white rounded w-1/2">
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
