<template>
  <div class="desktop">
    <div class="discard-pile">
      <GameCardLabel
        v-if="discarded.length > 0"
        label="Discard Pile"
        :count="discarded.length"
        :click-function="viewDiscarded"
      >
        <template #action>
          View Discarded ({{ discarded.length }})
        </template>
      </GameCardLabel>
    </div>
    <div
      v-if="message"
      class="message"
    >
      <h1>{{ message }}</h1>
    </div>
    <div class="board-wrapper">
      <div class="board">
        <GameCard
          v-for="card in onBoard"
          :key="card.Occupation"
          :card-data="card"
          :scale="1.25"
          @open-modal="openModal"
        >
          <template #bottom>
            <div class="selection">
              <div class="save">
                <vButton @click="saveCard(card)">
                  Save
                </vButton>
              </div>
              <div class="discard">
                <vButton @click="discardCard(card)">
                  Discard
                </vButton>
              </div>
            </div>
          </template>
        </GameCard>
      </div>
    </div>
    <div class="hand">
      <div
        v-for="card in inHandShown"
        :key="card.Occupation"
        class="per-card"
      >
        <GameCard
          :card-data="card"
          :scale="0.75"
        />
      </div>
      <div class="per-card">
        <GameCardLabel
          v-if="inHand.length > maxHandSize"
          key="more-cards"
          :scale="0.75"
          label="More Cards"
          :button-vert-margin="1"
          :count="inHand.length - maxHandSize"
          :click-function="viewInHand"
        >
          <template
            #action
          >
            View Saved ({{ inHand.length - maxHandSize }})
          </template>
        </GameCardLabel>
      </div>
    </div>
    <div class="deck">
      <GameCardLabel
        label="Deck"
        :count="inDeck.length"
      />
    </div>
  </div>
</template>

<script>
import vButton from '@/components/ui/vButton'
import GameCard from '@/components/ui/GameCard'
import GameCardLabel from '@/components/ui/GameCardLabel'
export default {
  components: { vButton, GameCard, GameCardLabel },
  props: {
    onBoard: {
      type: Array,
      required: true
    },
    inHand: {
      type: Array,
      required: true
    },
    inHandShown: {
      type: Array,
      required: true
    },
    discarded: {
      type: Array,
      required: true
    },
    inDeck: {
      type: Array,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    maxHandSize: {
      type: Number,
      required: true
    },
    occupations: {
      type: Array,
      required: true
    }
  },
  methods: {
    openModal (modalData) {
      this.$emit('open-modal', modalData)
    },
    saveCard (card) {
      this.$emit('save-card', card)
    },
    discardCard (card) {
      this.$emit('discard-card', card)
    },
    viewDiscarded () {
      this.$emit('open-modal', {
        type: 'discarded',
        data: {
          cardArray: this.discarded
        }
      })
    },
    viewInHand () {
      this.$emit('open-modal', {
        type: 'inHand',
        data: {
          cardArray: this.inHand
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.selection {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.save, .discard {
  flex-grow: 1;
  flex-basis: 50%;
  padding: 0 0.25rem;

  button {
    width: 100%;
  }
}

.discard-pile {
  grid-area: discard;
}

.board-wrapper {
  grid-area: board;
}

.message {
  grid-area: message;
}

.deck {
  grid-area: deck;
}

.hand {
  grid-area: hand;
}

.discard-pile, .deck {
  display: flex;
  justify-content: center;
  align-items: center;
}

.board {
  width: auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}

.hand {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.message {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $min-padding;
  font-size: 0.5rem;
  background-color: $primary;
}

.desktop {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 1fr 1fr;
  grid-template-areas:
    "message message message message message"
    "deck board board board discard"
    "deck board board board discard"
    "hand hand hand hand hand";
}
</style>
