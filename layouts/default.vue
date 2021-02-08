<template>
  <div>
    <Nuxt />
    <div class="notice">
      <p>This site is in active development, there will be a lot of rough edges and placeholder elements.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice {
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 15rem;
  background-color: coral;
  padding: 1rem;
}
</style>
