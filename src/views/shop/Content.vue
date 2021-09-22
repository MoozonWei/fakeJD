<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">sdfsdfs</div>
      <div class="category__item">sdfsdfs</div>
      <div class="category__item">sdfsdfs</div>
      <div class="category__item">sdfsdfs</div>
      <div class="category__item">sdfsdfs</div>
      <div class="category__item">sdfsdfs</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="product__item__img">
        <div class="product__item__detail">
          <h4 class="product__item__title">titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</h4>
          <p class="product__item__sales">yue shou shi jian</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>33.3
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          0
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped lang="scss">
@import "../../style/variables";
@import "../../style/mixins";

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  width: .76rem;
  height: 100%;
  overflow-y: scroll;
  background: $search-bgColor;

  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontColor;

    &--active {
      background: #fff;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;

  &__item {
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    position: relative;

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis;
    }

    &__sales {
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontColor;
    }

    &__price {
      margin: 0;
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
</style>
