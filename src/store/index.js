import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: null,
    devices: null,
    room: null,
    users: null,
    localHost: null
  },
  mutations: {
    setUser (state, username) {
      state.username = username
    },
    setDevices (state, data) {
      state.devices = data
      localStorage.setItem('devices', JSON.stringify(state.devices))
    },
    setRoom (state, data) {
      state.room = data
      localStorage.setItem('room', JSON.stringify(state.room))
    },
    setAllUsers (state, data) {
      state.users = data
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    clearAllData (state) {
      state.username = null
      state.devices = null
      localStorage.removeItem('user')
      localStorage.removeItem('users')
      localStorage.removeItem('devices')
      localStorage.removeItem('room')
    },
    setLocalHost (state, data) {
      state.localHost = data
      localStorage.setItem('localHost', JSON.stringify(state.localHost))
    }
  },
  actions: {
    login ({ commit }, userCredentials) {
      // const url = `${process.env.VUE_APP_BACKEND_URL}/auth`
      const baseUrl = JSON.parse(localStorage.getItem('localHost')) === true ? `${process.env.VUE_APP_LOCAL_BACKEND_URL}` : `${process.env.VUE_APP_BACKEND_URL}`
      const url = `${baseUrl}/auth`
      console.log(url)
      axios
        .post(url, userCredentials)
        .then((res) => {
          if (res.status === 200) {
            const resData = res.data
            localStorage.setItem(
              'user',
              JSON.stringify(userCredentials.username)
            )
            if (userCredentials.username === 'admin') {
              commit('setAllUsers', resData.data.users)
            }
            commit('setUser', userCredentials.username)
            commit('setDevices', resData.data.devices)
            commit('setRoom', resData.data.room)
            router.push('/dashboard')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    toggle ({ commit }, toggleDevice) {
      const room = JSON.parse(localStorage.getItem('user')) === 'admin' ? toggleDevice.room : JSON.parse(localStorage.getItem('room'))
      const user = JSON.parse(localStorage.getItem('user'))
      // const url = `${process.env.VUE_APP_BACKEND_URL}/dashboard`
      const baseUrl = JSON.parse(localStorage.getItem('localHost')) === true ? `${process.env.VUE_APP_LOCAL_BACKEND_URL}` : `${process.env.VUE_APP_BACKEND_URL}`
      const url = `${baseUrl}/dashboard`
      var action = ''
      if (toggleDevice.status === 'ON') {
        action = 'OFF'
      } else if (toggleDevice.status === 'OFF') {
        action = 'ON'
      }
      const data = {
        user: user,
        room: room,
        device: toggleDevice.device,
        action: action
      }
      axios
        .post(url, data)
        .then((res) => {
          if (res.status === 200) {
            const resData = res.data
            commit('setDevices', resData.data.devices)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    localHost ({ commit }, value) {
      commit('setLocalHost', value)
    },
    clearData ({ commit }) {
      commit('clearAllData')
      router.push('/')
    },
    loadUser ({ commit }) {
      commit('setUser', JSON.parse(localStorage.getItem('user')))
    },
    loadDevices ({ commit }) {
      commit('setDevices', JSON.parse(localStorage.getItem('devices')))
      commit('setRoom', JSON.parse(localStorage.getItem('room')))
    }
  },
  getters: {
    isAuthenticated (state) {
      if (state.username) {
        return state.username
      } else {
        return null
      }
    },
    getUser (state) {
      return state.username
    },
    getDevices (state) {
      return state.devices
    }
  }
})
