/** @format */

import React, { useRef } from 'react'
import { Transition } from 'react-transition-group'

export default function Modal({ entering, setEntering, message }) {
    const nodeRef = useRef(null)
    const duration = 300

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1, zIndex: '50' },
        entered: { opacity: 1, zIndex: '50' },
        exiting: { opacity: 0.5, zIndex: '50' },
        exited: { opacity: 0 },
    }
    const styles = {
        modalClass: 'absolute top-0 p-2 w-full text-center p-3',
    }
    return (
        <Transition in={!entering} nodeRef={nodeRef} timeout={duration}>
            {(state) => (
                <div
                    className={`${styles.modalClass} ${
                        message.includes('Error')
                            ? 'bg-red-500'
                            : 'bg-pistachio-dark'
                    }`}
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}>
                    <p>{message}</p>
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
