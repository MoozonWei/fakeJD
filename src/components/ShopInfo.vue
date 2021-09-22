<template>
  <div class="shopInfo" v-show="item.imgUrl">
    <img :src="item.imgUrl" alt="" class="shopInfo__img">
    <div :class="{'shopInfo__content': true, 'shopInfo__content--bordered': bordered}">
      <div class="shopInfo__content__title">{{ item.name }}</div>
      <div class="shopInfo__content__tags">
        <span class="shopInfo__content__tags__tag">月售：{{ item.sales }}</span>
        <span class="shopInfo__content__tags__tag">起送：{{ item.expressLimit }}</span>
        <span class="shopInfo__content__tags__tag">基础运费：{{ item.expressPrice }}</span>
      </div>
      <p class="shopInfo__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'bordered']
}
</script>

<style scoped lang="scss">
@import "../style/variables";

.shopInfo {
  display: flex;
  padding-top: .12rem;

  &__img {
    margin-right: .16rem;
    width: .56rem;
    height: .56rem;
  }

  &__content {
    flex: 1;
    padding-bottom: .12rem;

    &--bordered{
      border-bottom: .01rem solid $content-bgColor;
    }

    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontColor;
    }

    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontColor;

      &__tag {
        margin-right: .16rem;
      }
    }

    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: $highlight-fontColor;
    }
  }
}
</style>
