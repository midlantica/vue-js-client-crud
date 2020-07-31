import axios from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-type': 'application/json'
  }
})
