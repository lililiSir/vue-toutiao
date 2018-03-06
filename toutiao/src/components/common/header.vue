<template>
    <div class="headerTop">
        <el-row align="center">
            <el-col :span="24">
                <div class="grid-content">
                    <div class="headImg">
                        <img src="../../../static/img/headImg.jpg" alt="headImg" width="48" height="48" style="border-radius:25px">       
                    </div>                   
                    <div class="searchInput">
                        <el-input placeholder="请输入内容">
                            <template slot="prepend"><i class="iconfont icon-search1"></i></template>
                        </el-input>
                    </div>
                    <div class="sendMessage">
                        <i class="iconfont icon-shuru"></i>
                    </div>
                </div>
            </el-col>    
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "headerTop",
        data() {
            return {
                msg: "这是首页完成的状态"
            }
        }
    }
</script>

<style>
    .headerTop {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #C0C0C0;
        margin-top: 20px;
        padding: 0px;
        margin: 0px;
        background: #d43d3d;
    }
    .grid-content {
        padding: 0px;
        margin: 0px;
        height: 60px;
    }
    .headImg{
        padding-top:4px;
        /* position: absolute;
        left: 2%; */
        float: left;
        padding-left: 20px
    }
    .searchInput{
        padding-top:8px;
        float: left;
        padding-left:15px
    }
    .icon-search{
        font-size: 20px;
    }
    .sendMessage{
         padding-top:10px;
         font-size: 20px;
    }
</style>
