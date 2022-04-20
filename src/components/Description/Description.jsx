/** @format */

import React, { useState, useEffect, useRef } from 'react'

export default function Description({ description, dispatch }) {
    const [scrollHeight, setscrollHeight] = useState(100)
    const inputEl = useRef(null)
    console.log(description.text)
    return (
        <div>
            <textarea
                ref={inputEl}
                className="w-full px-4 py-1 overflow-hidden resize-y"
                style={{ height: scrollHeight + 'px' }}
                value={description.text}
                type="text"
                onChange={(e) => {
                    console.log(inputEl.current.style.height)
                    dispatch({ type: 'update_text', text: e.target.value })
                }}
            />
        </div>
    )
}
