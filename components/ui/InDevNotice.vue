<template>
  <div
    class="in-dev-notice"
  >
    <TransitionSlideUp>
      <div
        v-if="infoIsVisible"
        key="info"
        class="info"
      >
        <h1>What currently works?</h1>
        <ul>
          <li>This site currently only works for desktop.</li>
        </ul>
      </div>
    </TransitionSlideUp>
    <div
      class="label"
      @click="toggleInfo"
    >
      <vChip
        label="In Development"
      >
        search
      </vChip>
    </div>
  </div>
</template>

<script>
import vChip from '@/components/ui/vChip'
import TransitionSlideUp from '@/components/ui/TransitionSlideUp'
export default {
  components: { vChip, TransitionSlideUp },
  data () {
    return {
      infoIsVisible: false
    }
  },
  methods: {
    toggleInfo () {
      this.infoIsVisible = !this.infoIsVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.in-dev-notice {
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
}

.label {
  cursor: pointer;
}

.info {
  display: block;
  position: absolute;
  bottom: calc(100% - 0.5rem);
  right: 0;
  padding: $min-padding;
  margin: $min-margin;
  background-color: white;
  border-radius: $border-radius;

  h1 {
    font-size: 1rem;
  }

  ul {
    padding-left: 1rem;
  }

  h1, ul {
    line-height: 150%;
  }
}
</style>
