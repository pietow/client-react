/** @format */

import React, { useState } from 'react'

export default function InputField({ name, okey, input, setInput, state }) {
    return (
        <div>
            <p className="text-justify p-4 text-best-white">
                {name + ' ' + state[okey] + ':'}
            </p>
            <input
                className="mb-3"
                value={input[okey]}
                type="text"
                onChange={(e) => {
                    setInput({
                        ...input,
                        [okey]: e.target.value,
                    })
                }}
                placeholder={name}
            />
        </div>
    )
}
