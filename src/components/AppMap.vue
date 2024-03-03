<template>
  <l-map
    style="height: 100vh"
    :center="center"
    :zoom="zoom"
  >
    <l-tile-layer :url="url">></l-tile-layer>
    <l-polyline
      v-for="route in routes"
      :key="route.ID"
      :lat-lngs="formatPoints(route)"
    />
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
import { icon } from 'leaflet'

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
    }
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 3,
    center: [47.41322, -1.219482],
    bounds: null
  }),
  methods: {
    formatPoints(route) {
      if (!route.Points) return []
      return route.Points.map((point) => [point.Lat, point.Lon])
    },
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
    }
  }
}
</script>

<style scoped lang="scss"></style>
