<template>
  <div class="wrapper">
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
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby__item__img">
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag">月售一万+</span>
            <span class="nearby__item__content__tags__tag">月售一万+</span>
            <span class="nearby__item__content__tags__tag">月售一万+</span>
          </div>
          <p class="nearby__item__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
    </div>
  </div>

  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe62b;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe625;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe627;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe622;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "./style/variables";
@import "./style/mixins";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  padding: 0 .18rem;
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
  .gap {
    height: .1rem;
    background-color: $content-bgColor;
    margin: 0 -.18rem;
  }
  .nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      color: $content-fontcolor;
      font-weight: normal;
    }
    &__item {
      display: flex;
      padding: .12rem 0;
      border-bottom: .01rem solid $content-bgColor;
      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
      &__content {
        flex: 1;
        &__title {
          line-height: .22rem;
          font-size: .16rem;
          color: $content-fontcolor;
        }
        &__tags {
          margin-top: .08rem;
          line-height: .18rem;
          font-size: .13rem;
          color: $content-fontcolor;
          &__tag {
            margin-right: .16rem;
          }
        }
        &__highlight {
          margin: .08rem 0 0 0;
          line-height: .18rem;
          font-size: .13rem;
          color: #e93b3b;
        }
      }
    }
  }
}
.docker {
  box-sizing: border-box;
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
