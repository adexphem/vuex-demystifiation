import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Black Panther', price: '2000'},
      {name: 'Saworoide', price: '2000'},
      {name: 'Abija Wara', price: '1200'},
      {name: 'Oshe Sango', price: '800'}
    ]
  },
  getters: {
    salesProducts: state => {
      let products = state.products.map( product => {
        return {
          'name': '**' + product.name + '**',
          'price': product.price / 2
        }
      })
      return products
    }
  },
  mutations: {
    priceReducers: (state, amt) => {
      state.products.forEach(product => {
        product.price -= amt
      })
    }
  },
  actions: { // overcomes the
    priceReducers: (context, amt) => {
      setTimeout(function () {
        context.commit('priceReducers', amt) // priceReducers here is the one on mutations
      }, 2000)
    }
  }
})