import axios from 'axios'
import { action, observable, computed } from 'mobx'
import {getUsers} from './transport'

class Store  {

@observable login = ''

@observable password = ''

@observable name = ''

@observable email = ''

@observable isRegistrationOpen = false

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
  console.log('this toggle work');
  this.isRegistrationOpen = !this.isRegistrationOpen
}

}

const authStore = new Store()
export default authStore