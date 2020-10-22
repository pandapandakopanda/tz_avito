import axios from 'axios'

export const API =  axios.create({
  baseURL:"http://emphasoft-test-assignment.herokuapp.com",
  responseType: "json"
})