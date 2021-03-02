<template>
  <button
    :class="{ 'is-reversed' : reversed }"
    v-on="inputListeners"
  >
    <span
      v-if="icon"
      class="material-icons icon"
    >{{ icon }}</span>
    <span class="label"><slot /></span>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputListeners () {
      return Object.assign({}, this.$listeners)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 0.25rem 0 -1px $primary, 0 0.25rem 0 0 rgba(0,0,0,0.5), 0 0.25rem 0.25rem 0 rgba(0,0,0,0.25);
  margin: 1rem 0;
  background-color: white;
  border: 1px solid $light-gray;
  padding: $min-padding;
  font-weight: 900;
  border-radius: $border-radius;
  color: $dark;
  text-transform: uppercase;
  outline: none;
  transform: translateY(-0.25rem);
  transition: transform $fast, box-shadow $fast;

  &.is-reversed {
    flex-direction: row-reverse;
  }

  &:hover {
    transform: translateY(-0.25rem);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 0 $primary, 0 0 0 0 rgba(0,0,0,75), 0 0 0.05rem 0 rgba(0,0,0,0.75);
  }
}

.label {
  margin: 0 $min-margin;
}

.icon {
  font-size: 1rem;
}
</style>
