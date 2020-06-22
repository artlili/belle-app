<template>
  <div>
    <ul v-if="history.length">
      <li v-for="(i, index) in history" :key="index">
        <p v-if="i.type === 'add'">
          <span>{{i.item.data[0].title}}</span>
          <span>добавлено: {{i.date | moment("from", "now")}}</span>
        </p>
      </li>
    </ul>
    <div class="note" v-else>Нет данных для показа</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HistoryAdded',
  computed: mapGetters(['history']),
  mounted () {
    console.log(this.history)
    this.$store.dispatch('getHistory')
  }
}
</script>

<style scoped lang="sass">
  ul
    margin-bottom: 30px

    p
      display: flex
      justify-content: space-between
      border-bottom: 1px solid #ccc
      padding: 7px 0px
</style>
