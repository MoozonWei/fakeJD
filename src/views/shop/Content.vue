<template>
  <div class="content">
    <div class="category">
      <div
        v-for="item in categories"
        :key="item.name"
        :class="{'category__item': true, 'category__item--active': item.tab === currentTab}"
        @click="() => handleTabClick(item.tab)"
      >{{ item.name }}
      </div>

    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in list"
        :key="item._id"
      >
        <img :src="item.imgUrl" alt="" class="product__item__img">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售 {{ item.sales }} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
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
import { get } from '@/utils/request'
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const categories = [
  {
    name: '全部商品',
    tab: 'all'
  },
  {
    name: '秒杀',
    tab: 'seckill'
  },
  {
    name: '新鲜水果',
    tab: 'fruit'
  }
]

// 和 tab 切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }

  return {
    currentTab,
    handleTabClick
  }
}

// 和当前列表相关的内容
const useCurrentListEffect = (currentTab) => {
  const content = reactive({ list: [] })
  const route = useRoute()
  const id = route.params.id

  const getContentData = async () => {
    const result = await get(`/api/shop/${id}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result.data) {
      content.list = result.data
    }
  }

  watchEffect(() => getContentData())

  const { list } = toRefs(content)

  return { list }
}

export default {
  name: 'Content',

  setup () {
    const {
      currentTab,
      handleTabClick
    } = useTabEffect()
    console.log(currentTab)
    const { list } = useCurrentListEffect(currentTab)

    return {
      categories,
      list,
      currentTab,
      handleTabClick
    }
  }
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
