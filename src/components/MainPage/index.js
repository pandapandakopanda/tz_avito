import React from 'react'
import ST from './index.scss'

import Login from '../Login'

class MainPage extends React.Component {
  render(){
    const { store } = this.props
    return(
      <div className={ST.wrapper}>
        <Login />
      </div>
    )
  }
}

export default MainPage