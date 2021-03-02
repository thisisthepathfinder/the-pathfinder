<template>
  <div class="input">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
    >
  </div>
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
  width: 100%;
  padding: $min-padding;
}

.input {
  padding: $min-padding;
}
</style>
