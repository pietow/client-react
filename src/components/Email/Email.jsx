/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import TextareaAutosize from 'react-textarea-autosize'
import { putUser } from '../..//util/fetchUser'

export default function Email({ state, styles, dispatch, setEntering }) {
    const [savable, setSavable] = useState(false)
    const accessToken = useContext(Authentication)

    const putUserUrl = `api/users/${sessionStorage.getItem('user')}`

    function changeHandler(newValue, type, key) {
        setSavable(true)
        dispatch({
            type: type,
            payload: {
                [key]: newValue,
            },
        })
    }

    return (
        <section className="p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Email
            </h1>
            <div className="flex flex-col">
                <div className={styles.container}>
                    <label htmlFor="email" className={styles.label}>
                        First Name
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="email"
                            type="email"
                            value={state.email ?? 'fail'}
                            onChange={(e) => {
                                changeHandler(
                                    e.target.value,
                                    'update_user',
                                    'email',
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
                            email: state.email,
                        }).then(console.log)
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
