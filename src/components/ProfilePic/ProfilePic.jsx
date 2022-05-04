/** @format */

import React, { useState, useEffect } from 'react'

export default function ProfilePic({ userData }) {
    const [photo, setPhoto] = useState('')

    useEffect(() => {
        const getPhoto = async () => {
            await fetch(`api/profile/${sessionStorage.getItem('user')}/photo`, {
                method: 'GET',
            })
                .then((response) => {
                    return response.json()
                })
                .then((url) => {
                    setPhoto(url)
                    return
                })
        }
        getPhoto()
    }, [photo])

    return (
        <figure className="xl:w-60 xl:bottom-40 relative w-40 space-y-2 mt-6 lg:mt-14 flex flex-col items-center">
            <img
                className="xl:rounded-xl drop-shadow-lg rounded-full"
                src={photo}
                alt="profile picture"
            />
            <figcaption className="text-best-white font-noto text-center">
                {userData.fname + ' ' + userData.lname}
            </figcaption>
        </figure>
    )
}
