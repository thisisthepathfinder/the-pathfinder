<template>
  <div :class="['title', { 'centered': centered }]">
    <h1>
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    centered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  &.centered {
    text-align: center;
  }
  h1 {
    color: $dark;
    text-shadow: 2px 2px $primary;
    font-size: 2.5rem;
  }
}
</style>
