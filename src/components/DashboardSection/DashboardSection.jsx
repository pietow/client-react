import React from 'react'

export default function DashboardSection({randomData, heading}) {
  return (
    <section className="flex flex-col items-center bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <h1 className="font-zeyada m-4 text-3xl">{heading}</h1>
        <p className="rounded-md mx-4 p-2 bg-apricot-bright opacity-80">{randomData}</p>
      </section>
  )
}
