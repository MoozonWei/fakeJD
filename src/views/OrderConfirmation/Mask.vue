<template>
  <div class="mask" @click.self="$emit('maskClicked')">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台吗？</h3>
      <p class="mask__content__desc">请尽快完成支付</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn__cancel" @click.self="$emit('maskClicked')">取消订单</div>
        <div class="mask__content__btn__confirm">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mask'
}
</script>

<style scoped lang="scss">
@import "../../style/variables";

.mask {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    width: 3rem;
    height: 1.56rem;
    background-color: #fff;
    border-radius: .04rem;
    text-align: center;

    &__title {
      font-size: .18rem;
      color: $content-fontColor;
      margin: .24rem 0 0 0;
      line-height: .26rem;
    }

    &__desc {
      margin: .08rem 0 0 0;
      font-size: .14rem;
      color: $medium-fontColor;
    }

    &__btns {
      display: flex;
      justify-content: space-evenly;
      margin-top: .24rem;

      &>* {
        border-radius: .16rem;
        border: .01rem solid #4fb0f9;
        color: #4fb0f9;
        width: .8rem;
        height: .32rem;
        line-height: .32rem;
        font-size: .14rem;
      }
    }

    &__btn__confirm {
      color: white;
      background-color: #4fb0f9;
    }
  }
}
</style>
