<template>
  <div class="game-card-wrapper">
    <div
      class="game-card"
      :style="cardObj"
    >
      <div
        class="front"
        @click="toggleInfo"
      >
        <div class="basic-info">
          <h1>
            <span
              v-for="word in displayLabel"
              :key="word"
              class="fit"
            >{{ word }}</span>
          </h1>
          <p :style="descObj">
            Lorem ipsum is placeholder text commonly used in the graphic and print.
          </p>
        </div>
        <div
          :class="['additional-info', { 'is-visible': showAdditionalInfo }]"
        >
          <div class="per-info-type-wrapper">
            <span
              :style="additionalObj"
              @click="viewVideo"
            >V</span>
          </div>
          <div class="per-info-type-wrapper">
            <span
              :style="additionalObj"
              @click="viewInfo"
            >I</span>
          </div>
          <div class="per-info-type-wrapper">
            <span :style="additionalObj" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
// YT thumbnail ref: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
import fitty from 'fitty'
export default {
  props: {
    scale: {
      type: Number,
      default: 1
    },
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showAdditionalInfo: false
    }
  },
  computed: {
    cardObj () {
      const height = 18
      const width = 12

      return {
        height: `${ height * this.scale }rem`,
        width: `${ width * this.scale }rem`
      }
    },
    additionalObj () {
      const height = 2
      const width = 2

      return {
        height: `${ height * this.scale }rem`,
        width: `${ width * this.scale }rem`,
        margin: `${ 0.5 * this.scale }rem`
      }
    },
    descObj () {
      return {
        fontSize: `${ 0.8 * this.scale }rem`,
        lineHeight: '150%',
        marginTop: `${ 0.5 * this.scale }rem`
      }
    },
    labelArray () {
      return this.cardData.Occupation.split(' ')
    },
    displayLabel () {
      // Remove index identifier from the label.
      // Can be removed if the schema changes to using another way of indexing.
      return this.labelArray.filter(w => !/\(\d*\)/.test(w))
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        fitty('.fit', {
          minSize: 10,
          maxSize: 125
        })
      }, 25)
    })
  },
  methods: {
    viewVideo () {
      if (this.cardData.YouTubeID) {
        const modalData = {
          type: 'video',
          data: {
            src: this.cardData.YouTubeID
          }
        }
        this.$emit('open-modal', modalData)
      }
    },
    viewInfo () {

    },
    toggleInfo () {
      this.showAdditionalInfo = !this.showAdditionalInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.game-card-wrapper {
  position: relative;

  &:hover {
    .bottom {
      top: 100%;
      opacity: 1;
    }
  }
}

.game-card {
  position: relative;
  margin: $min-margin;
}

.front {
  transition: transform $med, opacity $med;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.25);
  background-color: #F5F5F5;
  transform: rotateY(0deg);
  padding: $min-padding;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    text-align: center;
    line-height: 0;
    margin-top: 0.5rem;
  }

  span {
    text-transform: uppercase;
    line-height: 85%;
    font-weight: 900;
  }
}

.basic-info {
  flex-grow: 1;
}

.additional-info {
  flex-grow: 0;
  display: flex;
  justify-content: space-around;
  opacity: 0;
  pointer-events: none;
  transition: opacity $med, bottom $med;
  position: absolute;
  bottom: -2.5%;
  left: 0;
  right: 0;
}

.is-visible {
  opacity: 1;
  bottom: 0;
  pointer-events: auto;
}

.per-info-type-wrapper {
  span {
    display: block;
    border-radius: 100%;
    margin: $min-margin;
    background-color: $primary;
  }

}

.bottom {
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  opacity: 0;
  transition: top $fast, opacity $fast;
}
</style>
