<template>
  <div>
    <NavBar >
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>商品详情:{{ id }}</template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import {useRoute} from "vue-router";
import {ref} from "vue";
export default {
  name: "Detail",
  setup() {
    const route=useRoute()
    let id=ref(0)


    // eslint-disable-next-line
    console.log("test")
    let abc=124;//

    id.value=route.query.id
    return {
      id
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>