<template>
    <div class="detail">
        <div class="top">
            <div class="top-left-back">
                <i class="iconfont icon-fanhui5"></i>
            </div>
            <div class="top-middle-title">
                <span>{{title}}</span>
            </div>
            <div class="top-right-attention">
                <el-button type="danger">关注</el-button>
            </div>
        </div>
        <div class="middle">
            <div class="middle-title">
                <span><strong>中国是否也会采取一切工具反击美国？王毅：你这问题很有攻击性</strong></span>
                <span class="middle-title-author">{{title}}&nbsp;&nbsp;03-08&nbsp;&nbsp;10:33</span>
            </div>
            <div class="middle-text">
                【环球网快讯】十三届全国人大一次会议新闻中心于今日上午10时在梅地亚中心多功能厅举行记者会，邀请外交部部长王毅就“中国外交政策和对外关系”回答中外记者提问，这也是王毅外长第五次在两会记者会回答中外记者提问。
                <br><br>彭博社记者：您好，美国总统特朗普说，他愿意采取一切工具来防止中国的国有经济模式破坏国际竞争，那么请问，中国是否也愿意采取一切工具来反击？如果是的话，中国将会采取哪些工具呢？谢谢。
                <br><br>王毅：你这个问题本身就很有攻击性，当然我认为你主要还是要问中美之间的关系。作为外长，我有责任首先就我们的对美政策再做一次明确的重申。中美双方达成的重要的共识是很多的，我们都认为中美在维护世界和平、稳定、繁荣方面拥有广泛共同利益和重要责任，双方将在互利互惠基础上拓展各领域合作，在相互尊重基础上管控好分歧矛盾，加强两国人民之间的相互了解与友谊，合作应对重大地区和全球性挑战，推动中美关系持续、健康和稳定发展。
                <br><br>中美之间主要是合作，两国人民之间有着非常广泛和密切的交往，我来这之前看到一个美国民调的最新数字，这个数字表明美国民众对中国的好感度超过了50%，是近30年来最高的数字，而且近年来在不断地提高。我希望记者朋友们在看到问题的时候，也要看到这些积极因素的生长。
                <br><br>作为世界上最大的发展中国家和最大的发达国家，中美合作将造福两国，也将惠及世界。如果说中美之间有竞争的话，那也应该是良性和积极竞争，这在国际交往当中也是很正常的。换句话说，中美可以有竞争，不必做对手，更需当伙伴。
                <br><br>中国将继续坚持走自己选择的发展道路，中国的发展振兴不可阻挡，这已成为国际社会的普遍认知。美国一些人认为中国因此要取代美国在国际上的作用，这是一个根本性的战略误判。我们走的是中国特色社会主义道路，核心要义是坚持和平发展，成功之处在于合作共赢。这与传统大国曾经走过的路是完全不同的，而且正在得到越来越多国家的认同和欢迎。也就是说中国越发展，越能为世界做贡献。当然，中国实现自身现代化的道路还很长，我们不会也不必去取代美国的作用。中美双方应该在遵守中美三个联合公报和双方各项共识基础上相互尊重、优势互补、互利共赢。中美关系数十年历经风雨，但是对话与合作始终是主线，因为这是唯一明智也是现实的选择。
                <br><br>大家关心中美的贸易摩擦。我想告诉大家的是，历史的经验教训证明，打贸易战从来都不是解决问题的正确途径。尤其在全球化的今天，选择贸易战更是抓错了药方，结果只会损人害己，中方必将做出正当和必要的反应。作为两个利益高度融合的大国，作为世界第一和第二大经济体，中美既要对两国人民负责，也要对世界各国负责。我们还是希望双方心平气和地坐下来，通过平等和建设性对话，共同找出一个互利双赢的解决办法。
            </div>
        </div>
        <div class="bottom">
            <el-row >
                <el-col :span="12">
                    <el-input placeholder="写评论" size="small" class="bottom-recoment" >
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
    // 新闻详情页面
    export default {
        name: "detail",
        data() {
            return {
                title: "环球网"
            }
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
    .bottom{
        padding: 0px;
        height:40px;
        background-color: #D3D3D3
    }
    .icon-shuru{
        font-size:20px;
        color: black;
    }
    .bottom-recoment{
        padding-top:3px;
        padding-left:10px;       
    }
    .el-input__prefix{
        margin-top:6px;
        margin-left:10px;
    }
    .icon-pinglun1,.icon-31shoucang,.icon-31fenxiang {
        font-size:16px;
    }
</style>
