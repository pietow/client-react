/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import TextareaAutosize from 'react-textarea-autosize'
import { putUser } from '../../util/fetchUser'

export default function HostLocation({ state, styles, dispatch, setEntering }) {
    const [savable, setSavable] = useState(false)
    const accessToken = useContext(Authentication)
    const previousText = useRef('')

    useEffect(() => {
        if (state.username !== '' && state._id) {
            previousText.current = state.accommodation.place
        }
    }, [state])

    const putUserUrl = `api/users/${sessionStorage.getItem(
        'user',
    )}/accommodation`

    return (
        <section className="p-4 mb-7 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Place of location
            </h1>
            <div className="flex flex-col">
                <TextareaAutosize
                    className="bg-best-white outline-0 mt-5 p-4 pb-9 resize-none w-11/12 hover:bg-pistachio-dark focus:bg-best-white placeholder:italic"
                    value={state.accommodation?.place ?? 'fail'}
                    onChange={(e) => {
                        if (previousText.current !== e.target.value) {
                            setSavable(true)
                        } else {
                            setSavable(false)
                        }
                        dispatch({
                            type: 'update_accommodation',
                            payload: { place: e.target.value },
                        })
                    }}
                    placeholder="Type in your place..."
                />
                <div className="bg-best-white w-11/12">
                    <hr className="w-11/12 mb-4 border-gray-200" />
                </div>
                <div className="p-4 pt-1 mb-4 bg-best-white w-11/12 text-sm text-gray-500">
                    Tell people where you live.
                </div>
            </div>
            <button
                onClick={() => {
                    if (savable) {
                        putUser(putUserUrl, accessToken, dispatch, {
                            place: state.accommodation.place,
                        })
                        previousText.current = state.accommodation.place
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
