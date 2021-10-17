import React, { useState } from 'react'
import { BiChevronDown, BiUserCircle } from 'react-icons/all'
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  const [showMenu, setShowMenu] = useState(false)

  const menu = () => {
    if (showMenu !== true) {
      setShowMenu(true)
      setTimeout(() => {
        setShowMenu(false)
      }, 5000)
    } else {
      setShowMenu(false)
    }
  }
  return (
      <div className="relative">
        <nav className="flex flex-row py-3 bg-white w-full">
          <div className="w-full flex items-center">
            <img src={logo} alt="logo" className="h-10" />
          </div>
          <div onClick={menu} className="flex flex-row items-center justify-center px-8 hover:text-yellow-700 cursor-pointer">
            <BiUserCircle size={30} />
            <BiChevronDown size={30} />
          </div>
        </nav>
        {showMenu === true
          ? (
          <div className=" absolute right-0 top-16 py-4 gap-2 rounded-b-lg flex flex-col px-10 justify-center items-center bg-white">
          <NavLink to="/" className=" text-sm font-semibold hover:text-yellow-700">Profile</NavLink>
          <NavLink to="/" className=" text-sm font-semibold hover:text-yellow-700">Logout</NavLink>
        </div>
            )
          : (
          <div></div>
            )}
      </div>
  )
}
