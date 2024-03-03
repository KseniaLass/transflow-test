<template>
  <div class="main container">
    <div class="col-left">
      <AppTabs
        class="main__tabs"
        :active="activeTab"
        :tabs="tabs"
        @click="changeActiveTab($event)"
      />
      <ag-grid-vue
        v-show="activeTab === 0"
        class="main__grid ag-theme-quartz"
        :columnDefs="routesColumn"
        :rowData="getRoutes"
        @rowClicked="routeClick"
        ref="routesGrid"
      ></ag-grid-vue>
      <ag-grid-vue
        v-show="activeTab === 1"
        class="main__grid ag-theme-quartz"
        :columnDefs="stopsColumn"
        :rowData="getStops"
        @rowClicked="clickStop"
        ref="stopsGrid"
      ></ag-grid-vue>
    </div>
    <div class="col-right">
      <app-map
        :routes="routes"
        :stops="stops"
        :state="activeTab === 0 ? 'routes' : 'stops'"
        :selected-route="selectedRoute"
        :selected-stop="selectedStop"
        @clickOnMarker="clickOnMarker($event)"
      />
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
  components: { AppTabs, AgGridVue, AppMap },
  data: () => ({
    tabs: ['Маршруты', 'Остановки'],
    activeTab: 0,
    selectedRoute: null,
    selectedStop: null,
    routesColumn: [
      { headerName: 'Название', field: 'Name' },
      {
        headerName: 'Кол-во остановок',
        field: 'Stops',
        valueFormatter: (params) => params.value.length
      }
    ],
    stopsColumn: [
      { headerName: 'Название', field: 'Name', flex: 1 },
      {
        headerName: 'Кол-во маршрутов',
        field: 'routes',
        valueFormatter: (params) => params.value.length,
        flex: 1
      },
      {
        headerName: 'Направление',
        field: 'Forward',
        valueFormatter: (params) => (params.value ? 'Прямое' : 'Обратное'),
        flex: 1
      }
    ]
  }),
  computed: {
    ...mapGetters(['getRoutes', 'getStops']),
    routes() {
      if (this.activeTab === 0 && !this.selectedStop) {
        return this.getRoutes
      }
      return []
    },
    stops() {
      if (this.selectedStop) {
        return [this.selectedStop]
      }
      return this.getStops
    }
  },
  methods: {
    changeActiveTab(i) {
      this.activeTab = i
    },
    clickStop(params) {
      params.node.setSelected(true)
      this.selectedRoute = null
      this.selectedStop = params.data
    },
    routeClick(params) {
      this.selectedStop = null
      this.selectedRoute = params.data
    },
    clickOnMarker(e) {
      const api = this.$refs.stopsGrid.api
      const idx = this.getStops.findIndex((stop) => stop.ID === e.ID)
      const node = api.getRowNode(idx)
      node.setSelected(true)
      this.activeTab = 1
      this.selectedStop = e
      this.$nextTick(() => {
        api.ensureNodeVisible(node, 'middle')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  &__tabs {
    height: 50px;
  }
  &__grid {
    height: calc(100vh - 50px);
    width: 100%;
    display: flex;
  }
}
</style>
