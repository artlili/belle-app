<template>
  <div class="history-buttons">
    <div v-for="link in buttons" :key="link.name">
      <router-link v-if="hide !== link.name" class="btn" :to="{ name: link.name }">{{link.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryButtons',
  props: {
    hide: String
  },
  computed: {
    buttons () {
      let links = []
      this.$router.options.routes.forEach(route => {
        if (route.path === '/history/') {
          links = route.children
        }
      })
      return links
    }
  }
}
</script>

<style scoped lang="sass">
  .history-buttons
    display: flex
    flex-direction: column

    @media (min-width: 500px)
      flex-direction: row
      justify-content: flex-end
  .btn
    margin:
      top: 15px
      left: 0
    @media (min-width: 500px)
      margin-left: 15px
</style>
