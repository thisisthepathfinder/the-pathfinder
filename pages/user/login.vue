<template>
  <div class="login">
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
    <button>Login</button>
  </div>
</template>

<script>
import vInput from '@/components/ui/vInput'
export default {
  components: { vInput },
  methods: {
    login () {
      this.$router.push({ name: 'play-explore' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: block;
}
</style>
