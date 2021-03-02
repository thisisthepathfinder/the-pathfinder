<template>
  <div class="play">
    <NavPlay class="nav" />
    <Nuxt class="viewport" />
    <ManagerSnackbar />
    <InDevNotice />
  </div>
</template>

<script>
import NavPlay from '@/components/ui/NavPlay'
import ManagerSnackbar from '@/components/layout/ManagerSnackbar'
import InDevNotice from '@/components/ui/InDevNotice'
export default {
  components: { NavPlay, ManagerSnackbar, InDevNotice }
}
</script>

<style lang="scss" scoped>
.play {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  flex-grow: 0;
  flex-shrink: 1;
}

.viewport {
  flex-grow: 1;
  flex-shrink: 0;
}

.notice {
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 15rem;
  background-color: coral;
  padding: 1rem;
}
</style>
