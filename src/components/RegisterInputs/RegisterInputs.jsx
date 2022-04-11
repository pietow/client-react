/** @format */

import React from 'react'
import registerInputList from '../../data/registerInputList.json'

export default function RegisterInputs({ data, setData }) {
    return (
        <>
            {registerInputList.map((x) => (
                <input
                    key={x.name}
                    onChange={(e) =>
                        setData(data, (data[x.name] = e.target.value))
                    }
                    className="mt-4 mx-4 p-1 rounded opacity-70"
                    type={x.type}
                    id={x.name}
                    name={x.name}
                    placeholder={x.placeholder + ' *'}
                    required={true}
                />
            ))}
        </>
    )
}
