/** @format */

import React from 'react'

export default function Burger() {
    const rows = ['I really', 'like juicy', 'burgers for dinner.']

    return (
        <div className="w-8 h-8 flex flex-col space-y-1 border border-best-white rounded-sm items-center justify-center">
            {rows.map((x) => (
                <div
                    className="w-5 border-t-2 border-best-white rounded-full"
                    key={x}></div>
            ))}
        </div>
    )
}
