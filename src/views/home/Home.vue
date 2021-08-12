<template>
  <div class="wrapper">
    <StaticPart/>
    <div class="gap"></div>
    <Nearby/>
  </div>
  <Docker/>
</template>

<script>
import StaticPart from '@/views/home/StaticPart'
import Nearby from '@/views/home/Nearby'
import Docker from '@/views/home/Docker'
export default {
  name: 'Home',
  components: { Docker, Nearby, StaticPart }
}
</script>

<style lang="scss">
@import "../../style/variables";
@import "../../style/mixins";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  padding: 0 .18rem .1rem;
  overflow-y: auto;
  .gap {
    height: .1rem;
    background-color: $content-bgColor;
    margin: 0 -.18rem;
  }
}
</style>
