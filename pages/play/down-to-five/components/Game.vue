<template>
  <div class="game">
    <Desktop
      class="desktop"
      :on-board="onBoard"
      :in-hand="inHand"
      :in-hand-shown="inHandShown"
      :discarded="discarded"
      :in-deck="inDeck"
      :message="message"
      :max-hand-size="maxHandSize"
      :occupations="occupations"
      @save-card="saveCard"
      @discard-card="discardCard"
      @open-modal="openModal"
    />
    <Mobile class="mobile" />
    <vModal
      v-if="modal"
      :modal-data="modal"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import vModal from '@/components/ui/vModal'
import Desktop from '../display/Desktop'
import Mobile from '../display/Mobile'
export default {
  components: { vModal, Desktop, Mobile },
  data () {
    return {
      occupations: [],
      selectedVideo: null,
      maxHandSize: 5,
      message: '',
      modal: null
    }
  },
  computed: {
    onBoard () {
      return this.occupations.filter(o => !o.seen).slice(0, 3)
    },
    inHand () {
      return this.occupations.filter(o => o.seen && o.selected)
    },
    inHandShown () {
      return this.occupations.filter(o => o.seen && o.selected).slice(0, this.maxHandSize)
    },
    discarded () {
      return this.occupations.filter(o => o.seen && !o.selected)
    },
    inDeck () {
      return this.occupations.filter(o => !o.seen)
    }
  },
  watch: {
    inHand: 'handHandler'
  },
  created () {
    const dataOccupations = require('@/data/occupations')
    this.occupations = dataOccupations.map((o) => {
      return { ...o, selected: false, seen: false }
    })
  },
  methods: {
    handHandler () {
      if (this.inHand.length > this.maxHandSize) {
        this.message = 'You have more cards in your hand that is shown. Press "View More" on the last card in your hand to view them.'
      }
    },
    saveCard (card) {
      card.seen = true
      card.selected = true
    },
    discardCard (card) {
      card.seen = true
      card.selected = false
    },
    closeModal () {
      this.modal = null
    },
    openModal (modalData) {
      this.modal = modalData
    }
  }
}
</script>

<style lang="scss" scoped>
$break-point: 1250px;

.game {
  align-self: stretch;
  width: 100%;
}

.desktop {
  @media (max-width: $break-point) {
    display: none;
  }
}

.mobile {
  @media (min-width: $break-point + 1) {
    display: none;
  }
}
</style>
