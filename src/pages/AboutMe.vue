<template>
<div class="box-container">

    <div class="top">
        <img class="picture" src="../assets/xusisi.png" >
        <div class="self">
            <div class="aboutMe">
                <div class="first">关</div>
                <div class="second">
                    <span class="line"></span>
                    <span >于</span>
                    <span class="footPrint"></span>
                    <span class="specail">充满好奇心，爱好生活的程序媛</span>
                </div>
                <div class="three">
                    <span class="vertical">About Me</span>
                    <span >我</span>
                </div>
                <div class="four"></div>
            </div>
            <div class="info">
                <div class="info-item">
                    <img src="../assets/person.png">
                    <span>{{info.name}}</span>
                </div>
                <div class="info-item">
                    <img src="../assets/phone.png">
                    <span>{{info.phone}}</span>
                </div>
                <div class="info-item">
                    <img src="../assets/email.png">
                    <span>{{info.email}}</span>
                </div>
                <div class="info-item">
                    <img src="../assets/address.png">
                    <span>{{info.address}}</span>
                </div>
            </div>
        </div>
        
    </div>

    <div class="describe">
        <div class="tip">
            <img src="../assets/footprint-left.png">
            <span>个人简介</span>
            <img src="../assets/footprint-right.png">
        </div>
        <div class="content">
            一个有趣的，热爱生活的程序媛
        </div>
    </div>


    <div class="skill">
        <div class="tip">
            <img src="../assets/footprint-left.png">
            <span>掌握技能</span>
            <img src="../assets/footprint-right.png">
        </div>
        <div class="skill-content">
            <div class="skill-item" v-for="item in skillList">
                <div class="out-cycle">
                    <div class="in-cycle">
                        <div class="name">{{item.name}}</div>
                        <div class="degree" v-bind:style="{ 'background-color': item.color}"></div>
                        <div class="shadow" v-bind:style="{ 'bottom': `${item.degree}%`}"></div>
                    </div>
                </div>
                <div class="text">{{item.tip}}</div>
            </div>
        </div>
    </div>

</div>
</template>


<style lang="scss" scoped type="text/scss">

    .box-container {
        position: relative;
        width: 1000px;
        margin: 0 auto;
        padding-top: 70px;
        padding-bottom:165px;
    }
    .box-container:before {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-top: 220px solid #7cc79e;
        border-right: 220px solid transparent;
    }
    .top{
        margin-top:134px;
        text-align:center;
        .picture{
            vertical-align: top;
            margin-top: 60px;
            width:238px;
            height:238px;
            border-radius: 50%;
        }
        .self{
            display: inline-block;
            .aboutMe{
                // background-image: url(../assets/aboutMe.png);
                color:#23415d;
                .first{
                    font-size:110px;
                }
                .second{
                    span {
                        font-size:50px;
                    }
                    .line{
                        height:1px;
                        background-color: #23415d;
                        display: inline-block;
                        width:70px;
                        vertical-align: text-top;
                    }
                    .footPrint{
                        display: inline-block;
                        width:60px;
                        height: 30px;
                        vertical-align: text-top;
                        background-image: url(../assets/footprint.png);
                        background-repeat: repeat no-repeat;
                    }
                    .specail{
                        font-size:16px;
                        font-style: italic;
                        margin-left:12px;
                    }
                }
                .three{
                    span{
                        font-size:80px;
                        margin-left: -30px;
                    }
                    .vertical{
                        color:#aec0d1;
                        display: inline-block;
                        font-size:22px;
                        transform:rotate(90deg);
                        /* -ms-transform:rotate(90deg);
                        -moz-transform:rotate(90deg);
                        -webkit-transform:rotate(90deg);
                        -o-transform:rotate(90deg);  */
                    }
                }
                .four{
                    margin:0 auto;
                    width:1px;
                    height:160px;
                    background-color: #23415d;
                }
            }
            .info{
                margin-top:46px;
                text-align: left;
                .info-item{
                    width:250px;
                    margin-left:100px;
                    // margin:0 auto;
                    img{
                        vertical-align: text-top;
                        height:20px;
                        width:20px;
                    }
                    span {
                        margin-left:20px;
                        display: inline-block;
                        font-size:20px;
                        line-height:20px;
                        color:#23415d;
                    }
                }
                .info-item:not(:first-of-type){
                    margin-top:24px;
                }
            }

        }
        
    }


  


    .describe{
        text-align:center;
        margin-top:162px;
        .tip{
            margin:0 14px;
            font-size:36px;
            color:#23415d;
            font-weight: bold;
        }
        .content{
            margin-top:50px;
            font-size:18px;
            color:#7d7d7d;
        }
    }


    .skill{
        margin-top:134px;
        text-align:center;
        .tip{
            font-size:36px;
            color:#23415d;
            font-weight: bold;
        }
        .skill-content{
            display: flex;
            flex-wrap: wrap;
            margin-top:104px;
            .skill-item{
                text-align: center;
                display: inline-block;
                width: 20%;
                min-width: 120px;
                .out-cycle{
                    position: relative;
                    display: inline-block;
                    border-radius: 50%;
                    height:106px;
                    width: 106px;
                    border: 1px solid #dfdfdf;
                    // box-shadow: 5px 5px #7d7d7d;
                    .in-cycle{
                        overflow: hidden;
                        position: absolute;
                        margin: auto;
                        top:0;bottom:0;left:0;right:0;
                        border-radius: 50%;
                        line-height:88px;
                        height:88px;
                        width: 88px;
                        .name{
                            z-index:999;
                            position: absolute;
                            width: 100%;
                            text-align: center;
                            color: #fff;
                            font-size:14px;
                        }
                        .degree{
                            border-radius: 50%;
                            height:100%;
                        }
                        .shadow{
                            z-index:99;
                            position: absolute;
                            // border-radius: 50%;
                            width: 100%;
                            height:100%;
                            background-color:white;
                        }
                    }
                }
                .out-cycle::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    margin: 0 auto;
                    bottom: -25px;
                    left: 0px;
                    right: 0px;
                    width: 60px;
                    height: 1px;
                    background-color: rgba(134, 129, 129, 0.1);
                    box-shadow: 0px 0px 10px #868181;
                    border-radius: 50%;
                }
                .text{
                    margin-top:30px;
                    font-size:14px;
                    color:#b0b0b0;
                }
            }
        }
    }

</style>


<script>
/* eslint-disable */
export default {
    name: 'AboutMe',
    methods : {
        getSkillList: function () {
            this.$http.get('/static/skillList.json').then(res => {
                if (res.body.code === 200) {
                    const list = res.body.data.list
                    const colorlength = this.colors.length
                    list.map((item , index) => {
                        item.color = this.colors[index % colorlength]
                    })
                    this.skillList = list;
                }
            })
        },
    },
    created: function() {
        this.getSkillList();
    },
    data () {
        return {
            info: {
                name: '徐思思',
                phone: '13045875265',
                email: '5151515@qq.com',
                address: '广东 | 深圳'
            },
            skillList: [],
            colors: [
                '#20b370','#6934f3','#249dd9','#df7016','#dd220d',
                '#3759ed','#fbb320','#e4285b','#61c314','#19c4da'
            ]

        }
    }
}
</script>
