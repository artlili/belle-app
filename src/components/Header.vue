<template>
  <header class="header">
    <router-link to="/"><h1>Belle</h1></router-link>
    <div class="nav">
      <router-link class="nav-link" to="/">Главная</router-link>
      <router-link class="nav-link" to="/history">История</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="sass">
  .header
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #ccc
    margin-bottom: 50px

    a
      font-weight: bold
      color: #2c3e50
      text-decoration: none
      display: inline-block

    .nav
      padding: 15px 0

      &-link
        margin-left: 30px

      &.router-link-exact-active
         color: #42b983
</style>
