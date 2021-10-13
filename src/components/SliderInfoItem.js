import React from 'react'

/* eslint-disable react/prop-types */
export default function SliderInfoItem (props) {
  return (
    <div className=" md:py-7 py-4 md:px-7 px-5 space-y-2 md:space-y-3">
      <h3 className="font-semibold text-base md:text-lg">{props.title}</h3>
      <p className=" text-gray-600 text-xs md:text-base">{props.message}</p>
    </div>
  )
}
/* eslint-disable react/prop-types */
