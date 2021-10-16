import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default class AdminDashboard extends Component {
  render () {
    return (
      <div className="flex flex-row">

        <Sidebar />

        <div className="flex flex-col flex-grow bg-gray-200">

        <Navbar />

        <h3>isi</h3>
        </div>
      </div>
    )
  }
}
