import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import project from './project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    count: 0,
    adminleftnavnum: '1'
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
    home,
    project
  }
})
