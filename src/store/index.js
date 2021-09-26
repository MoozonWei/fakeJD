import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: JSON.parse(localStorage.cartList || '{}')
  },
  mutations: {
    changeCartInfo (state, payload) {
      const {
        shopId,
        shopName,
        productId,
        productInfo,
        isAnAdd
      } = payload
      let shop = state.cartList[shopId]
      if (!shop) {
        shop = {
          shopName: shopName,
          productList: {}
        }
      }
      const productList = shop.productList
      let product = productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
        product.checked = true
      }
      if (!isAnAdd && product.count > 0) {
        product.count--
      } else if (isAnAdd) {
        product.count++
      }
      productList[productId] = product
      if (product.count === 0) {
        delete productList[productId]
      }
      state.cartList[shopId] = shop
      if (JSON.stringify(shop.productList) === '{}') {
        delete state.cartList[shopId]
      }
      localStorage.cartList = JSON.stringify(state.cartList)
    },
    clearCart (state, id) {
      state.cartList[id] = {}
      delete state.cartList[id]
      localStorage.cartList = JSON.stringify(state.cartList)
    }
  },
  actions: {},
  modules: {}
})
