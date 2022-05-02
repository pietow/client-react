/** @format */

import React from 'react'

export default function ProfileSection({ userData, heading }) {
    return (
        <section className="p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md mb-4">
            <h1 className="w-full underline underline-offset-8 decoration-1 text-best-white m-4 text-4xl mb-4">
                {heading}
            </h1>
            <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                {userData}
            </p>
        </section>
    )
}
