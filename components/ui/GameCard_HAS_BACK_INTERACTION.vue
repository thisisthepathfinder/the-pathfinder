<template>
  <div class="game-card-wrapper">
    <div
      class="game-card"
      :style="cardObj"
    >
      <div class="front">
        <h1>
          <span
            v-for="word in labelArray"
            :key="word"
            class="fit"
          >{{ word }}</span>
        </h1>
      </div>
      <div class="back">
        <img
          :src="`https://img.youtube.com/vi/${ cardData.YouTubeID }/mqdefault.jpg`"
          :alt="cardData.Occupation"
          @click="viewVideo(cardData.YouTubeID)"
        >
      </div>
    </div>
    <div class="bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
// YT thumbnail ref: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
// https://www.npmjs.com/package/vue-resize-text
// Could consider this library.
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
  computed: {
    cardObj () {
      const height = 18
      const width = 12

      return {
        height: `${ height * this.scale }rem`,
        width: `${ width * this.scale }rem`
      }
    },
    labelArray () {
      return this.cardData.Occupation.split(' ')
    }
  },
  mounted () {
    this.$nextTick(() => {
      fitty('.fit', {
        minSize: 10,
        maxSize: 150
      })
    })
  },
  methods: {
    viewVideo (youtubeID) {
      console.log('CLICKED IN CARD.')
      this.$emit('view-video', youtubeID)
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

  &:hover {
    .front {
      transform: rotateY(180deg);
      // opacity: 0;
    }

    .back {
      transform: rotateY(0deg);
      // opacity: 1;
    }

  }
}

.front, .back {
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
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.25)
}

.front {
  background-color: #F5F5F5;
  transform: rotateY(0deg);
  padding: $min-padding;

  h1 {
    text-align: center;
  }

  span {
    text-transform: uppercase;
    line-height: 85%;
    font-weight: 900;
  }
}

.back {
  background-color: #999;
  transform: rotateY(180deg);

  img {
    max-width: 100%;
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
