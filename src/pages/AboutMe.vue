<template>
<div class="box-container">

    <div class="top">
        <img src="../assets/xusisi.png" alt="">
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


    <div class="describe">  
        <div class="tip">
            <img src="../assets/footprint-left.png"> 
            <span>个人简介</span>
            <img src="../assets/footprint-right.png"> 
        </div>
        <div class="content">
            其实当时在互联网界已经有过一些统一样式表语言的建议了，但CSS是第一个含有“层叠”丰意的样式表语言。在CSS中，一个文件的样式可以从其他的样式表中继承。读者在有些地方可以使用他自己更喜欢的样式，在其他地方则继承或“层叠”作者的样式。这种层叠的方式使作者和读者都可以灵活地加入自己的设计，混合每个人的爱好。
        </div>
    </div>


    <div class="skill">
        <div class="tip">
            <img src="" alt=""> 
            <span>掌握技能</span>
            <img src="" alt=""> 
        </div>
        <div class="skill-content">
            <div class="skill-item">
                <div class="box">
                    <div class="degree">
                        Java
                        <div class="shadow"></div>
                    </div>
                    
                </div>
                <div class="text">JavaScript</div>
            </div>
            <div class="skill-item">
                <div class="box">
                    <div class="degree">
                        C++
                        <div class="shadow"></div>
                    </div>
                </div>
                <div class="text">Python</div>
            </div>
        </div>
    </div>

</div>
</template>


<style lang="scss" scoped>
    .box-container {
        position: relative;
        width: 1000px;
        margin: 0 auto;
        padding-top: 70px;
        
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
        img{
            width:238px;
            height:238px;
            border-radius: 50%;
        }
        .aboutMe{
            display: inline-block;
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
                }
                .footPrint{
                    background-image: url(../assets/footprint.png);
                    background-repeat: no-repeat;
                    background-repeat-x: repeat;
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
    }


    .info{
        margin-top:46px;
        text-align: left;
        .info-item{
            width:250px;
            margin:0 auto;
            img{
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
            margin-top:104px;
            .skill-item{
                text-align: center;
                display: inline-block;
                width: 20%;
                .box{
                    position: relative;
                    display: inline-block;
                    border-radius: 50%;
                    height:106px;
                    width: 106px;
                    border: 1px solid #dfdfdf;
                    box-shadow: 5px 5px #7d7d7d;
                    .degree{
                        background-color: red;
                        position: absolute;
                        margin: auto;
                        top:0;bottom:0;left:0;right:0;
                        font-size:24px;
                        text-align:center;
                        border-radius: 50%;
                        line-height:88px;
                        height:88px;
                        width: 88px;
                        .shadow{
                            width:100%;
                            position: absolute;
                            top:0px;
                            height:30px;
                            background-color:white;
                        }
                    }
                    
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
    data () {
        return {
            info: {
                name: '徐思思',
                phone: '13045875265',
                email: '5151515@qq.com',
                address: '广东 | 深圳'
            }
        }
    }
}
</script>
