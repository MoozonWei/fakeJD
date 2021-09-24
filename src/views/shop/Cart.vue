<template>
  <div class="cart">
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
      // for (const productListElement of productList) {
      //   totalCount += productListElement.count
      // }
      for (const productListKey in productList) {
        const product = productList[productListKey]
        totalPrice += product.count * product.price
      }
    }
    return totalPrice.toFixed(2)
  })
  return {
    totalCount,
    totalPrice
  }
}

export default {
  name: 'Cart',
  setup () {
    const {
      totalCount,
      totalPrice
    } = useCartEffect()

    return {
      totalCount,
      totalPrice
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";

.cart {
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  height: .52rem;
  border-top: 1px solid $content-bgColor;
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
