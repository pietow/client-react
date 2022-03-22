/** @format */

import React from 'react'
import CardImage1 from '../assets/img/tobias-tullius-pb7gfl7_Ni8-unsplash.jpg'
import CardImage2 from '../assets/img/jaunt-and-joy-nmi2TJCW-BM-unsplash.jpg'
import CardImage3 from '../assets/img/jonas-verstuyft-jXwZOSXC7KA-unsplash.jpg'
import CardImage4 from '../assets/img/mukuko-studio-tPKQwYHy8q4-unsplash.jpg'

const Features = () => {
    return (
      <>
      <h1 class="text-center fontFamily-zeida p-6">Connect and make new memories</h1>
        <div class="flex flex-row justify-evenly mt-10 mb-20">
          
            <div class="justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg" src={CardImage1} alt="" />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content. Some
                            quick example text to build on the card title and
                            make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>

            <div class="justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg" src={CardImage2} alt="" />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content. Some
                            quick example text to build on the card title and
                            make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>

            <div class="justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg" src={CardImage3} alt="" />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content. Some
                            quick example text to build on the card title and
                            make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>

            <div class="justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg" src={CardImage4} alt="" />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content. Some
                            quick example text to build on the card title and
                            make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Features
