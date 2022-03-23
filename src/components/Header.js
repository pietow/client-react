import React, {useState} from 'react'
import Logo from '../components/Logo'

export default function Header({toggle, setToggle, toggleBurger}) {

  // const [toggle, setToggle] = useState(0)

  // const toggleBurger = (e) => { //menu visible or not?
  //   e.preventDefault()
  //   toggle ? setToggle(0) : setToggle(1);
  // }

  const burger = () => { //burger menu; maybe over-engineered ^^
    let rows = [];
      for (let i = 0; i < 3; i++) {
        rows.push(<div className='w-5 border-t-2 border-best-white rounded-full' key={i}></div>)
      }
      return rows;
  }

  return (
    <>
      <header className="flex flex-row space-x-5 items-center justify-center h-14 sticky top-0 z-10 bg-teal-normal">

        <Logo />

        <h1 className="text-best-white font-zeyada text-4xl">here header</h1>

        <a href="#" onClick={e => toggleBurger(e)} className="hover:bg-teal-bright active:bg-light-orange">
          <div className='w-8 h-8 flex flex-col space-y-1 border border-best-white rounded-sm items-center justify-center'>         
            {burger()}
          </div>
        </a>
        <nav className={toggle? "visible absolute" : "hidden"}>
        <ul className="flex flex-col absolute z-10 bg-lemon-meringue opacity-95 text-gray-dark left-0 space-y-2 top-7 p-2 text-2xl rounded-md">
          <li className=""><a href="#">home</a></li>
          <li className=""><a href="#">blabla</a></li>
          <li className=""><a href="#">blibli</a></li>
          <li className=""><a href="#">contact</a></li>
          <li className=""><a href="#">logOut</a></li>
        </ul>
      </nav>
      </header>
        

      
    </>
  )
}
