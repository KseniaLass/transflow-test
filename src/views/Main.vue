<template>
  <div class="main container">
    <div class="col-left">
      <AppTabs
        :active="activeTab"
        :tabs="tabs"
        @click="changeActiveTab($event)"
      />
    </div>
    <div class="col-right">right</div>
  </div>
</template>

<script>
import AppTabs from '@/components/AppTabs.vue'

export default {
  name: 'Main',
  components: { AppTabs },
  data: () => ({
    tabs: ['Маршруты', 'Остановки'],
    activeTab: 0
  }),
  methods: {
    changeActiveTab(i) {
      this.activeTab = i
    }
  }
}
</script>

<style scoped></style>
