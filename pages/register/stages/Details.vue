<template>
  <div
    class="details-wrapper"
  >
    <div class="details">
      <vTitle :centered="true">
        <TransitionSlideUp>
          <span
            key="label"
            class="per-line"
          >
            {{ $t('register.details.welcome') }}
          </span>
          <span
            v-if="details.name"
            key="name"
            class="per-line name-display"
          >
            {{ details.name }}
          </span>
        </TransitionSlideUp>
      </vTitle>
      <div class="input-info">
        <InputLabel
          :label="$t('register.details.whatIsYourName')"
        >
          <vInput
            v-model="details.name"
            name="Name"
            :placeholder="$t('register.details.examples.name')"
          />
        </InputLabel>
        <InputLabel
          :label="$t('register.details.howOldAreYou')"
        >
          <vInput
            v-model.number="details.age"
            name="Age"
            type="number"
            :placeholder="$t('register.details.examples.age')"
          />
        </InputLabel>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionSlideUp from '@/components/ui/TransitionSlideUp'
import InputLabel from '@/components/ui/InputLabel'
import vInput from '@/components/ui/vInput'
import vTitle from '@/components/ui/vTitle'
export default {
  components: { vInput, vTitle, TransitionSlideUp, InputLabel },
  data () {
    return {
      details: {
        name: null,
        age: null
      }
    }
  },
  watch: {
    details: {
      deep: true,
      handler: 'emitDetailsUpdates'
    }
  },
  created () {
  },
  methods: {
    emitDetailsUpdates () {
      this.$emit('details-updated', this.details)
    }
  }
}
</script>

<style lang="scss" scoped>
.details {
  max-width: 20rem;
  margin: auto;
  input {
    margin: 1rem auto;
  }
  .per-line {
    display: block;
  }
}

.welcome {
  text-align: center;
}

.name-display {
  text-transform: capitalize;
}
</style>
