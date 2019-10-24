import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CoinList from '@/components/CoinList.vue'
import Vuetify from 'vuetify'
import COIN_SAMPLE from '../sample_data/coin_sample_data.json'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)

describe('CoinList.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
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
            updateCoins: jest.fn(function(state, payload) {
                state.coins = payload;
            }),
            setSearch: jest.fn(function(state, search){
                state.search = search;
            })
        },
        actions: {
            getCoins({ commit }){
                commit('updateCoins', COIN_SAMPLE);
            },
        },
    })
  })

  it('gets coins from the API', () => {
    const wrapper = shallowMount(CoinList, { localVue, store })
    expect(wrapper.vm.coins.length).toBe(20);
  })

  it('has headers for the table', () => {
    const wrapper = shallowMount(CoinList, { localVue, store })
    expect(wrapper.vm.headers.length).toBe(4);
  })

  it('setting search field works', () => {
    const wrapper = shallowMount(CoinList, { localVue, store })
    wrapper.vm.setSearch('test');
    expect(wrapper.vm.search).toBe('test')
  })
})
