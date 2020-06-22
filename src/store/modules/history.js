import list from './list'
export default {
  state: {
    historyItems: [],
    historyAll: []
  },
  mutations: {
    createHistory (state, payload) {
      const history = {
        item: list.state.listFiltered[payload.id],
        type: payload.type,
        date: Date.now()
      }
      state.historyItems.push(history)
      localStorage.setItem('history', JSON.stringify(state.historyItems))
    },
    loadHistory (state, history) {
      state.historyAll = history
    }
  },
  actions: {
    getHistory (ctx) {
      const history = JSON.parse(localStorage.getItem('history')) || []
      ctx.commit('loadHistory', history)
    }
  },
  getters: {
    history (state) {
      return state.historyAll
    }
  }
}
