<template>
  <div
    class="game-card-wrapper"
  >
    <div
      class="game-card"
      :style="cardObj"
    >
      <div class="base">
        <div
          v-if="logo"
          class="logo"
        >
          <Logo />
        </div>
        <div
          v-if="$slots.info"
          class="info"
        >
          <vButton>
            <slot name="info" />
          </vButton>
        </div>
        <div
          v-if="$slots.action"
          class="action"
        >
          <vButton
            :style="buttonObj"
            @click="clickFunction"
          >
            <slot name="action" />
          </vButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// YT thumbnail ref: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
// https://www.npmjs.com/package/vue-resize-text
// Could consider this library.
import Logo from '@/components/animated/Logo'
import vButton from '@/components/ui/vButton'
export default {
  components: { Logo, vButton },
  props: {
    scale: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: null
    },
    logo: {
      type: Boolean,
      default: true
    },
    buttonTextSize: {
      type: Number,
      default: 0.8
    },
    buttonVertMargin: {
      type: Number,
      default: 2
    },
    clickFunction: {
      type: Function,
      default: null
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
    buttonObj () {
      return {
        fontSize: `${ this.buttonTextSize }rem`,
        margin: `${ this.buttonVertMargin }rem 0`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game-card-wrapper {
  position: relative;
}
.game-card {
  position: relative;
  margin: $min-margin;
}

.base {
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

.action {
  padding: $min-padding;
}

.base {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6rem;
  width: 6rem;
  margin: $min-margin;
}
</style>
