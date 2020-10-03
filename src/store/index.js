import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: null,
    devices: null,
    room: null
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
    clearAllData (state) {
      state.username = null
      state.devices = null
      localStorage.removeItem('user')
      localStorage.removeItem('devices')
      localStorage.removeItem('room')
    }
  },
  actions: {
    login ({ commit }, userCredentials) {
      const url = `${process.env.VUE_APP_BACKEND_URL}/auth`
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
      var room = JSON.parse(localStorage.getItem('room'))
      const url = `${process.env.VUE_APP_BACKEND_URL}/dashboard`
      var action = ''
      if (toggleDevice.status === 'ON') {
        action = 'OFF'
      } else if (toggleDevice.status === 'OFF') {
        action = 'ON'
      }
      const data = {
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
