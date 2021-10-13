import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.png'
import { BiChevronLeft } from 'react-icons/all'

/* eslint-disable react/prop-types */
export default function MainRightItems (props) {
  return (
    <div>
      <section className="flex flex-col px-10 py-5">
        <div className="flex flex-row justify-between items-center pb-24">
          <img src={logo} className="w-2/12 " alt="logo" />
          <NavLink to="/" className="flex flex-row hover:text-yellow-500">
            <BiChevronLeft size={25} />
            <h3 className="font-semibold ">Home</h3>
          </NavLink>
        </div>
        <h2 className="font-bold text-4xl text-center text-yellow-700 pb-20">{props.title}</h2>
        <div className="flex flex-col gap-8 px-5">
          <div className="bg-yellow-700 text-white text-center py-3 rounded-lg cursor-pointer font-semibold hover:bg-yellow-500">I Am a Teacher</div>
          <div className="bg-yellow-700 text-white text-center py-3 rounded-lg cursor-pointer font-semibold hover:bg-yellow-500">I Am a Student</div>
        </div>
        <NavLink to={props.path}>
          <h3 className="text-center font-semibold text-sm text-yellow-700 my-12 hover:text-yellow-500 cursor-pointer">{props.subTitle}</h3>
        </NavLink>
       </section>
    </div>
  )
}
/* eslint-disable react/prop-types */
