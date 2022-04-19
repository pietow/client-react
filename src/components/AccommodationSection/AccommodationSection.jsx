/** @format */

import React from 'react'

export default function AccommodationSection({ heading, state }) {
    const isHost = state.availability
    let description = state.description

    let bg, status, hide
    if (isHost === 'Yes') {
        bg = 'bg-green-700'
        status = 'Can host'
        hide = false
        description = state.description
    }
    if (isHost === 'maybe') {
        bg = 'bg-yellow-700'
        status = 'Might be able to host'
        hide = false
        description = state.description
    }
    if (isHost === 'No') {
        bg = 'bg-red-700'
        status = 'Cannot host currently'
        hide = true
        description =
            'Offering hospitality and welcoming “strangers” to our homes strengthens our faith in each other.'
    }
    return (
        <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
            <div className="flex">
                <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 text-3xl">
                    {heading}
                </h1>
                <div
                    className={
                        'rounded border border-best-white m-4 w-fit h-fit text-best-white ' +
                        bg
                    }>
                    <p className="p-2 text-sm">{status}</p>
                </div>
            </div>
            <p className="text-best-white m-4 p-4">{description}</p>
            <hr className="w-1/2 my-4 border-best-white " />
            <p className={hide ? 'invisible' : 'text-best-white p-4'}>
                {'At most ' + state.guests + ' guests.'}
            </p>
            {/* TODO: Link to .../edithost */}
        </section>
    )
}
