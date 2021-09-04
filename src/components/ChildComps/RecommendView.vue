<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.slice(0,4)" :key="item.id">
      <a href="" @click.prevent="goD(item.id)">
        <img :src="item.cover_url" :alt="item.description">
        <div>{{  item.title }}</div>
      </a>
    </div>

  </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
export default {
  name: "RecommendView",
  setup(){
      const router=useRouter();

      const goD=(id)=>{
        router.push({path:'/detail',query:{id}})
      }

      return {
        goD
      }
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
  font-size: 12px;
}

.recommend-item {
  flex: 1;

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
}
</style>