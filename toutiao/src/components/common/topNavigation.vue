<template>
  <div class="topNavigation">
    <el-tabs v-model="activeName" style="margin-left:20px;">
        <el-tab-pane label="关注" name="first">关注</el-tab-pane>
        <el-tab-pane label="推荐" name="second">推荐</el-tab-pane>
        <el-tab-pane label="南京" name="third">南京</el-tab-pane>
        <el-tab-pane label="视频" name="fourth">视频</el-tab-pane>
        <el-tab-pane label="热点" name="fifth">热点</el-tab-pane>
        <!-- <el-tab-pane label="新时代" name="sixth">新时代</el-tab-pane>
        <el-tab-pane name="seventh">视频</el-tab-pane> -->
    </el-tabs>
    <i class="iconfont icon-liebiao"></i>
  </div>
</template>

<script>
// 顶部导航栏
export default {
    name:"topNavigation",
    data(){
        return {
            msg:"这是顶部导航栏",
            activeName:"second"
        }
    }
}
</script>

<style>
    .topNavigation {
        margin:0px;
        padding: 0px;
        width: 100%;
        height: 40px;
        background-color: #f9fcfc
    }
</style>
