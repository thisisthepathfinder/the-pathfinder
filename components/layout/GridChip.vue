<template>
  <div class="grid-chip">
    <div class="options">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.grid-chip {
  display: block;
  max-width: $max-desc-width;
  margin: auto;
}

.options {
  display: grid;
  width: 100%;
  grid-template-columns: repeat( auto-fit, minmax(20rem, 1fr) );
  max-width: $max-content-width;
  margin: auto;
}
</style>
