/** @format */

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Authentication } from '../../context/accessTokenContext'
import { getUser, putUser } from '../../util/fetchUser'

export default function Photo({ state, styles, dispatch, setEntering }) {
    const [savable, setSavable] = useState(false)
    const [error, setError] = useState('')
    const [photoPreview, setPhotoPreview] = useState('')
    const accessToken = useContext(Authentication)
    const renderCount = useRef(0)

    const putUserUrl = `api/users/${sessionStorage.getItem('user')}/profile`

    const handleProfilePhoto = (event) => {
        const formData = new FormData()
        const newPhoto = event.target.files[0]
        setPhotoPreview(URL.createObjectURL(newPhoto))

        formData.append('file', newPhoto)

        const photoUrl = `api/profile/${sessionStorage.getItem('user')}/photo`
        const req = {
            method: 'PUT',
            body: formData,
        }
        fetch(photoUrl, req)
            .then((data) => {
                // dispatch({
                //     type: 'update_profile',
                //     payload: { photoId: data.photoId },
                // })
            })
            .catch((error) => {
                setError(error)
            })
    }

    return (
        <section className="p-4 mb-7 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Add a photo of you
            </h1>
            <div className="flex flex-col bg-best-white w-11/12">
                <label htmlFor="photoItem">
                    {state.profile.photoId
                        ? `Choose a new profile photo`
                        : `Choose a profile photo`}
                </label>
                <input
                    id="photoItem"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleProfilePhoto(e)}
                />
                <div style={error !== '' ? {} : { display: 'none' }}>
                    {`Error during upload: ${error}`}
                </div>
                {photoPreview ? (
                    <img src={photoPreview} alt="Current profile photo" />
                ) : (
                    <></>
                )}
            </div>
        </section>
    )
}
