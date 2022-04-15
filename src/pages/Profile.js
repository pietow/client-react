/** @format */

import React, { useState, useEffect, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import ProfileSection from '../components/ProfileSection'
import AccommodationSection from '../components/AccommodationSection'
import ProfilePic from '../components/ProfilePic'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'

export default function Profile({ state }) {
    const accessToken = useContext(Authentication)

    if (accessToken) {
        return (
            <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <ProfilePic userData={state} />
                <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
                    <ProfileSection heading={'about me'} userData="lorem" />
                    <ProfileSection
                        heading={'about my dear guests'}
                        userData="lorem"
                    />
                    <ProfileSection
                        heading={'i speak'}
                        userData={
                            'french, japanese, german, english, dutch (maybe insert tiny icon flags here)'
                        }
                    />
                    <AccommodationSection
                        heading={'Accommodation'}
                        state={state.accommodation}
                    />
                </div>
                <LogoLink />
            </main>
        )
    } else return <Home />
}
