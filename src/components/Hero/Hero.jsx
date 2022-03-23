/** @format */
import React from 'react'


const Hero = () => {
    return (
      
            <section className="md:flex md:flex-row w-full h-screen bg-hero bg-cover bg-center">
                <div className="text-center">
                    <h1 className="md:flex md:flex-row ">This is the HERO section</h1>
                    <p>Some text goes here</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Click here</button>  
                </div>
            </section>
        
    )
}

export default Hero;
