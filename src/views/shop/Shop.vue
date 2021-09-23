<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe606;
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <ShopInfo :item="item"></ShopInfo>
    <Content></Content>
    <Cart></Cart>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
import Content from '@/views/shop/Content'
import Cart from '@/views/shop/Cart'
import { get } from '@/utils/request'
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'

// 获取当前商铺信息
const useShopInfoEffect = () => {
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const route = useRoute()
    const result = await get('/api/shop/' + route.params.id)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }

  const { item } = toRefs(data)
  return {
    item,
    getItemData
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
  name: 'Shop',
  components: { ShopInfo, Content, Cart },

  setup () {
    const {
      item,
      getItemData
    } = useShopInfoEffect()
    getItemData()
    const { handleBackClick } = useBackRouterEffect()

    return {
      handleBackClick,
      item
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";

.wrapper {
  padding: 0 .18rem;
}

.search {
  margin: .14rem 0 .04rem;
  display: flex;
  height: .32rem;
  line-height: .32rem;

  &__back {
    width: .3rem;
    font-size: .2rem;
    color: #b6b6b6;
  }

  &__content {
    display: flex;
    flex: 1;
    line-height: .32rem;
    background: $search-bgColor;
    border-radius: .16rem;

    &__icon {
      width: .44rem;
      text-align: center;
      font-size: .2rem;
      color: $content-iconColor;
    }

    &__input {
      display: inline-block;
      width: 100%;
      line-height: .32rem;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      font-size: .14rem;
      color: $content-fontColor;
    }
  }
}
</style>
