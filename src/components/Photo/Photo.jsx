/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import TextareaAutosize from 'react-textarea-autosize'
import { putUser } from '../..//util/fetchUser'

export default function Photo({ state, styles, dispatch, setEntering }) {
    const [savable, setSavable] = useState(false)
    const accessToken = useContext(Authentication)
    const previousText = useRef('')
    const renderCount = useRef(0)

    useEffect(() => {
        if (state.username !== '' && state._id) {
            previousText.current = state.profile.text
        }
    }, [state])

    const putUserUrl = `api/users/${sessionStorage.getItem('user')}/profile`

    return (
        <section className="p-4 mb-7 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Describe yourself
            </h1>
            <div className="flex flex-col">
                <div className="bg-best-white w-11/12"></div>
            </div>
            <button
                onClick={() => {
                    if (savable) {
                        putUser(putUserUrl, accessToken, dispatch, {
                            text: state.profile.text,
                        })
                        previousText.current = state.profile.text
                        setSavable(false)
                        setEntering(false)
                        setTimeout(() => {
                            setEntering(true)
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
    )
}
