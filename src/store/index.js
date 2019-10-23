import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [
      {name: "",id: "", rank: null, type: ""},
    ]
  },
  mutations: {
    updateCoins(state, payload) {
      if(Array.isArray(payload) && payload.length > 0)
        state.coins = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
