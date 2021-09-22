<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo
        :item="item"
        :bordered="true"
      ></ShopInfo>
    </router-link>
    <Toast v-if="toastShow" :message="toastMsg"></Toast>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo'
import Toast, { useToastEffect } from '@/components/Toast'

const useNearbyListEffect = (showToast) => {
  const nearbyList = ref([])

  const getNearbyList = async () => {
    try {
      const result = await get('/api/shop/hot-list')
      if (result?.errno === 0 && result?.data?.length) {
        nearbyList.value = result.data
      } else {
        showToast('failed to get nearby list')
      }
    } catch (e) {
      showToast('request failed')
    }
  }
  return {
    getNearbyList,
    nearbyList
  }
}

export default {
  name: 'Nearby',
  components: {
    Toast,
    ShopInfo
  },
  setup () {
    const {
      toastShow,
      toastMsg,
      showToast
    } = useToastEffect()
    const {
      nearbyList,
      getNearbyList
    } = useNearbyListEffect()
    getNearbyList(showToast)
    return {
      nearbyList,
      toastShow,
      toastMsg
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";

.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    color: $content-fontColor;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
}
</style>
