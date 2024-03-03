<template>
  <div id="app">
    <app-loader v-if="getLoading" />
    <router-view v-else />
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
    this.getRoutesData()
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
