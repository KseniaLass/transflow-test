<script>
export default {
  name: 'AppTabs',
  props: {
    /**
     * @type String[]
     */
    tabs: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<template>
  <div class="tabs">
    <div
      v-for="(tab, i) in tabs"
      :key="i"
      class="tabs__item"
      :class="{ active: i === active }"
      @click="$emit('click', i)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as var;

.tabs {
  display: flex;
  border-bottom: 1px solid;

  &__item {
    flex: 1 1 auto;
    padding: 15px;
    cursor: pointer;
    &:hover {
      background: var.$base-bg-hover;
    }
    &.active {
      background: var.$base-color;
      color: var.$base-bg;
      cursor: default;
    }
  }
}
</style>
