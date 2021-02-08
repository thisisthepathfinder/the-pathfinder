<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="title">
        <h1><slot name="title" /></h1>
      </div>
      <div class="demo">
        <slot name="demo" />
      </div>
      <div class="steps">
        <slot name="steps" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {

}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

h1 {
  font-family: 'Squada One', sans-serif;
}
</style>
