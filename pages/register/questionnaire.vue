<template>
  <div class="questionnaire-wrapper">
    <div class="questionnaire">
      <Details
        v-if="currentStage === 0"
        class="per-stage"
        @details-updated="handleDetails"
      />
      <Interests
        v-if="currentStage === 1"
        class="per-stage"
        @input-interests="handleInterests"
      />
      <Subjects
        v-if="currentStage === 2"
        class="per-stage"
      />
      <div class="per-stage" />
      <div class="controls">
        <vButton
          v-if="hasNext"
          class="per-control"
          icon="arrow_forward"
          @click="goNext"
        >
          {{ $t('next') }}
        </vButton>
        <vButton
          v-if="formCompleted"
          class="per-control"
          icon="done"
          @click="goFinish"
        >
          {{ $t('finish') }}
        </vButton>
        <vButton
          v-if="hasPrev"
          class="per-control"
          icon="arrow_back"
          @click="goPrev"
        >
          {{ $t('prev') }}
        </vButton>
      </div>
    </div>
  </div>
</template>

<script>
/*
**  Interest stage should accept multiple input.
**  Should be reducable by familiar terms.
**  I could also have clickable filter options, this helps with discoverability.
**  It should also reactively only serve allowed options based on age.
**  Should be extendable to be able to support filtering to respect certain beliefs and cultural needs.
**  Logic should be abstracted out to make it easier to A/B in the future.
**  Starting using Vuex for user object.
*/

import vButton from '@/components/ui/vButton'
import Details from './stages/Details'
import Interests from './stages/Interests'
import Subjects from './stages/Subjects'

export default {
  components: { Details, Interests, vButton, Subjects },
  data () {
    return {
      currentStage: 0,
      stages: 3,
      userObj: {
        details: {
          name: null,
          age: null
        },
        interests: {

        }
      }
    }
  },
  computed: {
    hasNext () {
      return this.currentStage < this.stages - 1
    },
    hasPrev () {
      return this.currentStage !== 0
    },
    formCompleted () {
      return this.currentStage === 2
    }
  },
  methods: {
    handleDetails (detailsObj) {
      this.userObj.details = { ...detailsObj }
    },
    handleInterests (interestsObj) {
      this.userObj.interests = interestsObj
    },
    goNext () {
      // Inline per-stage validation as it would be
      // easier to understand for younger children.
      if (this.currentStage === 0 && this.validateDetails()) {
        return
      }

      if (this.currentStage < this.stages - 1) {
        this.currentStage++
      }
    },
    goPrev () {
      if (this.currentStage !== 0) {
        this.currentStage--
      }
    },
    goFinish () {
      this.validateForm()
      this.$router.push({ name: 'play-explore' })
    },
    validateDetails () {
      if (!this.userObj.details.name) {
        return this.$store.dispatch('notification/notify', {
          msg: this.$t('register.details.errors.name'),
          type: 'error'
        })
      }

      if (!this.userObj.details.age) {
        return this.$store.dispatch('notification/notify', {
          msg: this.$t('register.details.errors.age'),
          type: 'error'
        })
      }

      return null
    },
    validateForm () {
      this.validateDetails()

      // Are interests compulsory to input?
    }
  }
}
</script>

<style lang="scss" scoped>
.questionnaire-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: $light;
}

.questionnaire {
  width: 100%;
}

.per-control {
  margin: $min-margin auto;
  width: 100%;
}

.controls {
  width: 15rem;
  margin: $min-margin auto;
}

.per-stage {
  max-width: $max-content-width;
  margin: auto;
}
</style>
