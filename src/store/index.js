import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [],
    stops: [],
    error: null,
    loading: false
  },
  getters: {
    getRoutes: (state) => state.routes,
    getError: (state) => state.error,
    getLoading: (state) => state.loading,
    getStops: (state) => state.stops
  },
  mutations: {
    // Форматируем полученные данный для работы приложения
    SET_ROUTES(state, data) {
      const routes = []
      const stops = {}
      data.forEach((route) => {
        if (!route.Points) return
        const formatRoute = {
          ID: route.ID,
          Name: route.Name,
          Points: route.Points.map(point => [point.Lat, point.Lon]),
          Stops: []
        }
        route.Stops.forEach((stop) => {
          formatRoute.Stops.push(stop.ID)
          if (!stops[stop.ID]) {
            stops[stop.ID] = {
              ID: stop.ID,
              RouteID: stop.RouteID,
              Name: stop.Name,
              Lat: stop.Lat,
              Lon: stop.Lon,
              Forward: stop.Forward,
              routes: [route.ID]
            }
          } else {
            stops[stop.ID].routes.push(route.ID)
          }
        })
        routes.push(formatRoute)
      })
      state.routes = routes
      state.stops = Object.values(stops)

      console.log(state.routes[0])
      console.log(state.stops[0])
    },
    SET_ERROR(state, data) {
      state.error = data
    },
    SET_LOADING(state, value) {
      state.loading = value
    }
  },
  actions: {
    async getRoutesData({ commit }) {
      try {
        commit('SET_LOADING', true)
        const response = await axios.get(
          'https://220.transflow.ru/api/public/v1/routes_data?key=012345678abc'
        )
        commit('SET_ROUTES', response.data)
      } catch (e) {
        commit('SET_ERROR', e)
        console.error(e)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  modules: {}
})
