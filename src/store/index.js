import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: "",
    coins: [
      {
        name: "",
        id: "", 
        rank: null, 
        type: ""
      },
    ],
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
    getCoins({ commit }){
      axios.get('/coins')
        .then(({ data }) => {
          let head = data.splice(0,20);
          commit('updateCoins', head);
        });
    },
  },
  plugins: [createPersistedState()],
})
