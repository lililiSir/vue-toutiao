<template>
    <div class="personal">
        <div class="top-back">
            <router-link to="/"><i class="iconfont icon-qiehuanqizuo"></i></router-link>
        </div>
        <div class="middle-personal">
            <div class="p-1">
                <div style="float:left;padding-left:15px;padding-top:15px"><img src="../../static/img/headImg.jpg" alt="" width="80" height="80" style="border-radius:40px"></div>
                <div style="float:left;padding-left:15px;padding-top:25px">
                    <span class="userName">whatwhy888888</span>
                    <span style="display:block;text-align:left;margin-top:10px">
                                <el-button size="mini" round style="background-color:orange">申请认证</el-button>
                            </span>
                </div>
            </div>
            <div class="p-2">
                <el-row>
                    <el-col :span="8">
                        <span>动态: 100</span>
                    </el-col>
                    <el-col :span="8">
                        <span>关注: 100</span>
                    </el-col>
                    <el-col :span="8">
                        <span>粉丝:5000</span>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="bottom-function">
            <div class="bf-1">
                <el-row>
                    <el-col :span="8">
                        <span style="display:block"><i class="iconfont icon-collection"></i></span>
                        <span style="font-size:14px">收藏</span>
                    </el-col>
                    <el-col :span="8">
                        <span style="display:block"><i class="iconfont icon-history"></i></span>
                        <span style="font-size:14px">历史</span>
                    </el-col>
                    <el-col :span="8">
                        <span style="display:block"><i class="iconfont icon-night"></i></span>
                        <span style="font-size:14px">夜间</span>
                    </el-col>
                </el-row>
            </div>
            <div class="bf-2"></div>
            <div class="bf-3">
                <span class="bf-font">消息通知</span> 
            </div>
            <div class="bf-2"></div>
            <div class="bf-4">
                <div class="bf-4-1">
                    <span class="bf-font">头条商城</span>
                </div>
                <div class="bf-4-1">
                    <span class="bf-font">京东特供</span>
                </div>  
            </div>
            <div class="bf-2"></div>
            <div class="bf-4">
                <div class="bf-4-1">
                    <span class="bf-font">用户反馈</span>
                </div>
                <div class="bf-4-1">
                    <span class="bf-font">系统设置</span>
                </div>  
            </div>
            <div class="bf-2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal"
    }
</script>

<style>
    .top-back {
        width: 100%;
        height: 50px;
        background-color: #444448;
    }
    .icon-qiehuanqizuo {
        color: white;
        font-size: 20px;
        vertical-align: center;
        float: left;
        margin: 11px 0px 0px 15px;
    }
    .middle-personal {
        width: 100%;
        height: 160px;
        background-color: #444448;
    }
    .p-1 {
        height: 110px;
    }
    .p-2 {
        height: 50px;
        color: white;
        font-size: 14px;
    }
    .userName {
        display: block;
        text-align: left;
        color: white;
        font-size: 18px
    }
    .bf-1 {
        margin-top: 10px;
    }
    .icon-collection,
    .icon-history,
    .icon-night {
        font-size: 20px;
        color: red
    }
    .bf-2{
        height:10px;
        margin-top:10px;
        background-color:#c2c2c2
    }
    .bf-3{
        height:40px;
        text-align: left;
    }
    .bf-4{
        height:80px;
        text-align: left; 
    }
    .bf-4-1{
        height: 45px;
        border-bottom: 1px solid #cccccc
    }
    .bf-font{
        display:block;
        padding-top:12px;
        padding-left:15px;
        font-size:16px
    }

</style>
