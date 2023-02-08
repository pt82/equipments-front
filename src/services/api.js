import axios from 'axios'
// import { Cookies } from 'quasar'

// window.Pusher = require('pusher-js')

let server = 'http://app.test'
// let server = window.location.hostname === 'web.20x80.one' ? 'https://backend.20x80.one' : 'https://bis.zdato.ru'
// const port = window.location.hostname === 'web.20x80.one' ? 6001 : 3030
// // if (!!process.env.VUE_APP_LOCAL_BACKEND && process.env.NODE_ENV === 'development') {
// if (process.env.VUE_APP_LOCAL_BACKEND) {
//   // server = 'http://bis-back.zdato.ru' // local dev server
//   server = 'http://petr.bis.zdato.ru' // local dev server
// }

export const apiClient = axios.create({
  baseURL: server + '/api',
  // withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})
// export const echo = new Echo({
//   authEndpoint: server + '/api/broadcasting/auth',
//   auth: {
//     headers: {
//       Authorization: 'Bearer ' + Cookies.get('jwt')
//     }
//   },
//   broadcaster: 'pusher',
//   key: 'qwerty',
//   wsHost: server.split('://')[1],
//   wsPort: port,
//   wssPort: port,
//   forceTLS: server.split('://')[0] === 'https',
//   disableStats: true
// })

// apiClient.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   config.headers.front = 'web.'
//   config.headers.frontname = process.env.VUE_APP_FRONT_ENV || ''
//   return config
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error)
// })

// export const echo = new Echo({
//   authEndpoint: server + '/api/broadcasting/auth',
//   auth: {
//     headers: {
//       Authorization: 'Bearer ' + Cookies.get('jwt')
//     }
//   }
// broadcaster: 'pusher',
// key: 'qwerty',
// wsHost: server.split('://')[1],
// forceTLS: server.split('://')[0] === 'https',
// disableStats: true
