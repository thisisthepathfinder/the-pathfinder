<template>
  <div
    :class="classObj"
  >
    <div class="label-wrapper">
      <span class="label">{{ label }}</span>
    </div>
    <div class="icon">
      <vFlatIconButton @click="clicked">
        <slot />
      </vFlatIconButton>
    </div>
  </div>
</template>

<script>
import vFlatIconButton from '@/components/ui/vFlatIconButton'
export default {
  components: { vFlatIconButton },
  props: {
    label: {
      type: String,
      default: null
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    selectedBgColorClass: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    classObj () {
      const classList = ['v-chip']
      if (this.showPlaceholder) {
        classList.push('with-placeholder')
      }
      if (this.selected) {
        classList.push(this.selectedBgColorClass)
      }
      return classList
    }
  },
  methods: {
    clicked () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-chip {
  background-color: white;
  padding: $min-padding;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: $min-margin;
  box-shadow: 0 0 0 1px $light;
  border-radius: $border-radius;

  &.with-placeholder {
    border: 2px dashed $primary;
    background-color: transparent;

    .label, .icon {
      pointer-events: none;
    }

    .icon {
      opacity: 0;
    }

    .label {
      opacity: 0.25;
    }
  }

  .label-wrapper {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    align-items: center;
  }

  &:hover {
    .label {
      transform: translateX($small-nudge);
    }
  }

  .label {
    font-size: 1.25rem;
    font-weight: 700;
    color: $dark;
    padding: $min-padding;
    transition: transform $fast;
  }

  .icon {
    flex-grow: 0;
    flex-shrink: 0;
    padding: $min-padding;
  }
}

.primary {
  background-color: $primary;
}
</style>
