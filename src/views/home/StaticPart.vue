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
    <div
      class="icons__item"
      v-for="item in iconsList"
      :key="item.desc"
    >
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt="" class="icons__item__img">
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";
@import "../../style/mixins";

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontColor;
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
  background-color: $search-bgColor;
  color: $content-iconColor;
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
      color: $content-fontColor;
    }
  }
}
</style>
