<template>
  <div class="input-label">
    <span class="label">{{ label }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  font-size: 0.75rem;
  color: $dark;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  padding: $min-padding;
}
</style>
