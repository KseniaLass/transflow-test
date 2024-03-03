<template>
  <l-map
    style="height: 100vh"
    :center="center"
    :zoom="zoom"
  >
    <l-tile-layer :url="url">></l-tile-layer>
    <l-feature-group
      v-for="route in routes"
      :key="route.ID"
    >
      <l-polyline :lat-lngs="formatPoints(route)" />
      <l-marker
        v-for="stop in route.Stops"
        :key="route.ID + stop.ID"
        :lat-lng="[stop.Lat, stop.Lon]"
        :icon="markerIcon(stop)"
      />
    </l-feature-group>
  </l-map>
</template>

<script>
import { LFeatureGroup, LMap, LMarker, LPolyline, LTileLayer } from 'vue2-leaflet'
import { icon } from "leaflet"

export default {
  name: 'AppMap',
  components: { LMap, LTileLayer, LPolyline, LMarker, LFeatureGroup },
  props: {
    routes: {
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
      return route.Points.map((point) => [point.Lat, point.Lon])
    },
    markerIcon(stop) {
      if (stop.forward) {
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
