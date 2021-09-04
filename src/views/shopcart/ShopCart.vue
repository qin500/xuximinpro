<template>
  <div>
    <NavBar>
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>购物车</template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

export default {
  name: "ShopCart",
  data() {
    return {}
  }
  ,
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>