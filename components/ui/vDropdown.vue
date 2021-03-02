<template>
  <div class="v-dropdown-wrapper">
    <Multiselect
      v-model="selected"
      :multiple="multiple"
      :options="options"
      :label="label"
      :track-by="trackBy"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  components: { Multiselect },
  props: {
    options: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'label'
    },
    trackBy: {
      type: String,
      default: 'value'
    }
  },
  data () {
    return {
      selected: null
    }
  },
  watch: {
    selected () {
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-dropdown-wrapper {
  padding: $min-padding;
}
</style>
