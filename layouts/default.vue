<template>
  <div>
    <Nuxt />
    <ManagerSnackbar />
    <InDevNotice />
  </div>
</template>

<script>
import ManagerSnackbar from '@/components/layout/ManagerSnackbar'
import InDevNotice from '@/components/ui/InDevNotice'
export default {
  components: { ManagerSnackbar, InDevNotice }
}
</script>
