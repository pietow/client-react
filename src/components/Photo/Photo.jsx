/** @format */

import React, { useState } from 'react'
import spinner from '../../assets/img/load_spinner.svg'

export default function Photo({ state, styles, dispatch, setEntering }) {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [uploading, setUploading] = useState(false)
    const [photoPreview, setPhotoPreview] = useState('')

    const handleProfilePhoto = (event) => {
        setUploading(true)
        setMessage('')
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
                return data.json()
            })
            .then((result) => {
                setUploading(false)
                setMessage(
                    'Upload successful! Your profile photo has been updated.',
                )
                dispatch({
                    type: 'update_profile',
                    payload: { photoId: result.photoId },
                })
            })
            .catch((error) => {
                setError(error)
            })
    }

    const spinnerStyle = {
        width: '50px',
        height: 'auto',
        animation: 'spin 1s linear infinite',
    }

    return (
        <section className="p-4 mb-7 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white text-4xl">
                Add a photo of you
            </h1>
            <div className="flex flex-col w-11/12">
                <label
                    className="text-best-white text-xl my-2"
                    htmlFor="photoItem">
                    {state.profile.photoId
                        ? `Choose a new profile photo`
                        : `Choose a profile photo`}
                </label>
                <input
                    className="w-fit my-2 p-2 text-best-white bg-teal-bright"
                    id="photoItem"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleProfilePhoto(e)}
                />
                <img
                    className="my-4"
                    style={uploading ? spinnerStyle : { display: 'none' }}
                    src={spinner}
                    id="loadSpinner"
                    alt="uploading image"></img>
                <div
                    className="my-2 p-2 bg-green-800 text-best-white"
                    style={message !== '' ? {} : { display: 'none' }}>
                    {message}
                </div>
                <div style={error !== '' ? {} : { display: 'none' }}>
                    {`Error during upload: ${error}`}
                </div>
                {photoPreview ? (
                    <img
                        className="my-5 text-center border border-best-white w-11/12"
                        src={photoPreview}
                        alt="Current profile photo"
                    />
                ) : (
                    <></>
                )}
            </div>
        </section>
    )
}
