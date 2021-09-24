import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    changeCartInfo (state, payload) {
      const {
        shopId,
        productId,
        productInfo,
        isAnAdd
      } = payload
      let shop = state.cartList[shopId]
      if (!shop) {
        shop = {}
      }
      let product = shop[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      if (!isAnAdd && product.count > 0) {
        product.count--
      } else if (isAnAdd) {
        product.count++
      }
      shop[productId] = product
      state.cartList[shopId] = shop
    }
  },
  actions: {},
  modules: {}
})
