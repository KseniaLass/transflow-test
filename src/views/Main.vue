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
        @rowClicked="clickRoute"
        @rowDoubleClicked="goToInfo"
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
        @clickOnPolyline="clickOnPolyline($event)"
        @showAllStops="showAllStops"
        @showAllRoutes="showAllRoutes"
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
      { headerName: 'Название', field: 'Name', flex: 1 },
      {
        headerName: 'Кол-во остановок',
        field: 'Stops',
        valueFormatter: (params) => params.value.length,
        flex: 1
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
        cellDataType: 'text',
        flex: 1
      }
    ]
  }),
  computed: {
    ...mapGetters(['getRoutes', 'getStops']),
    routes() {
      if (this.selectedRoute) {
        return [this.selectedRoute]
      } else if (this.activeTab === 0 && !this.selectedStop) {
        return this.getRoutes
      }
      return []
    },
    stops() {
      if (this.selectedStop) {
        return [this.selectedStop]
      } else if (this.selectedRoute) {
        return this.selectedRoute.Stops
      }
      return this.getStops
    }
  },
  methods: {
    changeActiveTab(i) {
      this.activeTab = i
      this.selectedRoute = null
      this.selectedStop = null
    },
    clickStop(params) {
      if (params.node.selected) {
        params.node.setSelected(false)
        this.selectedStop = null
      } else {
        params.node.setSelected(true)
        this.selectedRoute = null
        this.selectedStop = params.data
      }
    },
    clickRoute(params) {
      if (params.node.selected) {
        params.node.setSelected(false)
        this.selectedRoute = null
      } else {
        params.node.setSelected(true)
        this.selectedStop = null
        this.selectedRoute = params.data
      }
    },
    clickOnMarker(e) {
      const api = this.$refs.stopsGrid.api
      this.setSelectNode(api, this.getStops, e, 1)
      this.selectedStop = e
    },
    clickOnPolyline(e) {
      const api = this.$refs.routesGrid.api
      this.setSelectNode(api, this.getRoutes, e, 0)
      this.selectedRoute = e
    },
    setSelectNode(api, source, el, tab) {
      const idx = source.findIndex((val) => val.ID === el.ID)
      const node = api.getRowNode(idx)
      node.setSelected(true)
      this.activeTab = tab
      this.$nextTick(() => {
        api.ensureNodeVisible(node, 'middle')
      })
    },
    goToInfo(e) {
      this.$router.push({ path: `/route/${e.data.ID}` })
    },
    showAllStops() {
      this.selectedStop = null
      this.$refs.stopsGrid.api.deselectAll()
    },
    showAllRoutes() {
      this.selectedRoute = null
      this.$refs.routesGrid.api.deselectAll()
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
  }
}
</style>
