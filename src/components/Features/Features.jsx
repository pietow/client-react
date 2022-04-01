/** @format */

import React from 'react'
import CardImage1 from '../../assets/img/tobias-tullius-pb7gfl7_Ni8-unsplash.jpg'
import CardImage2 from '../../assets/img/jaunt-and-joy-nmi2TJCW-BM-unsplash.jpg'
import CardImage3 from '../../assets/img/jonas-verstuyft-jXwZOSXC7KA-unsplash.jpg'
import CardImage4 from '../../assets/img/mukuko-studio-tPKQwYHy8q4-unsplash.jpg'
import LogoLink from '../LogoLink'


export default function Features() {

    const images = [
        [CardImage1, "Be spontaneous"],
        [CardImage2, "Start friendships"],
        [CardImage3, "Learn from a local"],
        [CardImage4, "Sustainability"]
    ]

    return (
        <main className="bg-gradient-to-t from-pistachio-normal to-apricot-bright flex flex-col items-center pb-20 overflow-hidden">
            <h1 className="p-6">Connect and make new memories</h1>
            <div className="flex flex-row justify-evenly mt-10 pb-32 w-screen">
            {images.map(elem => (
                <div className="justify-center" key={elem[1]}>
                    <div className="rounded-lg shadow-lg bg-best-white max-w-sm">
                        <figure>
                            <img className="rounded-t-lg" src={elem[0]} alt="this is a pic" />
                        </figure>
                        <div className="p-6">
                            <h2 className="mb-2">
                                {elem[1]}
                            </h2>
                            <p className="text-justify mb-4">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content. Some
                                quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <LogoLink />
        </main>
    )
}