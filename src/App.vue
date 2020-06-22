<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  width: 1200px
  max-width: 100%
  margin: auto

ul
  list-style-type: none

li
  margin: 10px

a
  text-decoration: none

.btn
  display: block
  text-align: center
  vertical-align: middle
  border: 1px solid #42b983
  padding: 6px 12px
  line-height: 1.5
  border-radius: 4px
  color: #fff
  background-color: #42b983

  @media (min-width: 500px)
    display: inline-block

.note
  text-align: center
  color: #ccc
  margin-bottom: 30px
</style>
