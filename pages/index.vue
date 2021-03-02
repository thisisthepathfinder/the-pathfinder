<template>
  <div class="index">
    <div class="spacer" />
    <ThePathfinderTitleSequence @title-sequence-completed="toggleShowButton" />
    <div class="start">
      <TransitionSlideUp class="button-wrapper">
        <div
          v-if="showButton"
          key="start-button"
        >
          <vButton
            @click="goToWelcome"
          >
            Start The Pathfinder
          </vButton>
        </div>
      </TransitionSlideUp>
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
import ThePathfinderTitleSequence from '@/components/animated/ThePathfinderTitleSequence'
import vButton from '@/components/ui/vButton'
import TransitionSlideUp from '@/components/ui/TransitionSlideUp'
export default {
  components: { ThePathfinderTitleSequence, vButton, TransitionSlideUp },
  data () {
    return {
      showButton: false
    }
  },
  methods: {
    goToWelcome () {
      this.$router.push({ name: 'welcome' })
    },
    toggleShowButton () {
      console.log('got emit')
      this.showButton = !this.showButton
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100vh;
  width: 100%;
  background-color: $dark;
  overflow: hidden;
  display: grid;
  grid-template-rows: 5rem 1fr 0.25fr 5rem;
}
.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>
