/** @format */

import React, { useState } from 'react'

export default function ChatBox({ accessToken }) {
    const [resize, setResize] = useState(0)

    const style =
        accessToken && resize
            ? 'flex items-center flex-col fixed z-[200] right-2 top-[500px] border rounded-md border-best-white w-[450px] backdrop-brightness-75 backdrop-blur-lg drop-shadow-md'
            : 'hidden'

    return (
        <>
            <div
                className={
                    !accessToken
                        ? 'hidden'
                        : !resize
                        ? 'border rounded-full px-2 flex justify-center items-center gap-2 text-best-white absolute top-4 right-20 z-[200]'
                        : 'px-2 flex justify-center items-center gap-2 text-gray-300 absolute top-4 right-20 z-[200]'
                }>
                <div
                    className={
                        !false ? 'w-4 h-4 bg-red-500 rounded-full' : 'hidden'
                    }></div>
                <button
                    onClick={() => (resize === 0 ? setResize(1) : setResize(0))}
                    className="">
                    messages
                </button>
            </div>

            <div className={style}>
                <div className="flex w-full justify-between">
                    <p className="self-start text-best-white p-4">
                        <span className="underline">From:</span> here name from
                        database
                    </p>
                    <button
                        onClick={() => setResize(0)}
                        className="self-end text-best-white p-4">
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
                        className="my-4 p-1 rounded opacity-70"
                        name="request"
                        rows="2"
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
