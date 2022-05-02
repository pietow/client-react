/** @format */

import React, { useState } from 'react'

export default function ChatBox({ accessToken }) {
    const [resize, setResize] = useState(1)

    const style =
        accessToken && resize
            ? 'flex items-center flex-col fixed z-[200] right-2 top-[500px] border rounded-md border-best-white w-[450px] backdrop-brightness-75 backdrop-blur-lg drop-shadow-md'
            : 'hidden'

    return (
        <>
            <button
                onClick={() => setResize(1)}
                className={!resize ? 'fixed top-4 right-20 z-[200]' : 'hidden'}>
                messages
            </button>
            <div className={style}>
                <div className="flex">
                    <p className="self-start text-best-white p-2">
                        <span className="underline">From:</span> here name from
                        database
                    </p>
                    <button
                        onClick={() => setResize(0)}
                        className="self-end text-best-white p-2">
                        x
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="border border-best-white rounded-full w-12 h-12 overflow-hidden">
                        <img
                            src={'https://picsum.photos/200/200.jpg'}
                            alt="lorem picsum"
                        />
                    </div>
                    <textarea
                        className="my-4 p-1 rounded opacity-70 h-20"
                        name="request"
                        rows="3"
                        cols="33"
                    />
                    <button className="active:scale-95 p-1 border border-best-white text-best-white rounded">
                        Reply
                    </button>
                </div>
                <button className="active:scale-95 mx-auto my-4 p-1 border border-best-white text-best-white rounded w-1/2">
                    Send
                </button>
            </div>
        </>
    )
}
