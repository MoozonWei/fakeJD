<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back" @click="handleBackClick">&#xe606;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">地址</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">易玛㷩</span>
          <span class="top__receiver__info__phone">11122233334</span>
        </div>
        <div class="iconfont top__receiver__icon">&#xe606;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">
        <span class="title">{{ shopName || 'there\'s a bug' }}</span>
        <div class="products__list">
          <div
            class="product__item"
            v-for="item in productsInCart"
            :key="item._id"
          >
            <img :src="item.imgUrl" alt="" class="product__item__img">
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span class="product__item__yen">&yen;</span>{{ item.price }} ✕ {{ item.count }}
                <span class="product__item__total__price">¥{{ (item.price * item.count).toFixed(2) }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order__price">实付金额 <b>¥{{ totalPrice }}</b></div>
      <div class="order__btn" @click="() => {showMask = true}">提交订单</div>
    </div>
  </div>
  <Mask v-if="showMask"  v-on:maskClicked="() => {showMask = !showMask}"></Mask>
</template>

<script>

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import Mask from '@/views/OrderConfirmation/Mask'

const useCartEffect = () => {
  const store = useStore()
  const shopId = useRoute().params.id
  const { cartList } = store.state

  const shopName = cartList[shopId].shopName

  const productsInCart = computed(() => {
    return cartList[shopId]?.productList || {}
  })

  const totalPrice = computed(() => {
    const productList = cartList[shopId]?.productList
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

  return {
    productsInCart,
    totalPrice,
    shopName
  }
}

// 事件监听
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }

  return { handleBackClick }
}

export default {
  name: 'OrderConfirmation',
  components: { Mask },
  setup () {
    const {
      productsInCart,
      totalPrice,
      shopName
    } = useCartEffect()

    const { handleBackClick } = useBackRouterEffect()

    const showMask = ref(false)

    return {
      productsInCart,
      totalPrice,
      shopName,
      handleBackClick,
      showMask
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";
@import "../../style/mixins";

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fbfbfb;
  overflow-y: scroll;
}

.top {
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, $btn-bgColor 50%);
  background-repeat: no-repeat;
  position: relative;

  &__header {
    padding-top: .26rem;
    line-height: .24rem;
    color: white;
    text-align: center;
    position: relative;
    font-size: .16rem;

    &__back {
      position: absolute;
      left: .18rem;
      font-size: .18rem;
    }
  }

  &__receiver {
    box-sizing: border-box;
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background-color: white;
    border-radius: .04rem;
    padding: .16rem;

    &__title {
      margin-bottom: .14rem;
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontColor;
    }

    &__address {
      font-size: .14rem;
      color: $content-fontColor;
      line-height: .2rem;
    }

    &__info {
      margin-top: .06rem;
      font-size: .12rem;
      color: $medium-fontColor;

      &__name {
        margin-right: .06rem;
      }
    }

    &__icon {
      position: absolute;
      right: .16rem;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      color: $medium-fontColor;
      font-size: .16rem;
    }
  }
}

.products {
  margin: .16rem .18rem .65rem;
  background-color: white;
  border-radius: .04rem;
  padding: .16rem;
  //position: absolute;
  //left: 0;
  //right: 0;
  //top: 2.05rem;

  &__title {
    .title {
      line-height: .22rem;
      font-size: .16rem;
    }
  }

  &__list {
    .product {
      &__item {
        display: flex;
        padding: .12rem 0;
        //margin: 0 .16rem;
        //border-bottom: .01rem solid $content-bgColor;
        position: relative;

        &__detail {
          overflow: hidden;
        }

        &__img {
          width: .46rem;
          height: .46rem;
          margin-right: .16rem;
        }

        &__detail {
          flex: 1;
        }

        &__title {
          margin: 0;
          line-height: .2rem;
          font-size: .14rem;
          color: $content-fontColor;
          font-weight: normal;
          @include ellipsis;
        }

        &__price {
          margin: .06rem 0 0 0;
          width: 100%;
          line-height: .2rem;
          font-size: .14rem;
          color: $highlight-fontColor;
          display: flex;
        }

        &__yen {
          font-size: .12rem;
        }

        &__total__price {
          color: black;
          text-align: right;
          flex: 1;

        }
      }
    }
  }
}

.order {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-left: .24rem;
  line-height: .49rem;
  font-size: .14rem;
  background-color: #fff;

  &__price {
    flex: 1;
  }

  &__btn {
    width: .98rem;
    background-color: #4fb0f9;
    color: white;
    text-align: center;
  }
}
</style>
