<template>
  <div class="route container">
    <div class="col-left">
      <p>
        <strong>Маршрут: </strong><span>{{ route.Name }}</span>
      </p>
      <p>
        <strong>Описание: </strong><span>{{ route.Description }}</span>
      </p>
      <p>
        <strong>Количество остановок: </strong><span>{{ route.Stops.length }}</span>
        <ul>
          <li>Прямых: {{getForwardStops.length}}</li>
          <li>Обратных: {{getBackStops.length}}</li>
        </ul>
      </p>
      <router-link to="/">Назад</router-link>
    </div>
    <div class="col-right">
      <h3>Остановки</h3>
      <p>
        <span
          class="route__stop color-blue"
          v-for="stop in getForwardStops"
          :key="stop.ID"
          >{{ stop.Name }}</span
        >
      </p>
      <p>
        <span
          class="route__stop color-red"
          v-for="stop in getBackStops"
          :key="stop.ID"
          >{{ stop.Name }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Route',
  data: () => ({
    route: null
  }),
  created() {
    this.route = this.getRouteById(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['getRouteById']),
    getForwardStops() {
      return this.route.Stops.filter((stop) => stop.Forward)
    },
    getBackStops() {
      return this.route.Stops.filter((stop) => !stop.Forward)
    }
  }
}
</script>

<style scoped lang="scss">
.route {
  .col-right {
    padding: 15px;
  }
  &__stop {
    display: inline-block;
    margin: 0 3px;
  }
  ul {
    margin: 5px 0 0;
    padding: 0;
    li {
      text-decoration: none;
    }
  }
}
</style>
