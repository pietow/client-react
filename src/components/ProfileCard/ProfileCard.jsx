/** @format */

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Moment from 'react-moment'

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
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {' '}
                    -{' '}
                </span>
                {language}
            </li>
        )
    })

    // CALCULATE THE AGE
    // const userDOB = moment(userData.profile.birthdate, 'YYYY/M/D')
    const userAge = moment(userData.profile.birthdate).diff('years')

    // CALCULATE MEMBER SINCE
    const userMemberSince = moment(userData.createdAt).format('ll')

    console.log(userData)
    return (
        <div className="w-1/5 h-full backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md text-best-white">
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
                        Member since {userMemberSince}
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
                        Age: {userAge}
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
