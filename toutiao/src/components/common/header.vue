<template>
    <div class="headerTop">
        <el-row align="center">
            <el-col :span="24">
                <div class="grid-content">
                    <div class="headImg">
                        <img :src="headImg" alt="headImg" width="48" height="48" style="border-radius:25px">       
                    </div>                   
                    <div class="searchInput">
                        <el-input :placeholder="placeholderMsg">
                             <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
                        </el-input>
                    </div>
                    <div class="sendMessage">
                        <i class="iconfont icon-shuru"></i>
                        <span style="font-size:10px;display:block">发布</span>
                    </div>
                </div>
            </el-col>    
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "headerTop",
        data(){
            return{
                placeholderMsg:"我叫王大锤|时间都去哪了|...",
                headImg:"../../../static/img/headImg.jpg"
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
        height: 60px;
        background: #d43d3d;
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
        width:260px;
        float: left;
        padding-left:15px
    }
    .icon-search{
        font-size: 20px;
    }
    .sendMessage{
         padding-top:5px;
    }
    .icon-shuru{
        font-size:20px;
    }
    .el-icon-search{
        clear: both;
        position: absolute;
        left: -2px;
        top:1px;
    }
</style>
