<template>
  <router-view/>
  <LukeHeader v-if="$route.meta.showFoot"/>
  <van-overlay :show="show">
    <div class="loading-content">
      <van-loading type="spinner" size="24px" vertical>
        加载中...
      </van-loading>
    </div>
  </van-overlay>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LukeHeader from '@/components/footer/index.vue';
export default defineComponent({
	name: "App",
  data() {
    return {
      show: true,
    }
  },
	components: {
    LukeHeader,
  },
  mounted() {
    setTimeout(()=>{
      this.show = false;
    },500)
  },
})
</script>
<style lang="scss" scoped>
@import './assets/css/common.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loading-content{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
