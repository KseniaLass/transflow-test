<template>
  <l-map
    style="height: 100vh"
    :center="center"
    :zoom="zoom"
    :bounds="bounds"
  >
    <l-tile-layer :url="url">></l-tile-layer>
    <template
      v-if="state === 'routes'"
    >
      <l-polyline
        v-for="route in routes"
        :key="route.ID"
        :lat-lngs="route.Points"
      />
    </template>
    <l-marker
      v-for="stop in stops"
      :key="stop.ID"
      :lat-lng="[stop.Lat, stop.Lon]"
      :icon="markerIcon(stop)"
    />
  </l-map>
</template>

<script>
import { LMap, LMarker, LPolyline, LTileLayer } from 'vue2-leaflet'
import { icon, latLngBounds } from 'leaflet'

export default {
  name: 'AppMap',
  components: { LMap, LTileLayer, LPolyline, LMarker },
  props: {
    routes: {
      type: Array,
      required: true
    },
    stops: {
      type: Array,
      required: true
    },
    /**
     * @enum routes | stops
     */
    state: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.fitAllRouts()
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 1,
    center: [47.41322, -1.219482],
    bounds: null
  }),
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
    fitAllRouts() {
      const allPoints = []
      this.routes.forEach((route) => {
        allPoints.push(...route.Points)
      })
      this.bounds = latLngBounds(allPoints)
    }
  }
}
</script>

<style scoped lang="scss"></style>
