<template>
  <div
    class="modal"
    @click.self="closeModal"
  >
    <div class="dimension-limiter">
      <div
        v-if="modalData.type === 'video'"
        class="video-viewer"
      >
        <iframe
          :src="`https://www.youtube.com/embed/${modalData.data.src}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div
        v-if="modalData.type === 'discarded'"
        class="card-grid"
      >
        <GridCard :card-array="modalData.data.discarded" />
      </div>
    </div>
  </div>
</template>

<script>
import GridCard from '@/components/layout/GridCard'
export default {
  components: { GridCard },
  props: {
    modalData: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5)
}

.dimension-limiter {
  max-width: 70rem;
  width: 100%;
  max-height: 75%;
  overflow: auto;
}

.video-viewer {
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
