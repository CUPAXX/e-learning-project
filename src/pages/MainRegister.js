import React, { Component } from 'react'
import MainRightItems from '../components/MainRightItems'

export default class MainRegister extends Component {
  render () {
    return (
      <div>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <section className="bgRegister hidden md:flex">
          </section>
          <MainRightItems path="/login" title="Register As" subTitle="I Already Have Account" />
        </section>
      </div>
    )
  }
}
