<template>
    <div class="detail">
        <div class="top">
            <div class="top-left-back">
                <router-link to="/"><i class="iconfont icon-fanhui5"></i></router-link>
            </div>
            <div class="top-middle-title">
                <span>{{source}}--{{$route.params.id}}</span>
            </div>
            <div class="top-right-attention">
                <el-button type="danger">关注</el-button>
            </div>
        </div>
        <div class="middle">
            <div class="middle-title">
                <span><strong>{{title}}</strong></span>
                <span class="middle-title-author">{{source}}&nbsp;&nbsp;{{month}}-{{day}}&nbsp;&nbsp;{{time}}</span>
            </div>
            <div class="middle-text">   
                {{intro}}
            </div>
            <div class="middle-bottom">
                <!-- 标签显示 -->
                <div class="middle-tags" style="height:20px">
                    <el-tag type="danger" v-for="(item,index) in tags" :key="index" style="margin-right:5px;float:left">{{item}}</el-tag>
                </div>
                <!-- 评论专区，显示评论数， -->
                <div class="middle-recoment" style="clear:both;margin-top:20px">
                    <el-button type="info" size="small" round icon="iconfont icon-31dianzan">&nbsp;{{likeNum}}</el-button>
                    <!-- <el-button type="info" size="small" round>圆形按钮</el-button> -->
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-row>
                <el-col :span="12">
                    <el-input placeholder="写评论" size="small" class="bottom-recoment">
                        <i slot="prefix" class="iconfont icon-shuru"></i>
                    </el-input>
                </el-col>
                <el-col :span="4" style="margin-left:15px">
                    <i class="iconfont icon-pinglun1"></i>
                    <span style="display:block;font-size:10px">评论</span>
                </el-col>
                <el-col :span="4" style="margin-left:-15px">
                    <i class="iconfont icon-31shoucang"></i>
                    <span style="display:block;font-size:10px">收藏</span>
                </el-col>
                <el-col :span="4" style="margin-left:-15px">
                    <i class="iconfont icon-31fenxiang"></i>
                    <span style="display:block;font-size:10px">分享</span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    // 新闻详情页面
    export default {
        name: "detail",
        data() {
            return {
                source: "",
                title:"",
                intro:"",
                month:new Date().getMonth()+1,
                day:new Date().getDate(),
                time:new Date().getHours()+":"+new Date().getMinutes(),
                tags:[],
                likeNum:0
            }
        },
        created() {
            // axios.get("https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/article/info", {
            //     params: {
            //         id: this.$route.params.id
            //     }
            // }).then(response => {
            //     //获取对象，显示数据
            //     console.log(response.data.data);
            //     this.source = response.data.data.source;
            //     this.title = response.data.data.title;
            //     this.intro = response.data.data.intro;
            //     this.tags=response.data.data.tags;
            //     this.likeNum=response.data.data.like_num;
            // }).catch(function(error) {
            //     console.error("异常");
            // });axios.get("https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/article/info", {
            //     params: {
            //         id: this.$route.params.id
            //     }
            // }).then(response => {
            //     //获取对象，显示数据
            //     console.log(response.data.data);
            //     this.source = response.data.data.source;
            //     this.title = response.data.data.title;
            //     this.intro = response.data.data.intro;
            //     this.tags=response.data.data.tags;
            //     this.likeNum=response.data.data.like_num;
            // }).catch(function(error) {
            //     console.error("异常");
            // });
        }
    }
</script>

<style>
    .detail {
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
    }
    .top {
        height: 60px;
        width: 100%;
        background-color: #f9fcfc;
        border-bottom: 1px solid #C0C0C0;
    }
    .top-left-back {
        float: left;
        padding-left: 10px;
        padding-top: 10px
    }
    .icon-fanhui5 {
        font-size: 40px;
    }
    .top-middle-title {
        font-size: 20px;
        float: left;
        padding-left: 20px;
        padding-top: 20px
    }
    .top-right-attention {
        position: absolute;
        right: 10px;
        padding-top: 10px;
    }
    .middle {
        width: 97%;
        height: 570px;
        border-bottom: 1px solid #CCCCCC;
        background-color: #f9fcfc;
        overflow-y: scroll;
        padding: 10px 0px 2px 15px
    }
    .middle-title {
        text-align: left;
        font-family: "Microsoft YaHei";
        font-size: 20px;
        /* font-weight:blod */
    }
    .middle-title-author {
        display: block;
        font-size: 12px;
        margin-top: 10px
    }
    .middle-text {
        text-align: left;
        margin-top: 10px;
        font-size: 16px;
        font-family: "Microsoft YaHei";
        line-height: 150%
    }
    .middle-tags{
        margin-top:10px
    }
    .bottom {
        padding: 0px;
        height: 40px;
        background-color: #D3D3D3
    }
    .icon-shuru {
        font-size: 20px;
        color: black;
    }
    .bottom-recoment {
        padding-top: 3px;
        padding-left: 10px;
    }
    .el-input__prefix {
        margin-top: 6px;
        margin-left: 10px;
    }
    .icon-pinglun1,
    .icon-31shoucang,
    .icon-31fenxiang {
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    a:link {
        color: black;
    }
    a:visited {
        color: black;
    }
</style>
