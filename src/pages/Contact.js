/** @format */

import React from 'react'
import SendBtn from '../components/SendBtn'

export default function Contact() {
    return (
        <main className="bg-contact bg-content bg-center bg-cover h-screen">
            <h1 className="text-best-white text-6xl font-zeyada text-center pt-8">
                Get in touch!
            </h1>
            <form className="backdrop-blur-sm relative flex flex-col border-best-white border mx-4 rounded top-48 absolute">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                            className="w-full font-noto border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="contact-first-name"
                            type="text"
                            placeholder="First name"
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <input
                            class="w-full font-noto border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-last-name"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <input
                            class="w-full font-noto border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <textarea
                            class=" no-resize w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            id="message"
                            placeholder="Your message here..."></textarea>
                    </div>
                </div>
                <div class="mx-auto pb-2 md:flex md:items-center">
                   
                        <SendBtn />
                </div>
                
            </form>
        </main>
    )
}
