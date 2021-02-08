<template>
  <div class="down-to-five">
    <Game />
  </div>
</template>

<script>
import Game from './components/Game'
export default {
  components: {
    Game
  },
  layout: 'play'
}
</script>

<style lang="scss" scoped>
.down-to-five {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
