/** @format */

import React, { useState } from 'react'

export default function InputField({
    name,
    okey,
    accommodation,
    setAccommodation,
    state,
}) {
    return (
        <div>
            <p className="text-justify p-4 text-best-white">
                {name + ' ' + state[okey] + ':'}
            </p>
            <input
                className="mb-3"
                value={accommodation[okey]}
                type="text"
                onChange={(e) => {
                    setAccommodation({
                        ...accommodation,
                        [okey]: e.target.value,
                    })
                }}
                placeholder={name}
            />
        </div>
    )
}
