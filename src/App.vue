<template>
  <div id="app">
    <router-view />
    <app-loader v-show="getLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import AppLoader from '@/components/AppLoader.vue'

export default {
  name: 'App',
  components: { AppLoader },
  data: () => ({
    loader: false
  }),
  created() {
    // this.getRoutesData()
    this.SET_STOPS(this.getRoutes)
  },
  computed: {
    ...mapGetters(['getRoutes', 'getError', 'getLoading'])
  },
  methods: {
    ...mapActions(['getRoutesData']),
    ...mapMutations(['SET_STOPS'])
  }
}
</script>

<style>
#app {
}
</style>
