<template>
  <div class="docker">
    <div v-for="(item, index) in dockerList "
         :key="item.icon"
         :class="{'docker__item': true, 'docker__item--active': index === 0}"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe62b;', text: '首页' },
      { icon: '&#xe625;', text: '购物车' },
      { icon: '&#xe627;', text: '订单' },
      { icon: '&#xe622;', text: '我的' }
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
