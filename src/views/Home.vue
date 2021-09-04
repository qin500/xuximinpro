<template>
  <div class="home">
    <img alt="Vue logo" src="~assets/logo.png">
    {{ banner }}
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {getHomeAllDate,getBanner} from "network/home";

export default {
  name: 'Home',
  setup(){

    const banner=ref([]);

    onMounted(()=>{
      getHomeAllDate().then(res=>{
        banner.value=res.slides;
      }).catch()
    })

    return {
      banner
    }
  },
  components: {

  }
}
</script>

<style>



</style>
