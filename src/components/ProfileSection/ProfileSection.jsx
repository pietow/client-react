import React from 'react'

export default function ProfileSection({randomData, heading}) {
  return (
    <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
        <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 text-3xl">{heading}</h1>
        <p className="text-justify mx-4 mb-4 p-4 text-best-white">{randomData}</p>
    </section>
  )
}
