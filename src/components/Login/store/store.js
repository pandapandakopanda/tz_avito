import axios from 'axios'
import { action, observable, computed } from 'mobx'
import {getUsers, sendToken} from './transport'

class Store  {
  @observable login = ''
  @observable password = ''
  @observable name = ''
  @observable email = ''
  @observable isRegistrationOpen = true
  @observable isActive = false

  currentUser = {}

  @computed get userData () {
    const {login,password,name,email} = this
    return {login,password,name,email}
  }

  @action setLogin = (login) => {
    this.login = login
  }

  @action setPassword = (password) => {
    this.password = password
  }

  @action setName = (name) => {
    this.name = name
  }

  @action setEmail = (email) => {
    this.email = email
  }

  @action toggleRegistrationForm() {
    this.isRegistrationOpen = !this.isRegistrationOpen
    this.clear()
  }

  @action createUser = () => {
    const user = this.userData
    user.isActive = this.isActive
  }

  @action clear = () => {
    this.login = ''
    this.password = ''
    this.email = ''
    this.name = ''
  }

  token = () => {
    const token = sendToken('123')
    console.log('token: ', token);

  }

  init = () =>{
    console.log('store is created and fine');
  }
}

const authStore = new Store()
export default authStore