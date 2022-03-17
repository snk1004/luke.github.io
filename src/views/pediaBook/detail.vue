<template>
  <div class="pedia-book">
      <lukeHeader/>
      <div class="pedia-top">
            <span v-for="(item,index) in topList"  :class="topIndex==index?'pedia_active':null" @click="topTab(item,index,'top')" v-text="item.name" :key="index"></span>
      </div>
      <div class="pedia-content">
          <div class="pedia-left">
            <ul>
                <li v-for="(item,index) in classList"  :class="classIndex==index?'li_activea':null" @click="topTab(item,index,'class')" v-text="item.name" :key="index"></li>
            </ul>
        </div>
        <div class="pedia-right">
            <div class="pedia-box" v-for="(item,index) in theTurtleList" :key="index">
                <img src="@/assets/images/qiao.jpg" alt="">
                <span v-text="item"></span>
            </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import lukeHeader from '@/components/header/index.vue';
import { getCurrentInstance } from "vue";
const pediaJson = require('../../assets/json/pedia.json');
export default defineComponent({
    name: "pediaBook",
    data() {
        return {
            topList: [],
            classList: [],
            detailList: [],
            topIndex: 0,
            classIndex: 0,
            theClass: 'hot',
            theType: 'waterTurtle',
        }
    },
    components: {
        lukeHeader
    },
    computed: {
        theTurtleList(){
            let turtleArr = [];
            this.seriaLization(this.detailList).forEach((item:{tType:string,tClass:string,name:string,id:string})=>{
                if(item.tType == this.theType&&item.tClass == this.theClass){
                    turtleArr.push(item.name as never)
                }
            })
            console.log(turtleArr)
            return turtleArr
        }
    },
    mounted() {
        // 使用getCurrentInstance方法获取当前vdom实例
        // const axios = getCurrentInstance()?.appContext.config.globalProperties.$axios
        // const res = axios.request({
        //     url: '/json/pedia.json',
        //     method: 'get',
        //     data: ""
        // }).then((res)=>{
        //     let data = JSON.parse(JSON.stringify(res.data));
        //     this.topList = data.topList;
        //     this.classList = data.allList.classlist;
        //     this.detailList = data.allList.detailList;
        // })

        this.topList = pediaJson.topList;
        this.classList = pediaJson.allList.classlist;
        this.detailList = pediaJson.allList.detailList;
    },
    methods: {
        topTab(data,ind,type) {
            if(type == 'top') {
                this.topIndex = ind;
                this.theType = data.tType;
            }else {
                this.classIndex = ind;
                this.theClass = data.tClass;
            }
        },
        seriaLization (data) {
            return JSON.parse(JSON.stringify(data))
        }
    },
})
</script>
<style lang="scss" scoped>
    
</style>
