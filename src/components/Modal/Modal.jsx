/** @format */

import React from 'react'
import { Transition } from 'react-transition-group'

export default function Modal({ entering, setEntering }) {
    const duration = 300

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0.5 },
        exited: { opacity: 0 },
    }
    const styles = {
        modalClass: 'relative bg-pistachio-dark w-full text-center p-3',
    }
    return (
        <Transition in={!entering} timeout={duration}>
            {(state) => (
                <div
                    className={styles.modalClass}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}>
                    <p>Profile updated.</p>
                    <div
                        onClick={() => {
                            setEntering(true)
                        }}
                        className="absolute right-0 top-0 px-2 text-gray-500 cursor-pointer">
                        x
                    </div>
                </div>
            )}
        </Transition>
    )
}
