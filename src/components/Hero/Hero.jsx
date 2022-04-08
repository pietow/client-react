/** @format */
import React, { useContext } from 'react'
import Logo from '../Logo'
import {Link} from 'react-router-dom'
import { Authentication } from '../../context/accessTokenContext'


export default function Hero() {

    const accessToken = useContext(Authentication)



    return (
      
        <section className="md:flex md:flex-col w-full h-screen ">
            <div className="w-1/2 overflow-hidden text-center m-auto p-24 backdrop-blur backdrop-brightness-75 rounded-full">{/* bg-morning-sky-blue,  opacity-70 */}
                <figure className="flex justify-center mb-10 scale-[5]">
                    <Logo />
                </figure>
                <h1 className="text-best-white">Connect... roam!</h1>
                <p className="text-best-white mb-7">Find a roam mate</p>
                <div className="flex justify-center gap-4 w-1/2 m-auto">
                    {(() => {if (!accessToken) {
                        return (
                            <>
                                <Link to="/register" className="w-28 active:bg-light-orange hover:border-light-orange text-best-white font-bold py-3 border border-best-white rounded">Register</Link>  
                                <Link to="/login" className="w-28 active:bg-light-orange hover:border-light-orange text-best-white font-bold py-3 border border-best-white rounded">Login</Link>  
                            </>
                        )
                    }})()}
                </div>
            </div>
        </section> 
    )
}
