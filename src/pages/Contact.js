/** @format */

import React from 'react'
import SendBtn from '../components/SendBtn'


export default function Contact() {
    return (
        <React.Fragment>
            <h2 className="text-center">Get in touch!</h2>
            <main className="container flex justify-center items-center m-auto h-screen">
                <form className="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide font-noto font-bold text-xs mb-2"
                                for="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full font-noto border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="First name"
                            />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label
                                class="block uppercase tracking-wide font-noto font-bold text-xs mb-2"
                                for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                class="w-full font-noto border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="grid-last-name"
                                type="text"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide font-noto font-bold text-xs mb-2"
                                for="grid-password">
                                E-mail
                            </label>
                            <input
                                class="w-full font-noto border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide font-noto font-bold text-xs mb-2"
                                for="grid-password">
                                Message
                            </label>
                            <textarea
                                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <SendBtn />
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </main>
        </React.Fragment>
    )
}
