import React from 'react'
import { BsBook, BsPeople, BsArchive, BsJournalBookmark, BiHome, BsVectorPen, BsSticky, BsInfoSquare } from 'react-icons/all'
import { NavLink } from 'react-router-dom'

export default function Sidebar () {
  // const { url } = useRouteMatch()
  return (
      <nav className="flex flex-col w-12 md:w-44 lg:w-48 xl:w-52 h-screen items-center gap-5">
        <NavLink to={'/admin'} className=" hover:text-yellow-700 flex flex-row py-4 items-center">
          <h2 className="hidden md:inline text-xl font-semibold">Dashboard</h2>
          <BiHome className="md:hidden inline" size={30} />
        </NavLink>
        <div className=" flex flex-col gap-5 px-4 md:px-10">
          <NavLink to="/admin/user" className=" hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsPeople size={20} />
            <h3 className="hidden md:inline">User</h3>
          </NavLink>
          <NavLink to={'/admin/kelas'} className="hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsArchive size={20} />
            <h3 className="hidden md:inline">Kelas</h3>
          </NavLink>
          <NavLink to="/admin/mapel" className="hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsJournalBookmark size={20} />
            <h3 className="hidden md:inline">Mapel</h3>
          </NavLink>
          <NavLink to="/admin/materi" className="hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsBook size={20} />
            <h3 className="hidden md:inline">Materi</h3>
          </NavLink>
          <NavLink to="/admin/latihan" className="hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsVectorPen size={20} />
            <h3 className="hidden md:inline">Latihan</h3>
          </NavLink>
          <NavLink to="/admin/quiz" className="hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsSticky size={20} />
            <h3 className="hidden md:inline">Quiz</h3>
          </NavLink>
          <NavLink to="/admin/informasi" className="hover:text-yellow-700 flex flex-row gap-3 items-center">
            <BsInfoSquare size={20} />
            <h3 className="hidden md:inline">Informasi</h3>
          </NavLink>
        </div>
      </nav>
  )
}
