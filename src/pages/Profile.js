/** @format */

import React, { useState, useEffect, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import ProfileSection from '../components/ProfileSection'
import ProfilePic from '../components/ProfilePic'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'

export default function Profile() {
    const accessToken = useContext(Authentication)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        ;(async () => {
            const response = await fetch(
                `api/users/${sessionStorage.getItem('user')}`,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${accessToken}`, //after successful login you get access token
                    },
                },
            )
            const result = await response.json()
            setUserData(result)
        })()
    }, [])

    if (accessToken) {
        return (
            <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <ProfilePic userData={userData} />
                <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
                    <ProfileSection
                        heading={'about me'}
                        userData="maybe email address or some other stuff. bio could work. or places one has already seen. hobbies is an alternative. maybe one is a good chef and welcomes people to have a nice meal together. By the way, this text is set in <text-justify> so that the right side of the text is also nicely aligned. I just want to see how this paragraph works with a lot of text in it. And lorem ipsum is boring! etc etc etc"
                    />
                    <ProfileSection
                        heading={'about my dear guests'}
                        userData="My guests shall pay a lot and do the dishes twice a day. My fridge needs to be filled at least every other day past noon. I like to sleep long so NO KIDS. I snore though."
                    />
                    <ProfileSection
                        heading={'i speak'}
                        userData={
                            'french, japanese, german, english, dutch (maybe insert tiny icon flags here)'
                        }
                    />
                </div>
                <LogoLink />
            </main>
        )
    } else return <Home />
}
