<template>
  <div class="cart">
    <div class="product">
      <div class="product__header">
        <span
          class="product__header__checkAll iconfont"
          v-html="isCartAllChecked ? '&#xe70f;' : '&#xe619;'"
          @click="() => {toggleAllChecked(isCartAllChecked)}"
        ></span>
        全选
        <span class="product__header__clearCart" @click="() => {store.commit('clearCart', id)}">清空购物车</span>
      </div>
      <div
        class="product__item"
        v-for="item in productsInCart"
        :key="item._id"
      >
        <span class="product__item__checked iconfont" v-if="!item.checked"
              @click="() => {item.checked = !item.checked}">&#xe619;</span>
        <span class="product__item__checked iconfont" v-if="item.checked" @click="() => {item.checked = !item.checked}">&#xe70f;</span>
        <img :src="item.imgUrl" alt="" class="product__item__img">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus" @click="() => {changeCartInfo(id, item._id, item, false)}">-</span>
          {{ item.count }}
          <span class="product__number__plus" @click="() => {changeCartInfo(id, item._id, item, true)}">+</span>
        </div>
      </div>
    </div>

    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="" class="check__icon__img">
        <div class="check__icon__tag">{{ totalCount }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">¥ {{ totalPrice }}</span>
      </div>
      <div class="check__button">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const useCartEffect = () => {
  const store = useStore()
  const shopId = useRoute().params.id
  const { cartList } = store.state

  const changeCartInfo = (shopId, productId, productInfo, isAnAdd) => {
    store.commit('changeCartInfo', {
      shopId,
      productId,
      productInfo,
      isAnAdd
    })
  }

  const totalCount = computed(() => {
    const productList = cartList[shopId]
    let totalCount = 0
    if (productList) {
      // for (const productListElement of productList) {
      //   totalCount += productListElement.count
      // }
      for (const productListKey in productList) {
        const product = productList[productListKey]
        totalCount += product.count
      }
    }
    return totalCount
  })

  const totalPrice = computed(() => {
    const productList = cartList[shopId]
    let totalPrice = 0
    if (productList) {
      for (const productListKey in productList) {
        const product = productList[productListKey]
        if (product.checked) {
          totalPrice += product.count * product.price
        }
      }
    }
    return totalPrice.toFixed(2)
  })

  const productsInCart = computed(() => {
    return cartList[shopId] || []
  })

  const isCartAllChecked = computed(() => {
    const productList = cartList[shopId]
    if (productList) {
      for (const productListKey in productList) {
        const product = productList[productListKey]
        if (!product.checked) {
          return false
        }
      }
    }
    // console.log(productList, Boolean(productList), JSON.stringify(productList))
    return Boolean(productList) && JSON.stringify(productList) !== '{}'
  })

  const toggleAllChecked = (isCartAllChecked) => {
    const productList = cartList[shopId]
    if (productList) {
      for (const productListKey in productList) {
        const product = productList[productListKey]
        product.checked = !isCartAllChecked
      }
    }
  }
  return {
    totalCount,
    totalPrice,
    productsInCart,
    isCartAllChecked,
    changeCartInfo,
    toggleAllChecked,
    store
  }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const id = route.params.id
    const {
      totalCount,
      totalPrice,
      productsInCart,
      isCartAllChecked,
      changeCartInfo,
      toggleAllChecked,
      store
    } = useCartEffect()

    return {
      id,
      totalCount,
      totalPrice,
      productsInCart,
      isCartAllChecked,
      changeCartInfo,
      toggleAllChecked,
      store
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";
@import "../../style/mixins";

.cart {
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid $content-bgColor;
}

.product {
  flex: 1;
  overflow-y: scroll;
  background-color: #fff;

  &__header {
    line-height: .48rem;
    padding: 0 .16rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: .14rem;
    position: relative;

    &__checkAll {
      font-size: .22rem;
      color: $btn-bgColor;
      margin-right: .0rem;
      position: relative;
      top: .02rem;
    }

    &__clearCart {
      float: right;
    }
  }

  &__item {
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    position: relative;

    &__checked {
      font-size: .22rem;
      color: $btn-bgColor;
      line-height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis;
    }

    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }

    &__yen {
      font-size: .12rem;
    }

    &__origin {
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
  }

  &__number {
    position: absolute;
    right: 0;
    bottom: .12rem;

    &__minus, &__plus {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      line-height: .16rem;
      border-radius: 50%;
      font-size: .16rem;
      text-align: center;
    }

    &__minus {
      border: .01rem solid $medium-fontColor;
      margin-right: .05rem;
    }

    &__plus {
      background-color: $btn-bgColor;
      color: white;
      border: .01rem solid $btn-bgColor;
      margin-left: .05rem;
    }
  }
}

.check {
  display: flex;
  line-height: .49rem;

  &__icon {
    width: .84rem;
    position: relative;

    &__img {
      display: block;
      width: .28rem;
      height: .26rem;
      margin: .12rem auto;
    }

    &__tag {
      position: absolute;
      min-width: .06rem;
      height: .2rem;
      background-color: $highlight-fontColor;
      color: white;
      padding: 0 .07rem;
      border-radius: .1rem;
      font-size: .12rem;
      line-height: .2rem;
      text-align: center;
      left: .5rem;
      top: .04rem;
      transform-origin: left center;
      transform: scale(.5);
    }
  }

  &__info {
    flex: 1;
    color: $content-fontColor;
    font-size: .12rem;

    &__price {
      color: $highlight-fontColor;
      font-size: .18rem;
    }
  }

  &__button {
    width: .98rem;
    background-color: #4fb0f9;
    color: white;
    font-size: .14rem;
    text-align: center;
  }
}
</style>
