import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/all'

export default class Login extends Component {
  render () {
    return (
      <div className="bg-red-50 relative h-screen w-full flex justify-center items-center">
        <div className="flex flex-col bg-white w-72 sm:w-80 md:w-96 rounded-lg py-10 px-10 gap-10 md:-mt-10 shadow-2xl">
          <h2 className="text-center font-bold text-2xl text-yellow-700">Welcome Back</h2>
          <form className="flex flex-col gap-4">
            <h3 className="font-semibold text-yellow-700">Email : </h3>
            <input className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparen text-yellow-700" type="email" placeholder="example@mail.com" />
            <h3 className="font-semibold text-yellow-700" >Password : </h3>
            <input className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparen text-yellow-700" type="password" placeholder="your password" />
            <button className="mt-10 bg-yellow-700 py-2 rounded-lg text-white font-semibold" type="submit">Login</button>
          </form>
          <NavLink to="/forgot" className="text-center text-sm text-yellow-700 cursor-pointer hover:text-yellow-500 font-semibold">Forgot Your Password ?</NavLink>
        </div>
        <NavLink to="/login" className="absolute top-6 left-6 flex flex-row justify-center items-center text-yellow-700 hover:text-yellow-500 cursor-pointer">
          <BiChevronLeft size={30} />
          <h3 className="font-semibold text-lg">Back</h3>
        </NavLink>
      </div>
    )
  }
}
