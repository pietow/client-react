/** @format */

import React from 'react'

export default function ProfileCard({ userData }) {
    console.log(userData)
    return (
        <div className="border-2 p-4 rounded border-best-white">
            <h1 className="text-best-white">Hello world</h1>
            <p className="text-best-white">{userData.username}</p>
        </div>
    )
}
