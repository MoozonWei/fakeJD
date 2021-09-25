<template>
  <div class="docker">
    <div v-for="(item, index) in dockerList "
         :key="item.icon"
         :class="{'docker__item': true, 'docker__item--active': index === 0}"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"/>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: '&#xe62b;',
        text: '首页',
        to: { name: 'Home' }
      },
      {
        icon: '&#xe625;',
        text: '购物车',
        to: { name: 'CartList' }
      },
      {
        icon: '&#xe627;',
        text: '订单',
        to: { name: 'Home' }
      },
      {
        icon: '&#xe622;',
        text: '我的',
        to: { name: 'Home' }
      }
    ]
    return { dockerList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";

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
  color: $content-fontColor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }

    a {
      color: $content-fontColor;
      text-decoration: none;
    }

    &--active a {
      color: #1FA4FC;
      //text-decoration: none;
    }
  }

  &__title {
    font-size: 0.2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
