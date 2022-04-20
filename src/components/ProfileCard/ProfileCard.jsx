/** @format */

import React from 'react'

export default function ProfileCard({ userData }) {
    console.log(userData)
    return (
        <card className="w-1/5 h-full border-2 border-gray-dark p-4 rounded bg-best-white">
            <div className="">
                {/* <figure>Profile image goes here</figure> */}
                <p className="text-black text-xs border-b-2 p-2">
                    Username: {userData.username}
                </p>
                <p className="text-black text-xs border-b-2 p-2">
                    Name: {userData.fname + ' ' + userData.lname}
                </p>
                <p className="text-black text-xs border-b-2 p-2">
                    Gender: {userData.gender}
                </p>
                <p className="text-black border-b-2 p-2 text-xs">
                    Age: {userData.birthday}
                </p>
                <p className="text-black border-b-2 p-2 text-xs">
                    Lives in {userData.city + ', ' + userData.country}
                </p>
            </div>
        </card>
    )
}
