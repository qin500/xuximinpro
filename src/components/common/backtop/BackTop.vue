<template>
    <div @click="backtop" class="backTop">
      <i class="iconfont icon-up"></i>
    </div>
</template>

<script>
export default {
  name: "BackTop",
  setup(props,content) {


    return {
      backtop:()=>{
        content.emit('bTop')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .backTop {
    position: fixed;
    right: 15px;
    bottom: 80px;
    z-index: 20;
    display: inline-block;
    background: #ffffff;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    padding: 5px;
    i {
      position: absolute;
      left: 0;
      top: -3px;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      font-size: 40px;
    }

  }
</style>