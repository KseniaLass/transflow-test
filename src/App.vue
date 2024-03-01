<template>
  <div id="app">
    <router-view />
    <Loader v-show="showLoader" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',
  components: { Loader },
  data: () => ({
    loader: false
  }),
  created() {
    this.getRoutesData()
  },
  computed: {
    ...mapGetters(['getRoutes', 'getError']),
    showLoader() {
      return this.getRoutes.length && !this.getError
    }
  },
  methods: {
    ...mapActions(['getRoutesData'])
  }
}
</script>

<style>
#app {
}
</style>
