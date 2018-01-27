
<template>

<div class="box-container">

    <div class="main-top">

        <div class="title first">
            <img src="../assets/cat-read.png">
            <div class="text">近期足迹感言</div>
        </div>

        <div class="pic-carousel">
            <img class="pic-item" src="../assets/book1.jpg">
            <img class="pic-item" src="../assets/book2.jpg">
            <img class="pic-item" src="../assets/book1.jpg">
            <!-- <img class="next" src="../assets/arrow.png" > -->
            <div class="next"></div>
        </div>

        <div class="title">
            <img src="../assets/cat-compute.png">
            <div class="text">技术文章</div>
        </div>

        <div class="article-list">
            <div class="article">
                <div class="article-title">
                    我学习Android的一些技巧
                </div>
                <div class="article-content">
                    今天更大家分享一卡一些学习的方法，我学习Android的一些技巧,注意 IE7和更早的版本不支持"继承"的值。 IE8需要定义！DOCTYPE。 IE9支持"继承"。
                </div>
                <div class="infos">
                    <span>2015-01-09</span>
                    <span>15:20:21</span>
                    <span class="read">188888</span>
                    <span class="words">8883</span>
                </div>
                <div class="tags">
                    <span style="background-color:#c1c1b6;">工作积累</span>
                    <span style="background-color:#b5bbc1;">android</span>
                    <span style="background-color:#bbb5c1;">IT</span>
                </div>
            </div>
            <div class="article">
                <div class="article-title">
                    我学习Android的一些技巧-2
                </div>
                <div class="article-content">
                    今天更大家分享一卡一些学习的方法，我学习Android的一些技巧,注意 IE7和更早的版本不支持"继承"的值。 IE8需要定义！DOCTYPE。 IE9支持"继承"。
                </div>
                <div class="infos">
                    <span>2015-01-09</span>
                    <span>15:20:21</span>
                    <span class="read">23432</span>
                    <span class="words">234</span>
                </div>
                <div class="tags">
                    <span style="background-color:#bbb5c1;">IT</span>
                </div>
            </div>
        </div>
        <a href="/technology" class="more-article">更多文章>></a>
    </div>

    <div class="right">
        <div class="right-title">关于我</div>
        <div class="aboutMe">
            <img src="../assets/xusisi.png" alt="头像">
            <span class="special">写代码是一件很快乐的事情</span>
            <div class="visit">
                <div>
                    <span class="info-title">今日访问量：</span>
                    <span class="info-data">103</span>
                </div>
                <div>
                    <span class="info-title">总访问量：</span>
                    <span class="info-data">213213</span>
                </div>
                <div>
                    <span class="info-title">最后登录时间：</span>
                    <span class="info-data">2018-02-12</span>
                </div>
            </div>
        </div>

        <div class="right-title">留言墙</div>
        <div class="words-boundary">
            <div class="words-list">
                <div class="words-item">天下之大，无不有</div>
                <div class="words-item">草莽一种</div>
                <div class="words-item">浏览</div>
                <div class="words-item">气势</div>
            </div>
        </div>

        <div class="right-title">工具</div>
        <div class="tools">
            <div class="tool-item">
                <img src="../assets/tool1.png">
            </div>
            <div class="tool-item">
                <img src="../assets/tool1.png">
            </div>
            <div class="tool-item">
                <img src="../assets/tool1.png">
            </div>
            <div class="tool-item">
                <img src="../assets/tool1.png">
            </div>
            <div class="tool-item">
                <img src="../assets/tool1.png">
            </div>
        </div>
    </div>

    <div class="main-bottom">
        <div class="title">
            <img src="../assets/cat-maoqiu.png">
            <div class="text">随笔</div>
        </div>

        <div class="eaasy-list">
            <div class="essay">
                <div class="essay-date">2017-12-23&nbsp;&nbsp;15:12</div>
                <div class="essay-content">
                    最近的世界优点可怕
                </div>
            </div>
            <div class="essay">
                <div class="essay-date">2017-12-22&nbsp;&nbsp;15:12</div>
                <div class="essay-content">
                    但我还是i 嘻嘻哈哈
                </div>
            </div>
        </div>
        <div class="more-essay">
            <a href="/essay">查看更多</a>
        </div>


        <div class="title">
            <img src="../assets/cat-email.png">
            <div class="text">学习推荐网站</div>
        </div>

        <div class="commend-sites">
            <div class="site-item">
                <img src="../assets/site1.png" alt="">
            </div>
            <div class="site-item">
                <img src="../assets/site2.png" alt="">
            </div>
            <div class="site-item">
                <img src="../assets/site3.png" alt="">
            </div>
            <div class="site-item">
                <img src="../assets/site4.png" alt="">
            </div>
            <div class="site-item">
                <img src="../assets/site1.png" alt="">
            </div>
            <div class="site-item">
                <img src="../assets/site2.png" alt="">
            </div>
            <div class="site-item">
                <img src="../assets/site3.png" alt="">
            </div>
        </div>
    </div>



</div>




</template>


<style scoped lang="scss" type="text/scss">

    .box-container{
        width:1000px;
        margin:0 auto;
        padding-top: 58px;
        padding-bottom:70px;
        display: flex;
        flex-wrap: wrap;
    }

    .title{
        margin-top:90px;
        img{
            display: block;
        }
        .text{
            height:100px;
            position: relative;
            margin-top:16px;
            font-size:30px;
            color:#2c2c2c;
            font-weight: bold;
        }
        .text:after{
            content: '';
            display: block;
            position: relative;
            bottom: -31px;
            left: 5px;
            width: 50px;
            height: 3px;
            background-color: black;
        }
        &.first{
            margin-top:0px;
        }
    }

    .main-top{
        flex:1;
        display: inline-block;
        .pic-carousel{
            display:inline-block;
            height:232px;
            .pic-item{
                height: 232px;
                width:156px;
                &:not(:last-of-type){
                    margin-right:44px;
                }
            }
            .next{
                width:50px;
                display: inline-block;
                margin-left:50px;
                background:url('../assets/arrow.png') no-repeat center center ;
            }
        }

        .article-list{

            .article{
                padding-bottom:20px;
                border-bottom:2px solid #d9d9d9;
                .article-title {
                    text-indent: -15px;
                    margin:30px 0px;
                    font-size:36px;
                    color:#2c2c2c;
                    font-weight:bold;
                }

                .article-content{
                    font-size:14px;
                    line-height:26px;
                    color:#969696;
                }

                .infos{
                    margin-top:30px;
                    span{
                        margin-right:10px;
                        font-size:14px;
                        line-height:26px;
                        color:#969696;
                        &.read{
                            padding-left:24px;
                            background:url('../assets/eye.png') no-repeat left center ;
                        }
                        &.words{
                            padding-left:24px;
                            background:url('../assets/msg.png') no-repeat left center ;
                        }
                    }
                }

                .tags{
                    margin-top:20px;
                    span{
                        display: inline-block;
                        border-radius:6px;
                        height:28px;
                        line-height:28px;
                        padding: 0px 8px;
                        color:#fff;
                        min-width: 50px;
                        text-align: center;
                    }
                }
            }
        }
        .more-article{
            display: inline-block;
            text-decoration: none;
            margin-top:20px;
            font-size:20px;
            color:#177bec;
        }

    }

    // 右侧
    .right{
        display: inline-block;
        width:220px;
        .right-title{
            font-size:16px;
            color:#4c4c4c;
            font-weight:bold;
            margin: 20px 0px;
            border-top: 1px solid 999999;
        }
        .aboutMe{
            img{
                display: block;
                width:176px;
                height:146px;
                border-radius:6px;
                margin-top:30px;
            }
            .special{
                margin-top:20px;
                font-size:14px;
                color:#1b2730;
            }
            .visit{
                margin-top:20px;
                .info-title{
                    display:inline-block;
                    width:100px;
                    text-align: right;
                    font-size:13px;
                    color:#999999;
                }
                .info-data{
                    font-size:15px;
                    color:#233845;
                }
            }
        }

        .words-boundary{
            .words-list{
                .words-item{
                    padding-left:36px;
                    line-height:33px;
                    background: url('../assets/footprint3.png') no-repeat left center;
                    font-size:13px;
                    color:#808080;
                }
            }
        }

        .tools{
            display: flex;
            flex-wrap: wrap;
            .tool-item{
                width:20%;
                margin-right:5%;
                margin-top:10px;
                border-radius:6px;
                height:34px;
                border:1px solid #e2e1e5;
                position: relative;
                background-color: #fbfbfd;
                img{
                    position: absolute;
                    margin: auto;
                    top:0px;bottom:0px;left:0px;right:0px;
                    width:20px;
                    height:15px;
                }
                // &:not(:first-of-type){
                //     margin-left:6%;
                // }
            }
        }
    }

    .main-bottom{
        width:100%;
    }


    // 随笔
    .eaasy-list{
        .essay{
            .essay-date{
                background:url('../assets/dotted.png') no-repeat left center ;
                padding-left:36px;
                font-size:18px;
                color:#999999;
            }
            .essay-content{
                margin-left:6px;
                border-left:2px solid #eeeeee;
                padding-left:24px;
                padding-top:25px;
                padding-bottom:80px;
                font-size:22px;
                color:#4c4c4c;
            }
        }
    }
    .more-essay{
        padding-left:20px;
        a{
            display: inline-block;
            width:110px;
            height:38px;
            line-height:38px;
            border-radius:4px;
            border:1px solid #ccc;
            text-decoration: none;
            text-align: center;
            color:#999;
        }
    }

    // 推荐网址
    .commend-sites{
        display: flex;
        flex-wrap: wrap;
        .site-item{
            margin-right:20px;
            width:180px;
            position: relative;;
            height:90px;
            border:1px solid #dedede;
            margin-top:30px;
            img{
                position: absolute;
                margin: auto;
                top:0px;bottom:0px;left:0px;right:0px;
                width:100px;
                height:70px;
            }
        }
    }



</style>


<script>
export default {
  name: 'Index'
}
</script>
