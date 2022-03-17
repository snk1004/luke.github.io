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
    .pedia-book {
        width: 100%;
        height: 100%;
        .pedia-top {
            width: 100%;
            // height: 30px;
            background: #fff;
            font-size: 14px;
            display: flex;
            justify-content: space-around;
            border-top: 3px solid #fb5e22;
            span {
                padding: 10px 30px;
                position: relative;
            }
            .pedia_active::after{
                content: '';
                position: absolute;
                display: block;
                left: 42%;
                bottom: 0px;
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
                border-bottom: 6px solid #fb5e22;
            }
        }
        .pedia-content {
            width: 100%;
            height: 88%;
            display: flex;
            .pedia-left {
                width: 20%;
                height: 100%;
                font-size: 14px;
                background: #f6f6f6;
                ul {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    li {
                        text-align: center;
                        padding: 10px 0;
                    }
                    .li_activea {
                        background: #fff;
                    }
                }
            }
            .pedia-right {
                width: 80%;
                padding: 15px;
                box-sizing: border-box;
                flex-wrap: wrap;
                .pedia-box {
                    width: 33%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    float: left;
                    padding-bottom: 15px;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                    span {
                        padding-top: 6px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
