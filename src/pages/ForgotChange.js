import React, { Component } from 'react'
import bgForgot from '../assets/bgForgot.png'
// import { NavLink } from 'react-router-dom'
// import { BiChevronLeft } from 'react-icons/all'

export default class ForgotChange extends Component {
  render () {
    return (
      <div className="flex flex-col justify-center mb-16 mx-10 md:mx-40 h-screen gap-8">
        {/* <NavLink to="/" className="  flex flex-row items-center text-yellow-700 hover:text-yellow-500 cursor-pointer mt-5">
          <BiChevronLeft size={30} />
          <h3 className="font-semibold text-lg">Home</h3>
        </NavLink> */}
        <h3 className=" text-2xl md:text-3xl text-center text-yellow-700 font-bold mb-5">Update Your Password</h3>
        <div className="flex justify-center items-center">
          <img src={bgForgot} className=" w-36" alt="bg forgot" />
        </div>
        <form className="w-full flex flex-col justify-center items-center">
          <input type="text" className="bg-gray-50 w-full mb-5 px-5 py-2 rounded-lg border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparen text-yellow-700" placeholder="Verification Code" />
          <input type="password" className="bg-gray-50 w-full mb-5 px-5 py-2 rounded-lg border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparen text-yellow-700" placeholder="New Password" />
          <input type="password" className="bg-gray-50 w-full mb-5 px-5 py-2 rounded-lg border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparen text-yellow-700" placeholder="Confirm Password" />
          <button type="submit" className="bg-yellow-700 text-white font-semibold text-lg py-2 px-10 rounded-lg">Save</button>
        </form>
      </div>
    )
  }
}
