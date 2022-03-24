import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/'
import Navbar from '../components/Navbar'


export default function Home({toggle}) {
  return (
    <main className={toggle ? "transition duration-300 blur" : "transition duration-300"}>
        <Navbar />
        <Hero />
        <Features />
    </main>
  )
}
