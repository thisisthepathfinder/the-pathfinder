<template>
  <div
    class="interests"
  >
    <vTitle>{{ $t('register.interests.whatAreYourInterests') }}</vTitle>
    <div class="selected-interests">
      <GridChip>
        <vChip
          v-for="interest in selectedInterests"
          :key="interest.name"
          :label="interest.name"
          class="selected-chip"
          @click="toggleInterestSelection(interest)"
        >
          remove
        </vChip>
        <vChip
          v-for="placeholder in placeholderAmount"
          :key="placeholder"
          :label="$t('register.interests.searchAndSelectInterest')"
          :show-placeholder="true"
        />
      </GridChip>
    </div>
    <div
      :class="classObj"
    >
      <GridChip>
        <vChip
          v-for="interest in filteredInterests"
          :key="interest.name"
          :label="interest.name"
          @click="toggleInterestSelection(interest)"
        >
          add
        </vChip>
      </GridChip>
    </div>
    <div class="interests-controls">
      <div class="search-interests">
        <InputLabel
          :label="$t('register.interests.searchInterest')"
        >
          <vInput
            v-model="searchedInterest"
            name="Interest"
            :placeholder="$t('register.interests.searchInterestDesc')"
          />
        </InputLabel>
      </div>
      <div class="filter-interests">
        <InputLabel
          v-if="interestsData"
          :label="$t('register.interests.filterInterest')"
        >
          <vDropdown
            v-model="selectedInterestFilter"
            :options="filterOptions"
            :multiple="true"
          />
        </InputLabel>
      </div>
    </div>
  </div>
</template>

<script>
import GridChip from '@/components/layout/GridChip'
import vDropdown from '@/components/ui/vDropdown'
import vTitle from '@/components/ui/vTitle'
import vInput from '@/components/ui/vInput'
import InputLabel from '@/components/ui/InputLabel'
import rawInterests from '@/data/interests'
import Fuse from 'fuse.js'
import vChip from '@/components/ui/vChip'
// This won't exist when the data is fetched from an API.
const interestsData = rawInterests.map((i) => {
  return { ...i, selected: false }
})
export default {
  components: { GridChip, vDropdown, vInput, InputLabel, vChip, vTitle },
  data () {
    return {
      interestsData,
      selectedInterestFilter: [],
      searchedInterest: '',
      fuseObj: null
    }
  },
  computed: {
    classObj () {
      return [
        { 'has-no-input-and-filter': !this.searchedInterest && this.selectedInterestFilter.length === 0 }
      ]
    },
    selectedInterests () {
      return this.interestsData.filter(i => i.selected)
    },
    placeholderAmount () {
      const emptyLength = 3 - this.selectedInterests.length

      if (emptyLength > 0) {
        return [...Array(emptyLength).keys()].map(i => i.toString())
      } else {
        return []
      }
    },
    filterOptions () {
      if (!this.interestsData) {
        return null
      }

      const oneInterestSample = this.interestsData[0]
      const objKeys = Object.keys(oneInterestSample)
      const subjects = objKeys.reduce((acc, cur) => {
        if (cur.match(/^p-.*/g)) {
          const newObj = { value: cur, label: this.$t(`subjects.primary.${ [cur] }`) }
          acc.push(newObj)
        }

        if (cur.match(/^s-.*/g)) {
          const newObj = { value: cur, label: this.$t(`subjects.secondary.${ [cur] }`) }
          acc.push(newObj)
        }

        return acc
      }, [])

      return subjects
    },
    filteredInterests () {
      // TODO: Make 9th box a next button for pagination. Less clutter on screen.
      if (!this.searchedInterest && this.selectedInterestFilter.length === 0) {
        return this.interestsData.filter(i => !i.selected).slice(0, 9)
      }

      const filteredByText = this.fuseObj.search(this.searchedInterest)
      const toFilterTag = filteredByText.length > 0 ? filteredByText.map(({ item }) => item) : this.interestsData

      return toFilterTag.reduce((acc, cur) => {
        /*
        **  This is currently quite loose, if one is true, it returns.
        */
        if (this.selectedInterestFilter.length > 0) {
          this.selectedInterestFilter.forEach(({ value }) => {
            if (cur[value] && !cur.selected) {
              acc.push(cur)
            }
          })
        } else if (!cur.selected) {
          acc.push(cur)
        }

        return acc
      }, []).slice(0, 9)
    }
  },
  watch: {
    interestsData: {
      deep: true,
      handler: 'emitInterestsObj'
    }
  },
  created () {
    const options = {
      findAllMatches: true,
      minMatchCharLength: 1,
      threshold: 0.25,
      keys: ['name']
    }

    this.fuseObj = new Fuse(this.interestsData, options)
  },
  methods: {
    toggleInterestSelection (interest) {
      interest.selected = !interest.selected
    },
    emitInterestsObj () {
      this.$emit('input-interests', this.interestsData)
    }
  }
}
</script>

<style lang="scss" scoped>
.interests-controls {
  display: block;
}

.filter-interests,
.search-interests {
  flex-basis: 25rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.selected-interests {
  margin: $min-margin 0;
  padding: $min-padding 0;
  border-bottom: 2px dashed white;
}

.selected-chip {
  background-color: $primary;
}

.has-no-input-and-filter {
  opacity: 0.5;
}
</style>
