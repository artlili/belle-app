<template>
  <div class="home">
    <div>
      <ListFilters/>
    </div>
    <div class="lists">
      <ListAll/>
      <ListSelected/>
    </div>
    <HistoryButtons/>
  </div>
</template>

<script>
import ListFilters from '@/components/ListFilters'
import ListAll from '@/components/ListAll'
import ListSelected from '@/components/ListSelected'
import HistoryButtons from '@/components/HistoryButtons'

export default {
  name: 'Home',
  components: {
    HistoryButtons,
    ListFilters,
    ListAll,
    ListSelected
  },
  async mounted () {
    this.$store.dispatch('getList')
  }
}
</script>

<style scoped lang="sass">
  .lists
    display: flex
    flex-direction: column

    @media (min-width: 768px)
      flex-direction: row
      justify-content: space-between
</style>
