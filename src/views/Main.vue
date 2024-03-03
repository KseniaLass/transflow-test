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
      ></ag-grid-vue>
      <ag-grid-vue
        v-show="activeTab === 1"
        class="main__grid ag-theme-quartz"
        :columnDefs="stopsColumn"
        :rowData="getStops"
      ></ag-grid-vue>
    </div>
    <div class="col-right">
      <app-map
        :routes="getRoutes"
        :stops="getStops"
        :state="activeTab === 0 ? 'routes' : 'stops'"
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
    routesColumn: [
      { headerName: 'Название маршрута', field: 'Name' },
      {
        headerName: 'Кол-во остановок',
        field: 'Stops',
        valueFormatter: (params) => params.value.length
      }
    ],
    stopsColumn: [
      { headerName: 'Название остановки', field: 'Name' },
      {
        headerName: 'Кол-во маршрутов',
        field: 'routes',
        valueFormatter: (params) => params.value.length
      },
      {
        headerName: 'Направление',
        field: 'Forward',
        valueFormatter: (params) => (params.value ? 'Прямое' : 'Обратное')
      }
    ]
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
  &__tabs {
    height: 50px;
  }
  &__grid {
    height: calc(100vh - 50px);
  }
}
</style>
