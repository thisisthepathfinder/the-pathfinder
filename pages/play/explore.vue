<template>
  <div class="explore">
    This is where the child explores the available methods.
    <div class="explore-methods">
      <nuxt-link
        to="/play/down-to-five"
        class="per-method"
      >
        Down To Five
      </nuxt-link>
      <nuxt-link
        to="/play/down-to-five"
        class="per-method"
      >
        Down To Five
      </nuxt-link>
      <nuxt-link
        to="/play/down-to-five"
        class="per-method"
      >
        Down To Five
      </nuxt-link>
      <nuxt-link
        to="/play/down-to-five"
        class="per-method"
      >
        Down To Five
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.explore-methods {
  display: grid;
  padding: $min-padding;
  grid-template-columns: repeat( auto-fit, minmax(10rem, 1fr) );
}

.per-method {
  background-color: $primary;
  margin: $min-margin;
  min-height: 10rem;
}
</style>
