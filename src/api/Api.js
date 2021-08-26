import axios from 'axios'

const Api = axios.create({
    baseURL: '/users.json'
})

export default Api