<template>
    <footer>
        <ul>
          <li :class="[index==isIndex?'li-actived':'']" v-for="(item,index) in botList" :key="index" @click="botTab(item,index)">
              <i :class="['iconfont',item.className]"></i>
              <span v-text="item.title"></span>
          </li>
        </ul>
    </footer>
</template>
<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'lukeFooter',
  data() {
    return {
        botList:[
          {"name":"/","className":"turtle-shouye","title":"首页"},
          {"name":"/circle","className":"turtle--wugui","title":"龟圈"},
          {"name":"/add","className":"turtle-tianjia","title":""},
          {"name":"/message","className":"turtle-xiaoxi","title":"消息"},
          {"name":"/mine","className":"turtle-geren","title":"我的"}
        ],
        isIndex: 0,
    };
  },
  mounted() {
    this.initIndex();
  },
  methods: {
    initIndex(){
      const routeName = this.$route.name;
      switch (routeName) {
        case 'Home':
          this.isIndex = 0;
          break;
        case 'Cyclop':
          this.isIndex = 1;
          break;
        case 'Message':
          this.isIndex = 2;
          break;
        case 'Mine':
          this.isIndex = 3;
          break;
        default:
          break;
      }
    },
    botTab(data,ind){
      if(ind==2) return;
      this.isIndex = ind;
      this.$router.push(data.name)
    },
  }
})
</script>
<style lang="scss">
    footer{
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 60px;
        background-image: linear-gradient(#f3f3f3, #ffffff);
        border-top: 1px solid #ddd;
        ul{
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          li{
            font-size: 24px!important;
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                font-size: 12px;
                padding-top: 5px;
            }
            img{
              width: 40px;
            }
            .turtle-tianjia{
              font-size: 32px;
              color: #fb5e22;
            }
          }
          .li-actived{
            color: #fb5e22;
          }
        }
    }
</style>
