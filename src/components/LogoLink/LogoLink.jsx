import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

export default function LogoLink() {
  return (
          <Link title="go home" to="/" className="bg-best-white opacity-40 scale-[2] border border-best-white rounded-full"><Logo /></Link>
  )
}
