import React, { Component } from 'react'
import MainRightItems from '../components/MainRightItems'

export default class MainLogin extends Component {
  render () {
    return (
      <div>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <section className="bgLogin hidden md:flex">
          </section>
          <MainRightItems path="/signup" title="Login As" subTitle="I Don&apos;t Have Any Account" />
        </section>
      </div>
    )
  }
}
