<template>
  <div class="home">
    <header>
      <div class="head-content">
        <div class="pedia flex-jc-ac" @click="goPediaBook">
          <span>百科</span>
          <img src="../assets/images/baike.png" alt="">
        </div>
        <input type="text" placeholder="搜你所想">
        <i class="iconfont turtle-sousuo head-search"></i>
      </div>
      <div class="home-tab">
        <span :class="[index==isIndex?'tab-actived':'']" v-for="(item,index) in tabList" :key="item.id" v-text="item.name" @click="changeTab(index)"></span>
      </div>
    </header>
    <section>
      <div class="home-content">
        <div class="cont-box" v-for="(item,index) in dataList" :key="item.id">
          <div class="cont-box-top">
            <img :src="require('../assets/images/imglist/'+item.imgurl)" alt="">
          </div>
          <div class="cont-box-bottom">
            <div class="works-name">
              <img :src="require('../assets/images/imglist/'+item.imgurl)" alt="">
              <span class="user-name">{{item.writer}}</span>
            </div>
            <div class="works-like">
              <i class="iconfont turtle-xin head-search"></i>
              <div class="like-num">{{item.favorite}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  data() {
    return {
        tabList:[
          {"name": "推荐","id":1},
          {"name": "关注","id":2},
        ],
        isIndex: 0,
        dataList: [{
          "id": "0001",
          "name": "麝香龟",
          "context": "麝香龟类的代表龟种，应该就要落在麝香和剃刀的身上了。虽然都属于麝香类的蛋龟，但是麝香和剃刀的外表差距还是蛮大的。麝香苗其实很可爱，小小的憨憨的。这龟成体不大，一般8~13cm左右。颜色有全黑的和灰色、棕色的不等。麝香还有一种特别小的，叫迷你麝香，相信喜欢蛋龟的朋友都不陌生。",
          "imgurl": "shexiang.jpeg",
          "writer": "网络资源",
          "favorite": "43",
          "comment": "31"
        },{
          "id": "0002",
          "name": "剃刀龟",
          "context": "剃刀龟，学名叫作剃刀麝香龟，又叫做屋顶麝香龟、刀背麝香龟。美洲蛋龟主力军之一。也是当今很受欢迎的品种之一。",
          "imgurl": "tidao.jpg",
          "writer": "网络资源",
          "favorite": "64",
          "comment": "37"
          },{
          "id": "0003",
          "name": "巨头蛋龟",
          "context": "巨头和剃刀很像，经验不足的龟友分辨不出它们。巨头最明显的区别就是背上三条棱，剃刀只有一个高高的背。巨头也因为头大而取了这个名字。头大也是个特点，cb的不明显，但是wc的巨头头是很大的。巨头价格高剃刀很多，一只巨头苗值6.7只剃刀苗了，价值在哪儿呢？巨头养大真的比剃刀漂亮，无论背甲上的放射纹还是密密的头点都是大部分剃刀不具备的。不过cb的巨头苗要想养成真正的“巨头”，可以多喂一些螺类，这样有助于锻炼咬合肌，头部长得更大些。",
          "imgurl": "jutou.jpg",
          "writer": "网络资源",
          "favorite": "24",
          "comment": "13"
        },{
          "id": "0004",
          "name": "虎纹麝香龟龟",
          "context": "虎纹麝香龟的颜色一般呈现为褐色、黄褐色，背部的条纹也十分的模糊不清，四肢十分发达有力，四肢有不同程度的黄、灰色斑，下巴长着一对长长的触须，头部则有黑丝条纹，与其他龟类有所不同，虎纹麝香龟幼年时候的体型花纹和成年时候的体型花纹十分的相似，让人难以区分，唯一能进行辨别的依据就是在幼年虎纹麝香龟的背壳上有一条十分明显的脊椎骨。",
          "imgurl": "huwen.jpg",
          "writer": "网络资源",
          "favorite": "43",
          "comment": "33"
        },{
          "id": "0005",
          "name": "头盔泥龟",
          "context": "头盔泥龟，体长只有3~4英寸，约7.5cm~10cm，头部有明显的斑点或斑纹，杂纹相对较少，颜色一般为棕色，不同于密西西比脸部的两条细长的条纹。",
          "imgurl": "toukui.jpg",
          "writer": "网络资源",
          "favorite": "76",
          "comment": "21"
        },{
          "id": "0006",
          "name": "红面泥龟",
          "context": "红面蛋龟，又称红面泥龟，隶属于泽龟科，为亚马逊泥龟的一个亚种，是一种珍稀观赏龟品种，其原产地为中南美洲。红面蛋龟凭借其奇特的外观、滑稽的面孔和凶猛的性情逐渐成为观赏龟市场上的热门。红面蛋龟一般体型不大，体长在12～17cm，背甲呈椭圆形，且平滑，状似鸡蛋，因而被称为“蛋龟”。红面蛋龟拥有奇特的腹甲，可以自由闭合，与箱龟类似，但箱龟只有腹甲的前段可以闭合，而红面蛋龟却是前后都可以活动闭合，所以腹甲很明显地分成3段。其背甲上还具有3条明显的棱脊，但会随着年龄的增长逐渐消失。红面蛋龟的脸部有着独特的红色花纹，这是“红面”的由来。但它皮肤上的花纹在幼体时并不会体现，只有发育到一定程度后才会出现颜色。目前市场上以花纹粗大且色红为佳。红面蛋龟性格外向凶猛，咬合力大，刚劲有力，常年生活在水里，很少上岸。除非繁殖季节，上岸例行公事。互动性很强。非常好伺候。",
          "imgurl": "hongmian.jpg",
          "writer": "网络资源",
          "favorite": "106",
          "comment": "21"
        },{
          "id": "0007",
          "name": "白唇泥龟",
          "context": "白唇泥龟——芒果色的艳丽突袭。白唇泥龟也算是漂亮的蛋龟，市面上分南部白唇和北部白唇，南唇的头色，两颊偏红，不均匀，而北唇两峡偏黄，颜色均匀，所谓的芒果头可以养到全身都是黄色的白唇，互动性很好，价格居中，一只发色的幼体白唇价格在300到400元，一般的蛋龟爱好者还是能够接受的，由于白唇不耐寒，所以不能冬眠，必须加温。这里要强调一点，想要养出好看的白唇，先天基因是非常重要的。尽量挑选幼苗时期头色开始发色的背甲，壳色浅的，后天最好养在白色不透光的容器中，晒背可以选择黄蜡石。头盔幼年时期就已经彰显出凶猛的气息了，这奶凶奶凶的气场也萌翻了众多龟友的心。",
          "imgurl": "baichun.jpg",
          "writer": "网络资源",
          "favorite": "96",
          "comment": "21"
        }]
    };
  },
  methods: {
    changeTab(ind){
      this.isIndex = ind;
    },
    goPediaBook(){
      this.$router.push('/pediaBook');
    }
  },
})
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    padding-bottom: 100px;
    background: #f5f5f5;
    header{
      width: 100%;
      position: fixed;
      top: 0;
      background: #fff;
      .head-content{
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        position: relative;
        padding-right: 12px;
        box-sizing: border-box;
        .pedia{
          width: 50px;
          position: relative;
          img{
            width: 20px;
          }
          span{
            position: absolute;
            top: 0;
            left: 11px;
            color: #fff;
            font-size: 12px;
            transform: scale(0.6);
          }
        }
        input{
          flex: 1;
          height: 28px;
          padding-left: 35px;
          background: #eee;
          border-radius: 3px;
          font-size: 12px;
        }
        .head-search{
          position: absolute;
          left: 60px;
          color: #6f6f6f;
        }
      }
      .home-tab{
        width: 30%;
        display: flex;
        align-items: center;
        padding: 6px 12px;
        span{
          color: #6f6f6f;
          padding-right: 15px;
          font-size: 14px;
        }
        .tab-actived{
          color: #fb5e22;
          font-size: 18px;
        }
      }
    }
    section{
      background: #f5f5f5;
      padding: 90px 12px 0;
      .home-content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .cont-box{
          width: 49.5%;
          height: 210px;
          background: #ffffff;
          margin-bottom: 13px;
          border-radius: 5px;
          overflow: hidden;
          .cont-box-top{
            height: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffffff;
            img{
              // width: 100%;
              // height: 173px;
              height: 100%;
              background: #6f6f6f;
            }
          }
          .cont-box-bottom{
            padding: 0 10px;
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .works-name{
              display: flex;
              align-items: center;
              font-size: 12px;
              img{
                width: 18px;
                height: 18px;
                border-radius: 50%;
              }
            }
            .works-like{
              font-size: 12px;
              display: flex;
              align-items: center;
              i{
                font-size: 12px;
              }
              .like-num{
                padding-left: 3px;
              }
            }
          }
        }
      }
    }
  }
</style>
