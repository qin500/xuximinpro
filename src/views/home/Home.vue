<template>
  <div id="home">
    <NavBar>
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>图书兄弟</template>
    </NavBar>
    <tab-control v-show="isFix"  @tabClick="tabClick" :titles="['畅销书','新书','精选']"></tab-control>
    <div  class="wrapper">
      <div  ref="banref" class="content">
        <div class="banners">
          <img src="~assets/images/1.png" alt="">
        </div>
        <recommend-view :recommends="recommends"></recommend-view>
        <tab-control @tabClick="tabClick" :titles="['畅销书','新书','精选']"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </div>
    </div>
<BackTop @bTop="bTop" ></BackTop>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import RecommendView from "../../components/ChildComps/RecommendView";
import {getHomeAllDate, getHomeGoods} from "../../network/home";
import {onMounted, ref, reactive, computed, watchEffect, nextTick} from "vue";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BScroll from "better-scroll";
import BackTop from "../../components/common/backtop/BackTop";
export default {
  name: "Home",
  setup() {
    const recommends = ref([])
    const temid = ref(0)//tab的id
    const goods = reactive({
      sales: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      }, recommend: {
        page: 0,
        list: []
      }
    })

    let currentType = ref('sales')
    let banref=ref(null)
    let isFix=ref(false)
    let isTopShow=ref(false)
    const showGoods = computed(() => {
      return goods[currentType.value].list
    })

    //计算属性
    let BetterScroll = reactive({})
    onMounted(() => {
      getHomeAllDate().then(res => {
        recommends.value = res.goods.data
      })

      getHomeGoods('sales').then(res => {
        goods.sales.list = res.goods.data
      })
      getHomeGoods('recommend').then(res => {
        goods.recommend.list = res.goods.data
      })
      getHomeGoods('new').then(res => {
        goods.new.list = res.goods.data
      })

      //创建BetterScroll对象
      BetterScroll=new BScroll(document.querySelector('.wrapper'),{
      // BetterScroll = new BScroll('.wrapper', {
        probeType: 2,
        click: true,
        pullUpLoad: true,
        //mouseWheel: true,//鼠标滚动
      })
      // //触发滚动事件
      BetterScroll.on('scroll', (position) => {
        isFix.value=(-position.y)>banref.value.offsetHeight
      })

      //上拉加载事件
      BetterScroll.on('pullingUp', (position) => {
        const page=goods[currentType.value].page+1


        getHomeGoods(currentType.value,page).then((res)=>{
          goods[currentType.value].list.push(...res.goods.data);
          goods[currentType.value].page += 1;
        })

        //完成上拉,等数据请求完成,要将数据展示出来
        BetterScroll.finishPullUp();

        // 重新计算高度
        BetterScroll.refresh()
        console.log('高度:' + document.querySelector(".wrapper .content").clientHeight , currentType.value,'当前页:' + page)
      })


    })

    let tabClick = (index) => {
      let atab = ['sales', 'new', 'recommend'];
      currentType.value = atab[index]
      nextTick(()=>{
        BetterScroll.refresh()

      })
    }


    const bTop=()=>{
      BetterScroll.scrollTo(0,0,500);
    }

    return {
      recommends,
      tabClick,
      goods,
      showGoods,
      banref,
      isFix,
      isTopShow,
      bTop
    }
  },
  components: {
    GoodsList,
    RecommendView,
    NavBar,
    TabControl,
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.banners img {
  width: 100%;
}

#home {
  height: 100vh;
  position: relative;

  .wrapper {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

}
</style>