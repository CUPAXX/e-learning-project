
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import LandingPages from './pages/LandingPages'
import MainLogin from './pages/MainLogin'
import MainRegister from './pages/MainRegister'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPages} />
        <Route path="/login" exact component={MainLogin} />
        <Route path="/signup" exact component={MainRegister} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
