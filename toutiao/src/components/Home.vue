<template>
  <div class="home">
    <header-top class="top"></header-top>
    <top-navigation class="topn"></top-navigation>
    <bottom-navigation class="bottomn"></bottom-navigation> 
  </div>
</template>

<script>
import headerTop from '@/components/common/header'
import topNavigation from '@/components/common/topNavigation';
import bottomNavigation from '@/components/common/bottomNavigation';
export default {
  name: 'home',
  components:{
    headerTop,topNavigation,bottomNavigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    height:60px
  }
  .topn{
    height: 590px;
  }
  .bottomn{
    position: absolute;
    bottom:0px;
    width:400px;
    height: 40px
  }
</style>
