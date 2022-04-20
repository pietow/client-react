/** @format */

import React from 'react'

export default function Modal({ isHidden, setIsHidden }) {
    const styles = {
        modalClass: 'relative bg-pistachio-dark w-full text-center p-3',
    }
    return (
        <div className={`${styles.modalClass} ${isHidden ? ' hidden' : ''}`}>
            <p>Profile updated.</p>
            <div
                onClick={() => {
                    setIsHidden(true)
                }}
                className="absolute right-0 top-0 px-2 text-gray-500 cursor-pointer">
                x
            </div>
        </div>
    )
}
