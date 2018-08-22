import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'

import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  token: window.localStorage.getItem('token'),
  userInfo: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  loginStatus: false
})
