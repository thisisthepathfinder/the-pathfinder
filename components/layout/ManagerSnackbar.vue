<template>
  <TransitionSlideUp
    class="v-snackbar"
  >
    <div
      v-for="({ id, msg, type }, index) in getQueue"
      :key="id"
      class="per-alert-wrapper"
      :data-index="index"
    >
      <div
        :class="['per-alert', type]"
      >
        <div class="details">
          <span class="material-icons icon">{{ iconList[type] }}</span>
          <span class="msg">{{ msg }}</span>
          <span
            class="dismiss"
          ><vFlatIconButton @click="dismissNotification(id)">close</vFlatIconButton></span>
        </div>
        <div class="timer" />
      </div>
    </div>
  </TransitionSlideUp>
</template>

<script>
// Alert function should take a time delay (with default), auto-dismiss or toggled with graphical dismiss timer, with or without icon,
// color: success (green), error (red), warning (yellow), info (blue).
import vFlatIconButton from '@/components/ui/vFlatIconButton'
import TransitionSlideUp from '@/components/ui/TransitionSlideUp'
import { mapGetters } from 'vuex'
import gsap from 'gsap'
export default {
  components: { vFlatIconButton, TransitionSlideUp },
  data () {
    return {
      iconList: {
        success: 'check_circle',
        error: 'error',
        warning: 'warning',
        info: 'info'
      }
    }
  },
  computed: {
    ...mapGetters({
      getQueue: 'notification/getQueue'
    })
  },
  mounted () {
    // this.$store.dispatch('testPopulateNotifications')
  },
  methods: {
    dismissNotification (id) {
      this.$store.dispatch('notification/dismiss', id)
    },
    animEnter (el, done) {
      gsap.fromTo(el, {
        opacity: 0,
        yPercent: 25
      }, {
        opacity: 1,
        yPercent: 0,
        delay: 0.25,
        duration: 1
      })
      done()
    },
    appear () {
      // I could fire this manually maybe? After the first time
      // the list populates itself then use stagger.
    },
    animLeave (el, done) {
      gsap.to(el, {
        opacity: 0,
        yPercent: 25
      })
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
.v-snackbar {
  position: fixed;
  top: 0;
  right: 0;
  padding: $min-padding;
  display: flex;
  flex-direction: column;
}

.per-alert {
  background-color: white;
  box-shadow: 0 0 0 1px $light;
  padding: $min-padding;
  margin: $min-margin;
  position: relative;
  border-radius: $border-radius;
  overflow: hidden;

  &.with-timer {
    padding-bottom: calc(#{$min-padding} + 0.25rem);
  }
}

.details {
  display: flex;
  align-items: flex-start;
}

.msg {
  max-width: 20rem;
  flex-grow: 1;
  line-height: 150%;
  padding: 0 $min-padding;
}

.dismiss, .icon {
  flex-grow: 0;
}

.icon, .msg {
  color: white;
}

.with-timer {
  .timer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.25rem;
    background-color: rgba(255,255,255,0.5);
  }
}

.success {
  background-color: #6fcf97;
  &::v-deep button span { color: #6fcf97; }
}
.error {
  background-color: #eb5757;
  &::v-deep button span { color: #eb5757; }
}

.warning {
  background-color: #f2c94c;
  &::v-deep button span { color: #f2c94c; }
}
.info {
  background-color: #2f80ed;
  &::v-deep button span { color: #2f80ed; }
}
</style>
