/** @format */

import React, { useState, useEffect } from 'react'
import Rnd from 'react-rnd'

export default function ChatBox({
    allSenders,
    seeAllMessages,
    accessToken,
    resize,
    setResize,
    userId,
    chatValue,
    setChatValue,
    setAllMessages,
    allMessages,
}) {
    const styleChatBox =
        accessToken && resize
            ? 'flex items-center overflow-auto h-80 flex-col border rounded-md border-best-white w-[450px] backdrop-brightness-75 backdrop-blur-lg drop-shadow-md'
            : 'hidden'

    const styleChatList =
        accessToken && resize
            ? 'fixed right-[510px] w-fit backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border rounded-md border-best-white'
            : 'hidden'

    const messageToHost = async () => {
        const sender = sessionStorage.getItem('user')
        const body = {
            sender: sender,
            receiver: userId,
            text: chatValue,
        }
        const response = await fetch(`api/message/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${accessToken}`,
            },
            body: JSON.stringify(body),
        })
        const result = await response.json()
        /* console.log(result) */
    }

    function selectChatList(userId) {
        const seeAllMessages = async () => {
            const receiver = sessionStorage.getItem('user')
            const response = await fetch(`/api/message/${receiver}/receive`, {
                //change url to /api/message/:userId/sent
                method: 'GET',
                headers: {
                    'Content-Type': 'application',
                    'authorization': `bearer ${accessToken}`,
                },
            })
            const result = await response.json()
            const filterMessages = result.filter((message) => {
                if (message.sender._id === userId) return true
            })
            console.log(filterMessages)
            console.log(userId)
            setAllMessages(filterMessages)
        }
        seeAllMessages()
    }

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
                    onClick={() => {
                        !resize ? setResize(1) : setResize(0)
                        seeAllMessages()
                    }}
                    className="">
                    messages
                </button>
            </div>
            <Rnd
                default={{
                    x: 850,
                    y: 205,
                    width: 500,
                    height: 190,
                }}
                className="z-[250]"
                minWidth={500}
                minHeight={190}
                bounds="window">
                <div className={styleChatList}>
                    <ul className="flex flex-col">
                        {allSenders.map((user, i) => {
                            return (
                                <button
                                    onClick={() => selectChatList(user.id)}
                                    className="curser-pointer hover:scale-[1.1] self-start p-2 text-best-white"
                                    key={i}>
                                    {user.sender}
                                </button>
                            )
                        })}
                    </ul>
                </div>

                <div className={styleChatBox}>
                    {/* sender and x for closing the window */}
                    <div className="sticky top-0 flex w-full justify-between">
                        <p className="self-start text-best-white p-4">
                            {/* <span className="underline">From:</span> here name from
                        database */}
                        </p>
                        <button
                            onClick={() => setResize(0)}
                            className="self-end text-best-white p-4">
                            x
                        </button>
                    </div>
                    {/* all kind of texts and pics and reply buttons */}
                    <div className="flex items-center gap-2">
                        <div className="border border-best-white rounded-full w-12 h-12 overflow-hidden">
                            <img
                                src={'https://picsum.photos/200/200.jpg'}
                                alt="profile photo"
                            />
                        </div>
                        <textarea
                            onChange={(e) => setChatValue(e.target.value)}
                            className="my-4 p-1 rounded opacity-70"
                            name="request"
                            rows="2"
                            cols="33"
                            value={chatValue}
                            placeholder="Write a message"
                        />

                        {/* <button className="active:scale-95 p-1 border border-best-white text-best-white rounded">
                        Reply
                    </button> */}
                    </div>
                    <button
                        onClick={() => messageToHost()}
                        className="active:scale-95 mx-auto my-4 p-1 border border-best-white text-best-white rounded w-1/2">
                        Send
                    </button>
                    {allMessages.map((message, i) => {
                        return (
                            <div className="self-start p-2" key={i}>
                                <p className="text-best-white">
                                    {message.sender.username} wrote:
                                </p>
                                <p className="border border-best-white rounded-md px-2 py text-best-white">
                                    {message.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </Rnd>
        </>
    )
}
