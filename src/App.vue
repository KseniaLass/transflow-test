<template>
  <div id="app">
    <router-view />
    <Loader v-show="getLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',
  components: { Loader },
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
