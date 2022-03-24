/** @format */
import React from 'react'
import Logo from '../Logo'


const Hero = () => {
    return (
      
            <section className="md:flex md:flex-col w-full h-screen bg-hero bg-cover bg-center">
                <div className="text-center m-auto bg-morning-sky-blue p-24 opacity-70 border border-best-white rounded-full">
                    <figure className="flex justify-center">
                    <Logo />
                    </figure>
                    <h1 className="md:flex md:flex-row text-best-white">This is the HERO section</h1>
                    <p className="text-best-white">Some text goes here</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-best-white font-bold py-2 my-4 px-4 border border-best-white rounded">Click here</button>  
                </div>
            </section>
        
    )
}

export default Hero;
