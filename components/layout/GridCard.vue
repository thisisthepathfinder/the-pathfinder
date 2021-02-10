<template>
  <div class="grid-card">
    <div
      v-for="card in cardArray"
      :key="card.Occupation"
      class="per-card"
    >
      <GameCard
        :card-data="card"
        :scale="1"
      />
      <!-- I CAN ADD AN EXCLUSIVE EVENT HERE TO RETURN THE CARD TO THE HAND. -->
    </div>
  </div>
</template>

<script>
import GameCard from '@/components/ui/GameCard'
export default {
  components: { GameCard },
  props: {
    cardArray: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: rgba(255,255,255,0.25);
  padding: $min-padding;
}
</style>
