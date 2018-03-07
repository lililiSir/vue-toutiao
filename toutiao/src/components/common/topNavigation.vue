<template>
    <div class="topNavigation">
        <div >
            <el-tabs v-model="activeName" style="margin-left:15px;">
                <el-tab-pane label="关注" name="first">
                    
                </el-tab-pane>
                <el-tab-pane label="推荐" name="second">
                    <hot-news></hot-news>
                </el-tab-pane>
                <el-tab-pane label="南京" name="third">

                </el-tab-pane>
                <el-tab-pane label="视频" name="fourth">

                </el-tab-pane>
                <el-tab-pane label="热点" name="fifth">

                </el-tab-pane>
                <!-- <el-tab-pane label="新时代" name="sixth">新时代</el-tab-pane> -->
                <!-- <el-tab-pane name="seventh">视频</el-tab-pane> -->
            </el-tabs>
        </div>
        <i class="iconfont icon-liebiao" style="position:absolute;left:360px;top:72px"></i>
    </div>
</template>

<script>
    // 顶部导航栏
    import hotNews from '@/components/common/hotNews'
    export default {
        name: "topNavigation",
        data() {
            return {
                msg: "这是顶部导航栏",
                activeName: "second"
            }
        },
        components:{
            hotNews
        }
    }
</script>

<style>
    .topNavigation {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 40px;
        background-color: #f9fcfc
    }
</style>
