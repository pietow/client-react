/** @format */

import React, { useState, useEffect, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

export default function Description({ description, dispatch }) {
    return (
        <div className="flex flex-col">
            <TextareaAutosize
                className="bg-best-white outline-0 mt-5 p-4 pb-9 resize-none w-11/12 hover:bg-pistachio-dark focus:bg-best-white placeholder:italic"
                value={description.text}
                onChange={(e) => {
                    dispatch({ type: 'update_text', text: e.target.value })
                }}
                placeholder="Type in your description..."
            />
            <div className="bg-best-white w-11/12">
                <hr className="w-11/12 mb-4 border-gray-200" />
            </div>
            <div className="p-4 pt-1 mb-4 bg-best-white w-11/12 text-sm text-gray-500">
                Help other people get to know you by telling them about your
                life and the things you like.
            </div>
        </div>
    )
}
