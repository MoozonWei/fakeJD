<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe6fa;</span>
    北京市海淀区北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe694;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe62d;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="banner-image">
  </div>
  <div class="icons">
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/菜市场.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/水果店.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/鲜花.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/医药健康.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">医药健康</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/家居.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">家居时尚</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">烘焙蛋糕</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/签到.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">签到</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/红包.png" alt="" class="icons__item__img">
      <p class="icons__item__desc">红包套餐</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
@import "../../style/variables";
@import "../../style/mixins";
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontcolor;
  &__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  &__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.search {
  height: .32rem;
  line-height: .32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;
  margin-bottom: .12rem;
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
  .iconfont {
    font-size: .2rem;
    padding: 0 .1rem 0 .16rem;
    display: inline-block;
  }
}
.banner {
  width: 100%;
  aspect-ratio: 1528/388;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: .06rem 0 .16rem 0;
      color: $content-fontcolor;
    }
  }
}
</style>
