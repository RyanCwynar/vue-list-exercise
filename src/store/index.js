import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [
      { name: "",id: "", rank: null, type: "" },
    ],
    search: ""
  },
  mutations: {
    updateCoins(state, payload) {
      if(Array.isArray(payload) && payload.length > 0)
        state.coins = payload;
    },
    setSearch(state, payload){
      state.search = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
