<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="username"
      >
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="password"
      >
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegisterLinkClick">立即注册</div>
    <Toast v-if="toastShow" :message="toastMsg"></Toast>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'

const useLoginEffect = (showToast) => {
  const data = reactive({ username: '', password: '' })
  const router = useRouter()
  const handleLogin = async () => {
    try {
      const responseData = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (responseData?.errno === 0) {
        window.localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('login failed')
      }
    } catch (e) {
      showToast('request failed')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
const useRegisterLinkEffect = () => {
  const router = useRouter()
  const handleRegisterLinkClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterLinkClick }
}

export default {
  name: 'Login',
  components: { Toast },
  // setup 不要有太多的逻辑（逻辑要抽离出去），主要显示代码执行的流程（代码流程控制函数）
  setup () {
    const { toastShow, toastMsg, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterLinkClick } = useRegisterLinkEffect()

    return { toastShow, toastMsg, handleLogin, handleRegisterLinkClick, username, password }
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
  &__login-button {
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
  &__login-link {
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
