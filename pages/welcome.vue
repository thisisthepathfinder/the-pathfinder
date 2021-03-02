<template>
  <div class="welcome">
    <vInput
      type="text"
      placeholder="Username"
      name="username"
    />
    <vInput
      type="password"
      placeholder="Password"
      name="password"
    />
    <vButton @click="login">
      Login
    </vButton>
    <vButton @click="register">
      Register
    </vButton>
  </div>
</template>

<script>
import vInput from '@/components/ui/vInput'
import vButton from '@/components/ui/vButton'
export default {
  components: { vInput, vButton },
  transition: 'page',
  methods: {
    login () {
      this.$router.push({ name: 'play-explore' })
    },
    register () {
      this.$router.push({ name: 'register-questionnaire' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
