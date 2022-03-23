import React from 'react'

export default function PrevNextButtons() {
  return (
    <div className="my-4">
          <button className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2" type='button'>previous</button>
          <button className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2" type='button'>next</button>
    </div>
  )
}
