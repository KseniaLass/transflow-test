import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [],
    error: null
  },
  getters: {
    getRoutes: (state) => state.routes,
    getError: (state) => state.error
  },
  mutations: {
    SET_ROUTES(state, data) {
      state.routes = data
    },
    SET_ERROR(state, data) {
      state.error = data
    }
  },
  actions: {
    async getRoutesData({ commit }) {
      try {
        const data = await axios.get(
          'https://220.transflow.ru/api/public/v1/routes_data?key=012345678abc'
        )
        commit('SET_ROUTES', data)
      } catch (e) {
        commit('SET_ERROR', e)
        console.error(e)
      }
    }
  },
  modules: {}
})
