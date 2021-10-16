import React, { Component } from 'react'
import { BsBook, BsPeople, BsArchive, BsJournalBookmark, BiChevronDown } from 'react-icons/all'

export default class Sidebar extends Component {
  constructor () {
    super()
    this.state = { showMenuUser: false, rotateArrow: '' }
    this.triggerMenuUser = this.triggerMenuUser.bind(this)
  }

  triggerMenuUser () {
    if (this.state.showMenuUser !== true) {
      this.setState({ showMenuUser: true, rotateArrow: 'transform rotate-180' })
    } else {
      (
        this.setState({ showMenuUser: false, rotateArrow: '' })
      )
    }
  }

  render () {
    return (
      <nav className="flex flex-col w-52 h-screen items-center gap-5">
        <div className=" flex flex-row py-4 items-center justify-between">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        <div className="flex flex-col w-full gap-5 px-10">
          <div className="flex flex-col">
            <div onClick={this.triggerMenuUser} className=" flex flex-row items-center cursor-pointer justify-between">
              <div className="flex flex-row gap-3 items-center">
                <BsPeople size={20} />
                <h3>User</h3>
              </div>
              <BiChevronDown className={`${this.state.rotateArrow}`} size={20}/>
            </div>
            {this.state.showMenuUser !== false
              ? (
              <div className="  flex flex-col justify-center py-2 gap-3 ">
                <div className=" flex  items-center gap-3">
                  <BsArchive size={20} />
                  <h3>Kelas 1</h3>
                </div>
                <div className=" flex  items-center gap-3">
                  <BsJournalBookmark size={20} />
                  <h3>Mapel 1</h3>
                </div>
                <div className=" flex  items-center gap-3">
                  <BsBook size={20} />
                  <h3>Latihan 1</h3>
                </div>
              </div>
                )
              : (
              <div></div>
                )}
          </div>
          <div className=" flex  items-center gap-3">
            <BsArchive size={20} />
            <h3>Kelas</h3>
          </div>
          <div className=" flex  items-center gap-3">
            <BsJournalBookmark size={20} />
            <h3>Mapel</h3>
          </div>
          <div className=" flex  items-center gap-3">
            <BsBook size={20} />
            <h3>Latihan</h3>
          </div>
        </div>
      </nav>
    )
  }
}
