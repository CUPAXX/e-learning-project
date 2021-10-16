import React, { Component } from 'react'
import MainRightItems from '../components/MainRightItems'
import { AiFillCloseCircle } from 'react-icons/all'

export default class MainLogin extends Component {
  constructor () {
    super()
    this.state = { showModal: false }
    this.triggerModal = this.triggerModal.bind(this)
  }

  triggerModal () {
    if (this.state.showModal === false) {
      this.setState({ showModal: true })
    } else {
      this.setState({ showModal: false })
    }
  }

  render () {
    console.log(this.state)
    return (
      <React.Fragment>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <section className="bgLogin hidden md:flex">
          </section>
          <MainRightItems title="Login As" onTrigger={this.triggerModal}/>
        </section>
        {this.state.showModal !== false
          ? (
          <div className="bg-gray-800 bg-opacity-40 top-0 w-full h-full absolute flex justify-center items-center ">
              <div className=" bg-gray-600 w-80 px-10 py-8 -mt-52 relative rounded-lg">
                <h3 className="text-white text-center">Please Contact The Administrator For Creating Your Account admin@mail.com</h3>
                <AiFillCloseCircle onClick={this.triggerModal} className="absolute -top-2 -right-2 text-white hover:text-red-500 cursor-pointer" size={30} />
              </div>
          </div>
            )
          : (
          <div></div>
            )}
      </React.Fragment>
    )
  }
}
