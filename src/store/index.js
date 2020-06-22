import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import history from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    history
  }
})
