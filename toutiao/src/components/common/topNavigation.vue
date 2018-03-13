<template>
    <div class="topNavigation">
        <div>
            <el-tabs v-model="activeName" style="margin-left:15px;">
                <el-tab-pane label="关注" name="first">

                </el-tab-pane>
                <el-tab-pane label="推荐" name="second">
                    <div class="slide-new">
                        <router-link :to="{name:'detail',params:{id:topId}}">
                            <top-news :title="topTitle" :publisher="topPublisher" :recommend="topRecommend"></top-news>
                        </router-link>
                        <router-link v-for="item in homeList" v-bind:key="item.hotId" :to="{name:'detail',params:{id:item.hotId}}">
                            <hot-news :title="item.hotTitle" :publisher="item.hotPublisher" :headImg="item.headImg" :recommend="item.hotRecommend"></hot-news>
                        </router-link> 
                    </div>
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
    import topNews from '@/components/common/topNews'
    import axios from 'axios'
    export default {
        name: "topNavigation",
        data() {
            return {
                msg: "这是顶部导航栏",
                activeName: "second",
                topId:"10000",
                topTitle:"这是怎么回事",
                topPublisher:"新华社",
                topRecommend:"70",
                homeList: []
            }
        },
        components: {
            hotNews,
            topNews
        },
        created() {
            axios.get("https://www.easy-mock.com/mock/5a83160c948cfd365a524088/apis/home/list").then(response=>{
                console.log(response.data.data.list);
                if(response.data.data.list.length>0){
                    this.topId=response.data.data.list[0].id;
                    this.topTitle=response.data.data.list[0].title;
                    this.topPublisher=response.data.data.list[0].source;
                    this.topRecommend=response.data.data.list[0].comment;
                }

                for(let i=1;i<response.data.data.list.length;i++){
                    let tmp={};
                    tmp.hotId=response.data.data.list[i].id;
                    tmp.hotTitle=response.data.data.list[i].title;
                    tmp.hotPublisher=response.data.data.list[i].source;
                    if(response.data.data.list[i].images.length>0){
                        tmp.headImg=response.data.data.list[i].images[0];
                    }else{
                        tmp.headImg="../../../static/img/headImg.jpg";
                    }                   
                    tmp.hotRecommend=response.data.data.list[i].comment;
                    this.homeList.push(tmp);
                }
                //后面的作为普通的热点新闻进行展示
            }).catch(function (error){
                console.error("异常");
            })
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
    .slide-new {
        height: 530px;
        width: 100%;
        overflow-y: scroll
    }
    /* a:visited {
            color:black;
        } */
    /* a:hover {
            color: black;
        } */
    /* a:active {
            color: black;
        } */
</style>
