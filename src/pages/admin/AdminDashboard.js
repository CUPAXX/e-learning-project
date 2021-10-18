import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminDashboard extends Component {
  render () {
    return (
      <div className="flex flex-col h-full mx-10 my-10 gap-8">
            <h2 className="font-bold text-3xl">Dashboard Admin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              <Link to="/admin/user" className="flex flex-col items-center gap-2 hover:opacity-50">
                <div className=" bg-yellow-400 shadow-md rounded-lg w-52 h-32 text-5xl font-semibold flex justify-center items-center">0</div>
                <h3 className=" font-semibold">User</h3>
              </Link>
              <Link to="/admin/kelas" className="flex flex-col items-center gap-2 hover:opacity-50">
                <div className=" bg-green-400 shadow-md rounded-lg w-52 h-32 text-5xl font-semibold flex justify-center items-center">99</div>
                <h3 className=" font-semibold">Kelas</h3>
              </Link>
              <Link to="/admin/mapel" className="flex flex-col items-center gap-2 hover:opacity-50">
                <div className=" bg-red-400 shadow-md rounded-lg w-52 h-32 text-5xl font-semibold flex justify-center items-center">231</div>
                <h3 className=" font-semibold">Mata Pelajaran</h3>
              </Link>
              <Link to="/admin/materi" className="flex flex-col items-center gap-2 hover:opacity-50">
                <div className=" bg-blue-400 shadow-md rounded-lg w-52 h-32 text-5xl font-semibold flex justify-center items-center">1023</div>
                <h3 className=" font-semibold">Materi</h3>
              </Link>
            </div>
          </div>
    )
  }
}

export default AdminDashboard
