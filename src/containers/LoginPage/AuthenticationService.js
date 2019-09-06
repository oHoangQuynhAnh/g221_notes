import axios from 'axios'

const BASE_URL = "localhost:3000/api/v1"

const login = (username, password) => {
  axios.post("base_url/auth/login",{
    username: username,
    password: password
  }).then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error)
  })
}

export default {
  BASE_URL,
  login
}
