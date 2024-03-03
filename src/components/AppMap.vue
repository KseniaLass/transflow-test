<template>
  <l-map
    style="height: 100vh"
    :center="center"
    :zoom="zoom"
    :bounds="bounds"
  >
    <l-tile-layer :url="url">></l-tile-layer>
    <l-polyline
      :lat-lngs="route.Points"
      @click="clickOnPolyline(route)"
      v-for="route in routes"
      :key="route.ID"
    >
      <l-tooltip :content="route.Name"></l-tooltip>
    </l-polyline>
    <l-marker
      v-for="stop in stops"
      :key="stop.ID + ' ' + stop.Forward"
      :lat-lng="[stop.Lat, stop.Lon]"
      :icon="markerIcon(stop)"
      @click="clickOnMarker(stop)"
    >
      <l-tooltip :content="stop.Name"></l-tooltip>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LMarker, LPolyline, LTileLayer, LTooltip } from 'vue2-leaflet'
import { icon, latLngBounds } from 'leaflet'

export default {
  name: 'AppMap',
  components: { LMap, LTileLayer, LPolyline, LMarker, LTooltip },
  props: {
    routes: {
      type: Array,
      required: false,
      default: () => []
    },
    stops: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  mounted() {
    this.fitToAllRouts()
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 1,
    center: [47.41322, -1.219482],
    bounds: null
  }),
  watch: {
    stops: function (val) {
      if (val.length === 1) {
        this.fitToStop(val[0])
      }
    },
    routes: function (val) {
      if (val.length === 1) {
        this.fitToRoute(val[0])
      }
    }
  },
  methods: {
    markerIcon(stop) {
      if (stop.Forward) {
        return icon({
          iconUrl: '/assets/images/markerForward.svg'
        })
      } else {
        return icon({
          iconUrl: '/assets/images/markerBack.svg'
        })
      }
    },
    fitToAllRouts() {
      const allPoints = []
      this.routes.forEach((route) => {
        allPoints.push(...route.Points)
      })
      this.bounds = latLngBounds(allPoints)
    },
    fitToStop(stop) {
      this.center = [stop.Lat, stop.Lon]
    },
    fitToRoute(route) {
      this.bounds = latLngBounds(route.Points)
    },
    clickOnMarker(e) {
      this.$emit('clickOnMarker', e)
    },
    clickOnPolyline(e) {
      this.$emit('clickOnPolyline', e)
    }
  }
}
</script>

<style scoped lang="scss"></style>
