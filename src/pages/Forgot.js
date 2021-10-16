import React, { Component } from 'react'
import bgForgot from '../assets/bgForgot.png'
import { NavLink } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/all'

export default class Forgot extends Component {
  sub (e) {
    e.preventDefault()
    // setTimeout(() => {
    this.props.history.push('forgot-change')
    // }, 3000)
  }

  render () {
    console.log(this.props)
    return (
      <div className="flex flex-col justify-center -my-16 mb-16 mx-10 md:mx-40 h-screen gap-8">
        <NavLink to="/" className="  flex flex-row items-center text-yellow-700 hover:text-yellow-500 cursor-pointer mt-5">
          <BiChevronLeft size={30} />
          <h3 className="font-semibold text-lg">Home</h3>
        </NavLink>
        <h3 className=" text-2xl md:text-3xl text-center text-yellow-700 font-bold mb-5">Forgot Your Password ?</h3>
        <div className="flex justify-center items-center">
          <img src={bgForgot} className=" w-36" alt="bg forgot" />
        </div>
        <form onSubmit={(e) => this.sub(e)} className="w-full flex flex-col justify-center items-center">
          <input type="email" className="bg-gray-50 w-full mb-5 px-5 py-2 rounded-lg border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparen text-yellow-700" placeholder="Masukan Email Anda" />
          <button type="submit" className="bg-yellow-700 text-white font-semibold text-lg py-2 px-10 rounded-lg">Send Code</button>
        </form>
        <h3 className="text-gray-500 text-center">Check your email for verification code</h3>
      </div>
    )
  }
}
