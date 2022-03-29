import React from 'react'

export default function DashboardSection({randomData, heading}) {
  return (
    <section className="flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 rounded-md drop-shadow-md border border-best-white rounded-md">
        <h1 className="underline underline-offset-8 decoration-1 font-zeyada text-best-white m-4 text-3xl">{heading}</h1>
        <p className="text-justify rounded-md mx-4 font-noto p-2 text-best-white opacity-80">{randomData}</p>
      </section>
  )
}
