<template>
    <div class="hotNews">
        <el-row>
            <el-col :span="col1">
                <div class="title">
                    <div>{{title}}</div>
                </div>
                <div class="author" style="clear:both;">
                    <el-tag type="danger" size="mini">置顶</el-tag>&nbsp;&nbsp;&nbsp;
                    <span>{{publisher}}</span>&nbsp;&nbsp;<span>{{recommend}}评论</span>
                </div>
            </el-col>
            <el-col :span="col2">
                <img :src="headImg" alt="headImg" width="120" height="80">
            </el-col>
        </el-row>
        <br>
        <el-row>
            <el-col :span="col1">
                <div class="title">
                    <div>{{title}}</div>
                </div>
                <div class="author" style="clear:both;">
                    <el-tag type="danger" size="mini">置顶</el-tag>&nbsp;&nbsp;&nbsp;
                    <span>新华网</span>&nbsp;&nbsp;<span>62评论</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    //置顶新闻，只放置政治信息
    export default {
        name: "hotNews",
        data() {
            return {
                title: "习近平：发展是第一要务，人才是第一资源，创新是第一动力",
                headImg: "../../../static/img/headImg.jpg",
                col1:16,
                col2:8,
                publisher:"新华社",
                recommend:62
            }
        }
    }
</script>

<style>
    .hotNews {
        clear: both;
        width: 97%;
        height: 90px;
        margin: 0px;
        padding-top: 10px;
        margin-top: -10px;
        text-align: left;
        border-bottom: 1px solid #CCCCCC
    }
    .title {
        font-family: 'Microsoft YaHei'
    }
    .author {
        margin-top: 10px;
        font-size: 10px;
    }
</style>
