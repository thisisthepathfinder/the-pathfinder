<template>
  <div class="index">
    <div class="access">
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
  </div>
</template>

<script>
import vInput from '@/components/ui/vInput'
import vButton from '@/components/ui/vButton'
export default {
  components: { vInput, vButton },
  methods: {
    login () {
      this.$router.push({ name: 'play-explore' })
    },
    register () {
      this.$router.push({ name: 'play-explore' })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.access {
  button {
    display: block;
    width: 100%;
  }
}
</style>
