
import React, { Component } from 'react'
import { BsPencilSquare, BsTrash, BsArrowLeft, BsArrowRight, BsSearch } from 'react-icons/all'

const dataUser = [
  {
    id: 1,
    nama: 'cupaxx',
    username: 'cupax99',
    email: 'cupaxx@gmail.com'
  },
  {
    id: 2,
    nama: 'cupaxx2',
    username: 'cupax98',
    email: 'cupaxx2@gmail.com'
  },
  {
    id: 3,
    nama: 'cupaxx3',
    username: 'cupax97',
    email: 'cupaxx3@gmail.com'
  },
  {
    id: 4,
    nama: 'cupaxx4',
    username: 'cupax96',
    email: 'cupaxx4@gmail.com'
  },
  {
    id: 5,
    nama: 'cupaxx5',
    username: 'cupax95',
    email: 'cupaxx5@gmail.com'
  }
]
export default class AdminUser extends Component {
  render () {
    return (
      <div className="flex flex-col h-full mx-10 my-10">
        <h2 className="font-bold text-3xl">Manage User</h2>
        <div className="">
          <div className="flex flex-row justify-between items-center mt-4">
          <div className="bg-green-500 px-4 py-2 text-sm rounded-md font-semibold shadow-lg flex flex-start">Tambah</div>
            <div className="flex flex-row items-center justify-center bg-white px-3 py-3 gap-2 rounded-lg">
              <div className="flex flex-row justify-center items-center bg-gray-200 px-3 rounded-md ">
                <div className=" text-gray-500"><BsSearch/></div>
                <input className="px-3 bg-gray-200 placeholder-gray-500 py-2 text-xs focus:outline-none" type="text" placeholder="Search" />
              </div>
              <select className="bg-transparent text-xs focus:outline-none" name="categories">
                <option value="nama">Nama</option>
                <option value="username">Username</option>
                <option value="email">Email</option>
              </select>
              <div className="bg-red-400 px-4 py-2 text-xs rounded-md font-semibold shadow-lg">Search</div>
            </div>
          </div>
          <table className=" text-left w-full my-4 shadow-md">
            <tr className="bg-yellow-500">
              <th className="font-semibold text-sm py-2 px-4">Name</th>
              <th className="font-semibold text-sm py-2 px-4">Username</th>
              <th className="font-semibold text-sm py-2 px-4">Email</th>
              <th className="font-semibold text-sm py-2 px-4">Setting</th>
            </tr>
            {dataUser.map((coba) => (
              <tr key={coba.id} className="bg-gray-300">
                <td className="text-sm py-2 px-4">{coba.nama}</td>
                <td className=" text-sm py-2 px-4">{coba.username}</td>
                <td className=" text-sm py-2 px-4">{coba.email}</td>
                <td className="text-sm py-2 px-4 flex flex-row gap-4 items-center"><BsPencilSquare/> <BsTrash/> </td>
              </tr>
            ))}
          </table>
          <div className="flex flex-row justify-end gap-5">
            <div className=" flex flex-row items-center font-semibold text-sm justify-center gap-2 bg-yellow-500 px-4 py-2 rounded-md shadow-lg">
              <BsArrowLeft />
              <h3>Prev</h3>
            </div>
            <div className=" flex flex-row items-center font-semibold text-sm justify-center gap-2 bg-yellow-500 px-4 py-2 rounded-md shadow-lg">
            <h3>Next</h3>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
