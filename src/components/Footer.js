import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/all'
import logo from '../assets/logo.png'

export default function Footer () {
  return (
    <footer className="bg-gray-400 md:py-5 py-4 md:px-10 px-5 mt-10 grid grid-cols-2 md:grid-cols-3 items-center">
        <img src={logo} className=" h-8 md:h-12" alt="logo" />
        <div className="hidden md:flex flex-row gap-8 items-center justify-center">
          <BsFacebook size={24} color="#1c1c1c" />
          <BsInstagram size={24} color="#1c1c1c" />
          <BsTwitter size={24} color="#1c1c1c" />
          <BsWhatsapp size={24} color="#1c1c1c" />
        </div>
        <h3 className="font-semibold md:text-base text-sm text-right">Copyright © CUPAXXHD <span className="hidden lg:inline-block">| Est. 2021</span></h3>
      </footer>
  )
}
