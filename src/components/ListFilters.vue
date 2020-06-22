<template>
  <div class="list-filters">
    <input v-model="search" @input='onInput' class="search" type="text" placeholder="поиск">
    <button class="sort" @click="onClick">&#8593;&#8595;</button>
  </div>
</template>

<script>
export default {
  name: 'ListFilters',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onInput () {
      this.$store.commit('filterItems', this.search)
    },
    onClick () {
      this.$store.commit('reverseItems')
    }
  }
}
</script>

<style scoped lang="sass">
  .list-filters
    display: flex

  .search
    width: 280px
    max-width: 100%
    border: 1px solid #ccc
    padding: 6px 10px
    border-radius: 4px

  .sort
    margin-left: 15px
    padding: 0 7px

</style>
