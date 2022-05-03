/** @format */

import React, { useState, useEffect } from 'react'

export default function ProfileCard({ userData }) {
    const [visibleData, setVisibleData] = useState(null)
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

    useEffect(() => {
        setVisibleData(true)
    }, [])
    /* const languages = userData.profile.language */
    const languages = ['german', 'english']

    const displayLanguage = languages.map((language, i) => {
        return (
            <li key={i}>
                <span> - </span>
                {language}
            </li>
        )
    })
    return (
        <div className="w-1/5 h-full border-2 border-gray-dark p-4 rounded bg-best-white">
            <div className="">
                <img
                    className="pb-10 m-auto justify-center"
                    src={photo}
                    alt="lorem"
                />
                {visibleData && (
                    <p className="text-black text-xs border-b-2 p-2">
                        @{userData.username}
                    </p>
                )}
                {visibleData && (
                    <p className="text-black text-xs border-b-2 p-2">
                        Member since {userData.createdAt}
                    </p>
                )}
                {visibleData && (
                    <p className="text-black text-xs border-b-2 p-2">
                        Name: {userData.fname + ' ' + userData.lname}
                    </p>
                )}
                {visibleData && (
                    <p className="text-black text-xs border-b-2 p-2">
                        Gender: {userData.profile.gender}
                    </p>
                )}
                {visibleData && (
                    <p className="text-black border-b-2 p-2 text-xs">
                        Age: {userData.profile.birthdate}
                    </p>
                )}
                {visibleData && (
                    <p className="text-black border-b-2 p-2 text-xs">
                        Lives in{' '}
                        {userData.city + ', ' + userData.profile.country}
                    </p>
                )}
                {visibleData && (
                    <div className="text-black border-b-2 p-2 text-xs">
                        Languages:
                        <ul>{displayLanguage}</ul>
                    </div>
                )}
            </div>
        </div>
    )
}
