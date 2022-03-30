import React from 'react'

export default function DashboardPic(/* {randomData} */) {
  return (
    <figure className="w-40 space-y-2 m-6">
        <img className="drop-shadow-lg rounded-full" src={'https://picsum.photos/200/200.jpg'} alt="lorem"/>
        <figcaption className="text-best-white font-noto text-center">Here User Name</figcaption>
    </figure>
  )
}
