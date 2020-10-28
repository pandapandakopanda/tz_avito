// @ts-nocheck
import {inject, observer} from 'mobx-react'
import React from 'react'
import ST from './index.scss'


@inject('store')
@observer
class Login extends React.Component {
  authStore = this.props.store.authStore

  componentDidMount(){
    this.authStore.init()
  }

  handleChangeLogin = (ev)=>{
    const { value } = ev.target
    this.authStore.setLogin(value)
  }

  handleChangePassword = (ev) => {
    const { value } = ev.target
    this.authStore.setPassword(value)
  }

  handleChangeName = (ev) => {
    const { value } = ev.target
    this.authStore.setName(value)
  }

  handleChangeEmail = (ev) => {
    const { value } = ev.target
    this.authStore.setEmail(value)
  }

  singButtonOnCLick = () => {
    this.authStore.toggleRegistrationForm()
  }

  handleSubmitButton = () => {
    (this.authStore.isRegistrationOpen) 
    ? this.authStore.createUser()
    : this.authStore.token()
  }

  registrationForm = (regStatus) =>{
    return (
      (regStatus)
      ? (
        <div>
          <div className={ST.name}>
            <p>Name: </p> 
            <input type='text' onChange={this.handleChangeName} value={this.authStore.name}/>
          </div>
          <div className={ST.email}>
            <p>Email: </p> 
            <input type='email' onChange={this.handleChangeEmail} value={this.authStore.email}/>
          </div>
        </div>
      )
      :null
    )
  }
  
  
  render(){    
    const { isRegistrationOpen } = this.authStore
    const signTitle = (isRegistrationOpen)?'Back':'Registration'
    const loginTitle = (isRegistrationOpen)?'Submit':'Login'
    const registrationForm = this.registrationForm(isRegistrationOpen)
    

    const { login, password } = this.props.store.authStore

    return(
      <div className={ST.wrapper}>
        <div className={ST.loginForm}>

          <div className={ST.login}>
            <p>Login: </p>
            <input type='text' onChange={this.handleChangeLogin} value={login}/>
          </div>

          <div className={ST.password}>
            <p>Password: </p> 
            <input type='password' onChange={this.handleChangePassword} value={password}/>
          </div>

            {registrationForm}
          <div className={ST.button} onClick={this.handleSubmitButton}>{loginTitle}</div>
          <div className={ST.button} onClick={this.singButtonOnCLick}>{signTitle}</div>
        </div>
      </div>
    )
  }
}

export default Login