<template>
  <transition-group
    tag="div"
    name="slide-up"
    :css="false"
    @enter="animEnter"
    @leave="animLeave"
  >
    <slot />
  </transition-group>
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    animEnter (el, done) {
      gsap.fromTo(el, {
        opacity: 0,
        yPercent: 25
      }, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        onComplete: done()
      })
    },
    animLeave (el, done) {
      gsap.fromTo(el, {
        opacity: 1,
        backgroundColor: 'red',
        yPercent: 0
      }, {
        opacity: 0,
        yPercent: 25,
        backgroundColor: 'green',
        duration: 1,
        onComplete: done()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
