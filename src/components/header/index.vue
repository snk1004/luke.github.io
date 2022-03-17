<template>
    <div class="luke-head">
        <div class="head-left" @click="backPrvePage">
          <i class="iconfont turtle-fanhui"></i>
        </div>
        <div class="head-right"></div>
    </div>
</template>
<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'lukeHeader',
  methods: {
    backPrvePage(){
      this.$router.go(-1);
    }
  },
})
</script>
<style lang="scss">
    .luke-head {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      background: #ffffff;
      .head-left {
        display: flex;
        align-items: center;
      }
    }
</style>
