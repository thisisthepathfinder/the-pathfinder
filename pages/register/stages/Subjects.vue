<template>
  <div class="subjects">
    <vTitle>{{ $t('register.subjects.whatSubjectsDoYouLike') }}</vTitle>
    <div
      v-if="selectedSubjects.length > 0"
      class="selected-subjects"
    >
      <GridChip>
        <vChip
          v-for="subject in selectedSubjects"
          :key="subject.name"
          :label="subject.name"
          :selected="subject.selected"
          @click="toggleSubjectSelection(subject)"
        >
          remove
        </vChip>
      </GridChip>
    </div>
    <div class="available-subjects">
      <GridChip>
        <vChip
          v-for="subject in filteredSubjects"
          :key="subject.name"
          :label="subject.name"
          :selected="subject.selected"
          @click="toggleSubjectSelection(subject)"
        >
          add
        </vChip>
      </GridChip>
    </div>
  </div>
</template>

<script>
import GridChip from '@/components/layout/GridChip'
import vTitle from '@/components/ui/vTitle'
import vChip from '@/components/ui/vChip'
import { getSubjects } from '@/assets/js/api/register'
export default {
  components: { GridChip, vTitle, vChip },
  data () {
    return {
      subjects: []
    }
  },
  computed: {
    filteredSubjects () {
      return this.subjects.filter(s => !s.selected)
    },
    selectedSubjects () {
      return this.subjects.filter(s => s.selected)
    }
  },
  created () {
    const fetchedSubjects = getSubjects()
    this.subjects = fetchedSubjects.map((s) => {
      return { ...s, selected: false }
    })
  },
  methods: {
    toggleSubjectSelection (subject) {
      subject.selected = !subject.selected
      console.log(subject)
    }
  }
}
</script>

<style lang="scss" scoped>
.selected-subjects {
  margin: $min-margin 0;
  padding: $min-padding 0;
  border-bottom: 2px dashed white;
}
</style>
