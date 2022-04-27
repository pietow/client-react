/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import { putUser, getUser, postUser } from '../..//util/fetchUser'

export default function Password({
    dispatch,
    styles,
    setEntering,
    setMessage,
}) {
    const [savable, setSavable] = useState(false)
    const [currentPass, setCurrentPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [verifyPass, setVerifyPass] = useState('')

    useEffect(() => {
        if (newPass === verifyPass && currentPass !== newPass) {
            setSavable(true)
        } else {
            setSavable(false)
        }
    }, [currentPass, newPass, verifyPass])

    const accessToken = useContext(Authentication)

    const userCheckUrl = `api/users/${sessionStorage.getItem('user')}/check`

    function clickHandler(currentValue, newValue, verifyValue) {
        if (newValue === verifyValue) {
            postUser(userCheckUrl, accessToken, dispatch, {
                password: currentValue,
            })
                .then((result) => {
                    putUser(userCheckUrl, accessToken, dispatch, {
                        password: newValue,
                    })
                    setEntering(false)
                    setTimeout(() => {
                        setEntering(true)
                    }, 2000)
                })
                .catch((e) => {
                    console.log(e)
                    setMessage('Error:' + e.error)
                    setEntering(false)
                    setTimeout(() => {
                        setEntering(true)
                    }, 2000)
                })
        }
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Change your Password</h1>
            <div className="flex flex-col">
                <div className={styles.container}>
                    <label htmlFor="current_pw" className={styles.label}>
                        Current password
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="current_pw"
                            type="Password"
                            value={currentPass}
                            onChange={(e) => setCurrentPass(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="new_pw" className={styles.label}>
                        New password
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="new_pw"
                            type="Password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="verify_pw" className={styles.label}>
                        Verify password
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="verify_pw"
                            type="Password"
                            value={verifyPass}
                            onChange={(e) => setVerifyPass(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    if (savable) {
                        clickHandler(currentPass, newPass, verifyPass)
                        setSavable(false)
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
