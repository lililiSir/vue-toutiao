<template>
  <div class="home">
    <header-top></header-top>
    <top-navigation></top-navigation> 
  </div>
</template>

<script>
import headerTop from '@/components/common/header'
import topNavigation from '@/components/common/topNavigation';
export default {
  name: 'home',
  components:{
    headerTop,topNavigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
