import axios from 'axios'
import _ from 'lodash'

export default {
  state: {
    listAll: [],
    listSelected: [],
    listFiltered: [],
    listReversed: []
  },
  mutations: {
    updateList (state, listAll) {
      state.listAll = listAll
    },
    moveListItem (state, payload) {
      if (payload.type === 'add') {
        state.listSelected.unshift(state.listFiltered[payload.id])
        state.listFiltered.splice(payload.id, 1)
      } else {
        state.listFiltered.unshift(state.listSelected[payload.id])
        state.listSelected.splice(payload.id, 1)
      }
    },
    filterItems (state, query) {
      state.listFiltered = _.filter(state.listAll, item => {
        const names = _.includes(_.lowerCase(item.data[0].title), _.lowerCase(query))
        const keywords = _.includes(_.lowerCase(item.data[0].keywords), _.lowerCase(query))
        if (names || keywords) return item
      })
    },
    reverseItems (state) {
      state.listFiltered.reverse()
    }
  },
  actions: {
    async getList (ctx, query = 'Earth') {
      await axios
        .get(
          'https://images-api.nasa.gov/search?q=' + query + '&media_type=image'
        ).then(responce => {
          const list = responce.data.collection.items
          ctx.commit('updateList', list)
          ctx.commit('filterItems')
        })
    }
  },
  getters: {
    selectedItems (state) {
      return state.listSelected
    },
    filteredItems (state) {
      return state.listFiltered
    }
  }
}
