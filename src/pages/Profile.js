/** @format */

import React, { useContext } from 'react'
import LogoLink from '../components/LogoLink'
import ProfileSection from '../components/ProfileSection'
import AccommodationSection from '../components/AccommodationSection'
import EditNavbar from '../components/EditNavbar'
import ProfileCard from '../components/ProfileCard'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'

export default function Profile({ state }) {
    const accessToken = useContext(Authentication)

    if (accessToken) {
        return (
            <main className="w-full h-screen flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <div className="flex flex-row m-auto w-full lg:w-10/12 md:px-4 xl:w-9/12">
                    <div className="flex flex-col md:w-4/12">
                        <EditNavbar />
                        <ProfileCard userData={state} />
                    </div>
                    <div className="flex flex-col md:w-8/12">
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
                </div>
                <LogoLink />
            </main>
        )
    } else return <Home />
}
