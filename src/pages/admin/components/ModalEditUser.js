import React from 'react'

export default function ModalEditUser (props) {
  return (
    <div className=" bg-gray-800 z-30 bg-opacity-50  top-0 left-0 w-full h-full absolute flex justify-center items-center">
      <div className="bg-white flex flex-col gap-10 px-8 py-5 rounded-lg">
        <h3 className="font-bold text-2xl text-center text-gray-800">Edit User</h3>
        <form className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-gray-800">Nama : </h4>
          <input className=" bg-gray-100 px-2 py-2 placeholder-gray-700 rounded-md mb-6 focus:outline-none border border-transparent focus:border-yellow-500" id="nama" type="text" placeholder="Input Nama"/>
          <h4 className="text-sm font-semibold text-gray-800">Email : </h4>
          <input className=" bg-gray-100 px-2 py-2 placeholder-gray-700 rounded-md mb-6 focus:outline-none border border-transparent focus:border-yellow-500" id="nama" type="email" placeholder="Input Email"/>
          <h4 className="text-sm font-semibold text-gray-800">Password : </h4>
          <input className=" bg-gray-100 px-2 py-2 placeholder-gray-700 rounded-md mb-6 focus:outline-none border border-transparent focus:border-yellow-500" id="nama" type="password" placeholder="Input Password"/>
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-row items-center justify-center gap-4 pr-8">
              <h3 className=" text-sm font-semibold text-gray-800">Role : </h3>
              <select className="bg-gray-100 px-2 py-2 rounded-md focus:outline-none w-28" name="role">
                <option value="guru">Guru</option>
                <option value="admin">Admin</option>
                <option value="murid">Murid</option>
              </select>
            </div>
            <button onClick={props.onTrigger} type="button" className="bg-yellow-400 px-8 py-2 rounded-md font-semibold text-gray-800">Cancel</button>
            <button type="submit" className="bg-green-400 px-8 py-2 rounded-md font-semibold text-gray-800">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
