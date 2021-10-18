/* eslint-disable react/no-children-prop */
import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import AdminKelas from './AdminKelas'
import AdminMapel from './AdminMapel'
import AdminUser from './AdminUser'
import AdminLatihan from './AdminLatihan'
import AdminQuiz from './AdminQuiz'
import AdminInformation from './AdminInformation'
import AdminMateri from './AdminMateri'

const routes = [
  {
    path: '/admin',
    exact: true,
    main: AdminDashboard

  },
  {

    path: '/admin/kelas',
    main: AdminKelas
  },
  {

    path: '/admin/user',
    main: AdminUser
  },
  {

    path: '/admin/latihan',
    main: AdminLatihan
  },
  {

    path: '/admin/quiz',
    main: AdminQuiz
  },
  {

    path: '/admin/informasi',
    main: AdminInformation
  },
  {

    path: '/admin/materi',
    main: AdminMateri
  },
  {

    path: '/admin/mapel',
    main: AdminMapel
  }
]

const AdminIndex = () => {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-grow bg-gray-200">
          <Navbar />
          <div>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={<route.main />}
              />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default AdminIndex
