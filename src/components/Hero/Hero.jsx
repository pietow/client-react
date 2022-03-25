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
                <h1 className="md:flex md:flex-row text-best-white">Connect... roam!</h1>
                <p className="text-best-white mb-7">Find a roam mate</p>
                <a href="/register" className="active:bg-light-orange hover:border-light-orange text-best-white font-bold py-3 px-6 border border-best-white rounded">Register</a>  
            </div>
        </section>
        
    )
}

export default Hero;
