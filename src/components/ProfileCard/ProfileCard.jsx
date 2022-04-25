/** @format */

import React, { useState, useEffect } from 'react'

export default function ProfileCard({ userData }) {
    // HIDING POSTS IF NOT FILLED OUT
    const [visibleData, setVisibleData] = useState(null)

    useEffect(() => {
        setVisibleData(true)
    }, [])

    console.log()

    // DISPLAYING LANGUAGES
    const languages = userData.profile.language
    // const languages = ['german', 'english']

    const displayLanguage = languages.map((language, i) => {
        return (
            <li key={i}>
                <span> - </span>
                {language}
            </li>
        )
    })

    // CALCULATE THE AGE
    

    console.log(userData)
    return (
        <div className="w-1/5 h-full border-2 border-gray-dark p-4 rounded bg-best-white">
            <div className="">
                <img
                    className="pb-10 m-auto justify-center"
                    src={'https://picsum.photos/200/200.jpg'}
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
