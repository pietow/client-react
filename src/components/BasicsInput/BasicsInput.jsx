/** @format */

import React, { useState, useRef, useEffect, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import { dateArr } from '../../data/datesArray'
import Birthday from '../Birthday'
import Gender from '../Gender'
import { putUser } from '../..//util/fetchUser'

export default function BasicsInput({ state, dispatch, styles, setEntering }) {
    const accessToken = useContext(Authentication)

    const [savable, setSavable] = useState(false)

    function checkChanges(newValue, oldValue) {
        newValue === oldValue ? setSavable(false) : setSavable(true)
    }

    function changeHandler(newValue, type, key) {
        setSavable(true)
        dispatch({
            type: type,
            payload: {
                [key]: newValue,
            },
        })
    }

    const putUserUrl = `api/users/${sessionStorage.getItem('user')}`
    const putProfileUrl = `api/users/${sessionStorage.getItem('user')}/profile`

    return (
        <section className="p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Basics
            </h1>
            <div className="flex flex-col">
                <div>
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
                    <div className={styles.container}>
                        <label htmlFor="lname" className={styles.label}>
                            Last Name
                        </label>
                        <div className="w-6/12 ml-8">
                            <input
                                id="lname"
                                type="text"
                                value={state.lname ?? 'fail'}
                                onChange={(e) => {
                                    changeHandler(
                                        e.target.value,
                                        'update_user',
                                        'lname',
                                    )
                                }}
                                className={styles.input}
                            />
                        </div>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor="motto" className={styles.label}>
                            Short tagline
                        </label>
                        <div className="w-6/12 ml-8">
                            <input
                                id="motto"
                                type="text"
                                value={state.profile.motto ?? 'fail'}
                                onChange={(e) => {
                                    changeHandler(
                                        e.target.value,
                                        'update_profile',
                                        'motto',
                                    )
                                }}
                                className={styles.input}
                            />
                            <p className="text-best-white text-sm mt-1 selection:bg-pistachio-dark selection:text-gray-900">
                                What is your mission or life motto?
                            </p>
                        </div>
                    </div>
                    <Gender
                        state={state}
                        dispatch={dispatch}
                        setSavable={setSavable}
                        styles={styles}
                    />
                    <Birthday
                        state={state}
                        dispatch={dispatch}
                        setSavable={setSavable}
                        styles={styles}></Birthday>
                </div>
            </div>
            <button
                onClick={() => {
                    if (savable) {
                        putUser(putUserUrl, accessToken, dispatch, {
                            fname: state.fname,
                            lname: state.lname,
                        })
                        const payload = {
                            motto: state.profile.motto,
                            gender: state.gender,
                        }
                        if (state.profile.birthday) {
                            payload.birthdate = state.profile.birthday
                        }
                        putUser(putProfileUrl, accessToken, dispatch, payload)
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
