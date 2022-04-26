/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import TextareaAutosize from 'react-textarea-autosize'
import { putUser } from '../..//util/fetchUser'

export default function Email({ state, styles, dispatch, setEntering }) {
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
        <section className="p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Email
            </h1>
            <div className="flex flex-col">
                <div className={styles.container}>
                    <label htmlFor="fname" className={styles.label}>
                        First Name
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="fname"
                            type="text"
                            value={state.fname ?? 'fail'}
                            onChange={(e) => {
                                changeHandler(
                                    e.target.value,
                                    'update_user',
                                    'fname',
                                )
                            }}
                            className={styles.input}
                        />
                    </div>
                </div>
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
