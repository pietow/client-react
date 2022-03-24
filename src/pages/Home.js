import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/'


export default function Home({toggle}) {
  return (
    <main className={toggle ? "blur" : ""}>
        <Hero />
        <Features />
    </main>
  )
}
