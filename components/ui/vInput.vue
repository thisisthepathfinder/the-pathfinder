<template>
  <input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    inputListeners () {
      const vm = this
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin: 1rem 0;
  padding: $min-padding;
}
</style>
