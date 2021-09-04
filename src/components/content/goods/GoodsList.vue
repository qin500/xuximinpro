<template>
<div class="goods">
  <goods-list-item v-for="item in goods" :product="item" :key="item.id"></goods-list-item>
</div>

</template>

<script>
import GoodsListItem from "./GoodsListItem";
import {onMounted} from "vue";
export default {
  name: "GoodsList",
  components: {GoodsListItem},
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  setup() {
    onMounted(()=>{

    })
    return {



    }
  }
}
</script>

<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>