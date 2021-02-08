<template>
  <div class="register">
    <input
      type="text"
      placeholder="Username"
    >
    <input
      type="password"
      placeholder="Password"
    >
    <input
      type="password"
      placeholder="Confirm Password"
    >
    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: String,
      password: String,
      confirmPassword: String
    }
  },
  methods: {
    register () {
      console.log(this.username)
    }
  }
}
</script>
