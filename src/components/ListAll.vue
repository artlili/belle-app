<template>
  <div class="list-all">
    <ul v-if="filteredItems.length">
      <li v-for="(item, index) in filteredItems" :key="index">
        <img :src="item.links[0].href" alt="">
        <div class="desc">
          <h4>{{item.data[0].title}}</h4>
          <p>{{item.data[0].keywords}}</p>
        </div>
        <div class="add" @click="moveItem(index)">+</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'ListAll',
  computed: mapGetters(['filteredItems']),
  methods: {
    ...mapMutations(['moveListItem', 'createHistory']),
    moveItem (id) {
      const params = {
        id: id,
        type: 'add'
      }
      this.moveListItem(params)
      this.createHistory(params)
    }
  }
}
</script>

<style scoped lang="sass">
  .list-all
    flex: 1 0 48%
  ul
    border: 1px solid #ccc
    border-radius: 4px
    margin-top: 20px

    @media (min-width: 768px)
      margin-right: 2%

    li
      padding: 7px 0
      border-bottom: 1px solid #ccc
      display: flex

      &:last-child
        border-bottom-color: transparent
        padding-bottom: 0

        img
          margin-bottom: 5px

      p
        font-size: 14px
        opacity: 0.8

      img
        width: 50px
        height: 50px
        margin-right: 15px
        margin-bottom: 10px

    .add
      font-size: 25px
      opacity: 0.6
      align-self: center
      margin-left: auto
      padding: 0 15px
      margin-top: -5px
      cursor: pointer

      &:hover
        opacity: 1
</style>
