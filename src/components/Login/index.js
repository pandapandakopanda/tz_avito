// @ts-nocheck
import {inject, observer} from 'mobx-react'
import React from 'react'
import ST from './index.scss'


@observer
@inject('store')
class Login extends React.Component {

  state = {
    isRegistrationOpen: this.authStore.isRegistrationOpen
  }

  authStore = this.props.store.authStore

  getLogin = (ev)=>{
    const { value } = ev.target
    this.authStore.setLogin(value)
  }

  getPassword = (ev) => {
    const { value } = ev.target
    this.authStore.setPassword(value)
  }

  getName = (ev) => {
    const { value } = ev.target
    this.authStore.setName(value)
  }

  getEmail = (ev) => {
    const { value } = ev.target
    this.authStore.setEmail(value)
  }

  singButtonOnCLick = () => {
    console.log('this button work');
    this.authStore.toggleRegistrationForm()
  }

  registrationForm = () =>{
    console.log('this form is rendering');
    return (
      (this.state.isRegistrationOpen)
      ? null
      : (
        <div>
          <div className={ST.name}>
            <p>Name: </p> 
            <input type='text' onChange={this.getName} value={this.authStore.name}/>
          </div>
          <div className={ST.email}>
            <p>Email: </p> 
            <input type='email' onChange={this.getEmail} value={this.authStore.email}/>
          </div>
        </div>
      )
    )
  }
  
  
  render(){
    
    const singInName = (this.state.isRegistrationOpen)?'Sign in':'Back'
    const login = (this.state.isRegistrationOpen)?'Login':'Registration'
    const registrationForm = this.registrationForm()
    

    return(
      <div className={ST.wrapper}>
        <div className={ST.loginForm}>

          <div className={ST.login}>
            <p>Login: </p>
            <input type='text' onChange={this.getLogin} value={this.authStore.login}/>
          </div>

          <div className={ST.password}>
            <p>Password: </p> 
            <input type='password' onChange={this.getPassword} value={this.authStore.password}/>
          </div>

            {registrationForm}
          <div className={ST.button} >{login}</div>
          <div className={ST.button} onClick={this.singButtonOnCLick}>{singInName}</div>
        </div>
      </div>
    )
  }
}

export default Login