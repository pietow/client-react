import React from 'react'
import contactInputList from '../../data/contactInputList.json' 

export default function ContactInputs() {
    return (
        <>
            {contactInputList.map(elem => <input className="mt-4 mx-4 p-1 rounded opacity-70" key={elem.name} id={elem.name} type={elem.type} placeholder={elem.placeholder} />)}
        </>
    )
}
