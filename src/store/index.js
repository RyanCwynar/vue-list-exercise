import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [
      {name: "Bitcoin",id: "btc"},
      {name: "Ethereum",id: "eth"},
      {name: "Ripple",id: "xrp"}
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
