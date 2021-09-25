<template>
<div class="wrapper">
  <div class="top">
    <div class="top__header">
      <div class="iconfont top__header__back">&#xe606;</div>
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
</div>
</template>

<script>
export default {
  name: 'OrderConfirmation'
}
</script>

<style scoped lang="scss">
@import "../../style/variables";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
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
      line-height: .2rem ;
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
</style>
