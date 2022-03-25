/* import React from 'react'

export default function Burger() {
    let rows = [];
      for (let i = 0; i < 3; i++) {
        rows.push(<div className='w-5 border-t-2 border-best-white rounded-full' key={i}></div>)
      }
      return <div className='w-8 h-8 flex flex-col space-y-1 border border-best-white rounded-sm items-center justify-center'>{rows}</div>
} */

import React from 'react'

export default function Burger() {

  let rows = ['1', '2', '3']
  
  return (
    <div className='w-8 h-8 flex flex-col space-y-1 border border-best-white rounded-sm items-center justify-center'>
      {rows.map(x => <div className='w-5 border-t-2 border-best-white rounded-full' key={x}></div>)}
    </div>)
}