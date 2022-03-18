import React from 'react'
import '../assets/colorPattern.css'

export default function dashboard() {

  return (
    <div className="h-screen flex flex-col overflow-hidden items-center space-y-10" id='dashboard'>{/* {window.innerWidth} */}
      <figure className="w-40 space-y-2 m-6">
        <img className="drop-shadow-sm rounded-full" src={'https://picsum.photos/200/200.jpg'} alt="lorem"/>
        <figcaption className="text-center" >name of person</figcaption>
      </figure>
      <p className="rounded-md drop-shadow-md justify-center w-48 p-2" id="dashboard-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a
      </p>
      <button className="" type='button'>Allée!</button>
    </div>
  )
}
