<template>
  <div class="home">
    <div class="swiper-mask" v-show="circleLoading">
      <circle-loading></circle-loading>
    </div>
    <div v-show="!circleLoading">
      <header-top class="top"></header-top>
      <top-navigation class="topn"></top-navigation>
      <bottom-navigation class="bottomn"></bottom-navigation>    
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/common/header'
  import topNavigation from '@/components/common/topNavigation';
  import bottomNavigation from '@/components/common/bottomNavigation';
  import circleLoading from '@/components/CircleLoading/index';
  export default {
    name: 'home',
    components: {
      headerTop,
      topNavigation,
      bottomNavigation,
      circleLoading
    },
    data(){
      return {
        circleLoading:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top {
    height: 60px
  }
  .topn {
    height: 590px;
  }
  .bottomn {
    position: absolute;
    bottom: 0px;
    width: 400px;
    height: 40px
  }
  .swiper-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #f4f4f4;
    left: 45%;
    top:40%;
    z-index: 9;
  }
</style>
