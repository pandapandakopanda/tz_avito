// @ts-nocheck
import React from 'react'
import ST from './index.scss'


class Login extends React.Component {

  state = {
    login:'',
    password:'',
    name:'',
    email:'',
    isUserHaveProfile: false
  }

  getLogin = (ev)=>{
    const { value } = ev.target
    this.setState({login:value})
    console.log(this.state.login);
  }

  getPassword = (ev) => {
    const { value } = ev.target
    this.setState({password:value})
    console.log(this.state.password);
  }

  getName = (ev) => {
    const { value } = ev.target
    this.setState({name:value})
    console.log(this.state.name);
  }

  getEmail = (ev) => {
    const { value } = ev.target
    this.setState({email:value})
    console.log(this.state.email);
  }

  toggleForm = ()=>{
   return (this.state.isUserHaveProfile)
    ?null
    : (
      <div>
        <div className={ST.name}>
            <p>Name: </p> 
            <input type='text' onChange={this.getName}/>
          </div>
          <div className={ST.email}>
            <p>Email: </p> 
            <input type='email' onChange={this.getEmail}/>
          </div>
      </div>
    )
  }
  render(){
    return(
      <div className={ST.wrapper}>

        <div className={ST.loginForm}>

          <div className={ST.login}>
            <p>Login: </p>
            <input type='text' onChange={this.getLogin}/>
          </div>

          <div className={ST.password}>
            <p>Password: </p> 
            <input type='password' onChange={this.getPassword}/>
          </div>

            {this.toggleForm()}
          <div className={ST.submit}>submit</div>
        </div>
      </div>
    )
  }
}

export default Login