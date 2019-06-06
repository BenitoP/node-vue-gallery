import axios from 'axios'

export default (contentType = 'application/json', accept = 'application/json') => {
  return axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Accept': accept,
      'Content-Type': contentType,
      'Authorization': `${window.localStorage.token}`
    }
  })
}
