<template>
    <div class="bottomNavigation">
        <el-row>
            <el-col :span="6" >
                <i class="iconfont icon-home2" style="font-size:20px"></i><span style="display:block;font-size:6px">首页</span>
            </el-col>
            <el-col :span="6">
                <i class="iconfont icon-video1" style="font-size:20px"></i><span style="display:block;font-size:6px">西瓜视频</span>
            </el-col>
            <el-col :span="6">
                <i class="iconfont icon-weixin" style="font-size:20px"></i><span style="display:block;font-size:6px">微头条</span>
            </el-col>
            <el-col :span="6">
                <i class="iconfont icon-video" style="font-size:20px"></i><span style="display:block;font-size:6px">小视频</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"bottomNavigation"
}
</script>

<style>
 .bottomNavigation{
     background-color: #D3D3D3;
     padding-top:3px;
 }
</style>
