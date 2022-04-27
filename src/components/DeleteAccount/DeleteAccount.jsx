/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authentication } from '../../context/accessTokenContext'
import { SetAuthentication } from '../../context/setAccessTokenContext'
import { deleteUser } from '../..//util/fetchUser'

export default function DeleteAccount({ styles, dispatch, setEntering }) {
    const [savable, setSavable] = useState(false)
    const accessToken = useContext(Authentication)
    const setAccessToken = useContext(SetAuthentication)
    const navigate = useNavigate()

    const userUrl = `api/users/${sessionStorage.getItem('user')}`

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Remove your Account</h1>
            <div className="flex flex-col">
                <div className={styles.container}>
                    <div className="w-1/12">
                        <input
                            id="delete"
                            checked={savable}
                            onChange={() => setSavable(!savable)}
                            type="checkbox"
                            className={styles.input}
                        />
                    </div>
                    <label
                        htmlFor="delete"
                        className={'text-best-white text-sm'}>
                        I understand this cannot be undone
                    </label>
                </div>
            </div>
            <button
                onClick={() => {
                    if (savable) {
                        deleteUser(userUrl, accessToken, dispatch)
                            .then((user) => {
                                setSavable(false)
                                navigate('/remove')
                                setAccessToken(null)
                            })
                            .catch(console.log)
                    }
                }}
                className={`${styles.btnClass + ' text-sm'} ${
                    savable ? 'bg-red-600' : 'bg-red-400 cursor-not-allowed'
                }`}>
                Save
            </button>
        </section>
    )
}
