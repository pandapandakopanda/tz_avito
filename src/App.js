import React from 'react'
import ST from './index.scss'

import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Header from './components/Header'


class App extends React.Component {
  render() {
    return (
      <div className={ST.wrapper}>
        <Header />
        <MainPage />
        <Footer />
      </div>
    )
  }
}


export default App
