<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请确认密码" v-model="passCheck">
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginLinkClick">已有账号去登陆</div>
    <Toast v-if="toastShow" :message="toastMsg"></Toast>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'

const useRegisterEffect = (showToast) => {
  const data = reactive({ username: '', password: '', passCheck: '' })
  const router = useRouter()
  const handleRegister = async () => {
    try {
      const responseData = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (responseData?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('register failed')
      }
    } catch (e) {
      showToast('request failed')
    }
  }
  const { username, password, passCheck } = toRefs(data)
  return { username, password, passCheck, handleRegister }
}
const useLoginLinkEffect = () => {
  const router = useRouter()
  const handleLoginLinkClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginLinkClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { toastShow, toastMsg, showToast } = useToastEffect()
    const { username, password, passCheck, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginLinkClick } = useLoginLinkEffect()

    return { toastShow, toastMsg, handleRegister, handleLoginLinkClick, username, password, passCheck }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    width: .66rem;
    margin: 0 auto .4rem auto;
    height: .66rem;
    display: block;
  }
  &__input {
    padding: 0 .16rem;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background-color: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 6px;
    &__content {
      width: 100%;
      border: none;
      outline: none;
      line-height: .48rem;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
        font-size: .16rem;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem  .16rem;
    width: 2.95rem;
    height: .48rem;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
    border-radius: .04rem;
    color: white;
    font-size: .16rem;
    text-align: center;
    line-height: .48rem;
  }
  &__register-link {
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
