/** @format */
import LogoLink from '../components/LogoLink'
import React from 'react'


export default function Contact() {

    const submit = e => {
        e.preventDefault()
        alert('we might answer you. \n but most likely not.')
    } 

    return (
        <main className="flex flex-col items-center justify-evenly bg-contact bg-fixed bg-center bg-cover h-screen">
            <h1 className="underline underline-offset-8 decoration-1 font-zeyada text-center text-6xl px-8 backdrop-brightness-75 backdrop-blur-sm text-best-white border rounded">
                Get in touch!
            </h1>
            <form onSubmit={submit} className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 backdrop-brightness-75 backdrop-blur-sm flex flex-col border-best-white border rounded">
                        <input
                            className="mt-4 mx-4 p-1 rounded opacity-70"
                            id="contact-first-name"
                            type="text"
                            placeholder="First name"
                        />
                        <input
                            className="mt-4 mx-4 p-1 rounded opacity-70"
                            id="grid-last-name"
                            type="text"
                            placeholder="Last name"
                        />
                        <input
                            className="mt-4 mx-4 p-1 rounded opacity-70"
                            id="email"
                            type="email"
                            placeholder="email"
                        />
                        <textarea
                            className="mt-4 mx-4 p-1 rounded opacity-70 h-48"
                            id="message"
                            placeholder="Your message here..."></textarea>
                <button onClick={submit} className="active:scale-95 mx-auto my-4 p-1 border border-best-white text-best-white rounded w-1/2" type="submit" value="Become a Member">Send</button>
            </form>
            <LogoLink />
        </main>
    )
}
