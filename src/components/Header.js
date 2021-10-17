import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu, BiChevronUp } from 'react-icons/all'
import { Link } from 'react-scroll'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const menu = () => {
    if (showMenu !== true) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }
  return (
    <React.Fragment>
    {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/login/teacher' && location.pathname !== '/login/student' &&
      location.pathname !== '/forgot' && location.pathname !== '/forgot-change' && location.pathname !== '/admin' && location.pathname !== '/admin/kelas'
      ? (
      <React.Fragment>
      <header id="headerId" className="bg-white static flex flex-row justify-between items-center py-2 px-5">
      <Link to="/">
        <img src={logo} className="md:h-14 h-10 hover:opacity-50 cursor-pointer" alt="logo"/>
      </Link>
      <nav className="hidden md:flex flex-row gap-4">
        <Link activeClass="active"
          to="headerId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer">Home</Link>
        <Link activeClass="active"
          to="aboutId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer">About</Link>
        <Link activeClass="active"
          to="featureId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer">Feature</Link>
        <Link activeClass="active"
          to="informationId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer">Information</Link>
      </nav>
      <nav className="md:hidden flex pr-4">
        <GiHamburgerMenu onClick={menu} size={20}/>
      </nav>
      <nav className="hidden md:flex pr-4">
        <NavLink to="/login" className="bg-yellow-600 text-white py-2 px-7 rounded-md font-semibold cursor-pointer hover:bg-yellow-500">Masuk</NavLink>
      </nav>

    </header>
    {showMenu === true
      ? (
      <header className=" md:hidden bg-white sticky flex flex-col px-10 py-3 gap-2">
        <nav className="flex flex-col  items-end gap-2">
          <Link activeClass="active"
          to="headerId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer text-sm">Home</Link>
          <Link activeClass="active"
          to="aboutId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer text-sm">About</Link>
          <Link activeClass="active"
          to="featureId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer text-sm">Feature</Link>
          <Link activeClass="active"
          to="informationId"
          spy={true}
          smooth={true}
          duration={100}
          className="font-semibold text-yellow-700 hover:underline cursor-pointer text-sm">Information</Link>
        </nav>
        <nav className="text-center">
          <NavLink to="/login" className="bg-yellow-600 text-white py-1 px-24 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 text-sm">Masuk</NavLink>
        </nav>
      </header>
        )
      : <div></div>}
      <Link activeClass="active"
          to="headerId"
          spy={true}
          smooth={true}
          duration={100}
          >
        <BiChevronUp size={40} className="bg-yellow-600 fixed bottom-4 cursor-pointer"></BiChevronUp>
      </Link>
      </React.Fragment>
        )
      : (
      <div></div>
        )}

    </React.Fragment>
  )
}
