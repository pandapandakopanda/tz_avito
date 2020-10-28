import axios from 'axios'
import {API} from './API'
import urls from '../../../core/urls'

export const getUsers = () => API.get(urls.users.users()).then(resp => resp)  

export const getUserById = (id) => API.get(urls.users.user(id)).then(resp=>resp)

export const sendToken = (token) => API.post(urls.token,{
  body:token
}).then(resp=>{
  console.log(resp);
})