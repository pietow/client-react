/** @format */

import React, { useState, useRef, useEffect, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import { dateArr } from '../../data/datesArray'
import Birthday from '../Birthday'
import { putUser } from '../..//util/fetchUser'

export default function BasicsInput({ state, dispatch, styles, setEntering }) {
    const accessToken = useContext(Authentication)

    const previousState = useRef({})
    const renderCount = useRef(0)
    const [savable, setSavable] = useState(false)

    function checkChanges(newValue, oldValue) {
        newValue === oldValue ? setSavable(false) : setSavable(true)
    }

    useEffect(() => {
        if (state._id && renderCount.current === 0) {
            renderCount.current = 1
            previousState.current = state
        }
    }, [state, renderCount])

    useEffect(() => {
        console.log(savable)
    }, [savable, state])

    const gender = {
        "I'd rather not tell": '',
        'Female': 'Female',
        'Male': 'Male',
        'Non-binary': 'Non-binary',
        'Other': 'Other',
    }

    function changeHandler(newValue, oldValue, type, key) {
        checkChanges(newValue, oldValue)
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
                                        previousState.current.fname,
                                        'update_user',
                                        'fname',
                                    )
                                    /* checkChanges( */
                                    /*     e.target.value, */
                                    /*     previousState.current.fname, */
                                    /* ) */
                                    /* dispatch({ */
                                    /*     type: 'update_user', */
                                    /*     payload: { */
                                    /*         fname: e.target.value, */
                                    /*     }, */
                                    /* }) */
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
                                onChange={(e) =>
                                    dispatch({
                                        type: 'update_user',
                                        payload: {
                                            lname: e.target.value,
                                        },
                                    })
                                }
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
                                onChange={(e) =>
                                    dispatch({
                                        type: 'update_profile',
                                        payload: {
                                            motto: e.target.value,
                                        },
                                    })
                                }
                                className={styles.input}
                            />
                            <p className="text-best-white text-sm mt-1 selection:bg-pistachio-dark selection:text-gray-900">
                                What is your mission or life motto?
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor="gender" className={styles.label}>
                            I Am
                        </label>
                        <div className="w-6/12 ml-8">
                            <select
                                id="gender"
                                type="text"
                                value={state.profile?.gender ?? 'fail'}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'update_profile',
                                        payload: {
                                            gender: e.target.value,
                                        },
                                    })
                                }
                                className={styles.input}>
                                {Object.keys(gender).map((key, i) => {
                                    return (
                                        <option key={i} value={gender[key]}>
                                            {key}
                                        </option>
                                    )
                                })}
                            </select>
                            <p className="text-best-white text-sm mt-1 selection:bg-pistachio-dark selection:text-gray-900">
                                What is your mission or life motto?
                            </p>
                        </div>
                    </div>
                    <Birthday
                        state={state}
                        dispatch={dispatch}
                        savable={'bla'}
                        setSavable={'bla'}
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
                        previousState.current = state
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
