<template>
  <button
    v-on="inputListeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  computed: {
    inputListeners () {
      return Object.assign({}, this.$listeners)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: block;
  box-shadow: 0 0.25rem 0 0 $primary;
  background-color: white;
  border: 1px solid $light-gray;
  padding: $min-padding;
  font-weight: 900;
  border-radius: $border-radius;
  color: $dark;
  text-transform: uppercase;
  transform: translateY(-0.25rem);
  transition: transform $fast, box-shadow $fast;

  &:hover {
    transform: translateY(-0.25rem) scale(1.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 0 $primary;
  }
}
</style>
