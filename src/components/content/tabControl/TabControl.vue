<template>
  <div class="tab-control">
    <div @click="itemClick(index)" v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active: currentIndex == index}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  setup(props,{emit}) {
    let currentIndex=ref(0)
    let itemClick=(index)=>{
      currentIndex.value=index
      // console.log(props,emit)
      emit('tabClick',index)
    }
    return {
      currentIndex,
      itemClick
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  background-color: white;
  z-index: 5;
  border-bottom: 1px solid #eee;

  position: sticky;
  top: 44px;
  .tab-control-item {
    flex: 1;

    span {
      padding: 5px;
    }
  }

  .active {
    color: var(--color-tint);
    span{
      border-bottom: 3px solid var(--color-tint)
    }
  }
}
</style>