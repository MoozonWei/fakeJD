<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    toastShow: false,
    toastMsg: ''
  })
  const showToast = (message) => {
    toastData.toastShow = true
    toastData.toastMsg = message
    setTimeout(() => {
      toastData.toastShow = false
      toastData.toastMsg = ''
    }, 2000)
  }
  const { toastShow, toastMsg } = toRefs(toastData)
  return { toastShow, toastMsg, showToast }
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: #fff;
}
</style>
