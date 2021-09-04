<template>
  <div>
    <NavBar >
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>图书分类</template>
    </NavBar>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
  name: "Category",
  data() {
    return {}
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>