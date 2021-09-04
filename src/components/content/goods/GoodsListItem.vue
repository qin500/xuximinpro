<template>
 <div class="goods-item">
   <img :src="product.cover_url" :alt="product.description" >
   <div class="goods-info">
     <p>{{  product.title }}</p>
     <span class="price"><small>$</small>{{ product.price }}</span>
     <span class="collect">{{ product.collects_count }}</span>
   </div>
 </div>
</template>

<script>


export default {
  name: "GoodsListItem",
  props:{
    product:Object,
    default(){
      return {}
    }
  },
  setup(props,content) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.goods-item{
  width:46%;
  padding-bottom: 40px;
  position: relative;
  img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
text-align: center;
    font-size: 12px;
    bottom: 5px;
    left: 0;
    right: 0;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price{
    color:red;
      margin-right: 20px;
    }
    .collect{
      position: relative;
    }
    .collect::before{
      content: '';
      position: absolute;
      left: -15px;
      width: 14px;
      height: 14px;
      background: url("~assets/images/collect.png") 0 0 /14px 13px;
    }
  }
}
</style>