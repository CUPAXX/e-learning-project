import React, { Component } from 'react'
import { BiChevronDown, BiUserCircle } from 'react-icons/all'
import logo from '../../../assets/logo.png'

export default class Navbar extends Component {
  render () {
    return (
      <nav className="flex flex-row py-3 bg-white w-full">
        <div className="w-full flex items-center">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="flex flex-row items-center justify-center px-8 hover:text-yellow-700 cursor-pointer">
          <BiUserCircle size={30} />
          <BiChevronDown size={30} />
        </div>
      </nav>
    )
  }
}
