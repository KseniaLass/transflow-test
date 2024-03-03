<template>
  <div class="main container">
    <div class="col-left">
      <AppTabs
        :active="activeTab"
        :tabs="tabs"
        @click="changeActiveTab($event)"
      />
      <ag-grid-vue
        v-show="activeTab === 0"
        class="main__grid ag-theme-quartz"
        :columnDefs="routesColumn"
        :rowData="getRoutes"
        :headerHeight="0"
      ></ag-grid-vue>
      <ag-grid-vue
        v-show="activeTab === 1"
        class="main__grid ag-theme-quartz"
        :columnDefs="stopsColumn"
        :rowData="getStops"
        :headerHeight="0"
      ></ag-grid-vue>
    </div>
    <div class="col-right">
      <app-map :routes="getRoutes" />
    </div>
  </div>
</template>

<script>
import AppTabs from '@/components/AppTabs.vue'
import AppMap from '@/components/AppMap.vue'
import { mapGetters } from 'vuex'
import { AgGridVue } from 'ag-grid-vue'

export default {
  name: 'Main',
  components: { AppTabs, AppMap, AgGridVue },
  data: () => ({
    tabs: ['Маршруты', 'Остановки'],
    activeTab: 0,
    routesColumn: [{ headerName: 'Название маршрута', field: 'Name', resizable: false, flex: 1 }],
    stopsColumn: [{ headerName: 'Название остановки', field: 'Name', resizable: false, flex: 1 }]
  }),
  computed: {
    ...mapGetters(['getRoutes', 'getStops'])
  },
  methods: {
    changeActiveTab(i) {
      this.activeTab = i
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  &__grid {
    height: 100%;
  }
}
</style>
