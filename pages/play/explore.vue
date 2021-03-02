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
/**
 * Elements I need
 *  - Game title
 *  - Game description
 *  - Age filter
 *  - Game icon? But larger like a thumbnail? Maybe with a live-action demo?
 *
 * References
 *  - General layout with thumbnails: https://i.redd.it/f3669mwk6fv21.png
 *  - Quite animation for certain events: https://dribbble.com/shots/6686958-Just-funny-chemistry
 *  - Idle animation: https://mir-s3-cdn-cf.behance.net/project_modules/disp/ba29ca63925381.5ac1aa5c82d8a.gif
 */
export default {
  layout: 'play'
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
