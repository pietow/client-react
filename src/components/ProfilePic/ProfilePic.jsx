/** @format */

import React from 'react'

export default function ProfilePic({ userData }) {
    return (
        <figure className="xl:w-60 xl:bottom-40 relative w-40 space-y-2 mt-6 lg:mt-14 flex flex-col items-center">
            <img
                className="xl:rounded-xl drop-shadow-lg rounded-full"
                src={'https://picsum.photos/200/200.jpg'}
                alt="lorem"
            />
            <figcaption className="text-best-white font-noto text-center">
                {userData.fname + ' ' + userData.lname}
            </figcaption>
        </figure>
    )
}
