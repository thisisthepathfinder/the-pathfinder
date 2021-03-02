<template>
  <button
    v-on="inputListeners"
  >
    <span class="material-icons icon"><slot /></span>
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
  background-color: white;
  border: none;
  padding: 0;
  font-weight: 900;
  border-radius: $border-radius;
  color: $dark;
  text-transform: uppercase;
  transition: transform $fast, box-shadow $fast;

  span {
    vertical-align: middle;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline:none;
  }
}
</style>
