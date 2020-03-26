import axios from 'axios'

const token = process.env.VUE_APP_SLACK_TOKEN

let instance = axios.create({
    baseURL: 'https://slack.com/api/',
    responseType: 'json'
})

instance.defaults.params = {}
instance.defaults.params['token'] = token
instance.interceptors.request.use((config) => {    
    config.url +=`&token=${token}`
    return config
}, (error) => {
    return Promise.reject(error)
})

export default instance