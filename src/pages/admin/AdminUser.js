
import React, { Component } from 'react'
import { BsPencilSquare, BsTrash } from 'react-icons/all'

export default class AdminUser extends Component {
  render () {
    return (
      <div className="flex flex-col h-full mx-10 my-10">
        <h2 className="font-bold text-3xl">Manage User</h2>
        <div className="">
          <table className=" text-left w-full">
            <tr className="bg-yellow-500">
              <th className="font-semibold text-sm py-2 px-4">Name</th>
              <th className="font-semibold text-sm py-2 px-4">Username</th>
              <th className="font-semibold text-sm py-2 px-4">Email</th>
              <th className="font-semibold text-sm py-2 px-4">Setting</th>
            </tr>
            <tr className="bg-gray-300">
              <td className="text-sm py-2 px-4">cupaxx</td>
              <td className=" text-sm py-2 px-4">cupaxx12</td>
              <td className=" text-sm py-2 px-4">cupax@email.com</td>
              <td className="text-sm py-2 px-4 flex flex-row gap-4 items-center"><BsPencilSquare/> <BsTrash/> </td>
            </tr>
            <tr className="bg-gray-300">
              <td className="text-sm py-2 px-4">cupaxx</td>
              <td className=" text-sm py-2 px-4">cupaxx12</td>
              <td className=" text-sm py-2 px-4">cupax@email.com</td>
              <td className="text-sm py-2 px-4 flex flex-row gap-4 items-center"><BsPencilSquare/> <BsTrash/> </td>
            </tr>
            <tr className="bg-gray-300">
              <td className="text-sm py-2 px-4">cupaxx</td>
              <td className=" text-sm py-2 px-4">cupaxx12</td>
              <td className=" text-sm py-2 px-4">cupax@email.com</td>
              <td className="text-sm py-2 px-4 flex flex-row gap-4 items-center"><BsPencilSquare/> <BsTrash/> </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
