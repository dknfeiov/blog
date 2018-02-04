<template>
  <div class="box-container">

      <div class="footprint-list">

          <div class="footprint">
              <div class="info">
                <div class="title">我学习Android的一些技巧</div>
                <div class="legend">
                    <span>2015-01-09</span>
                    <span>15:20:21</span>
                    <span class="read">188888</span>
                    <span class="words">8883</span>
                </div>
                <div class="content">今天更大家分享一卡一些学习的方法，我学习Android的一些技巧,注意 IE7和更早的版本不支持"继承"的值。 IE8需要定义！DOCTYPE。 IE9支持"继承"。</div>
                <div class="complete">
                    <div class="option">完成指数</div>
                    <div class="ratio"></div>
                </div>
                <div class="commend">
                    <div class="option">推荐指数</div>
                    <div class="ratio"></div>
                </div>
              </div>
              <img src="../assets/book1.jpg" >
          </div>

      </div>

  </div>
</template>


<style lang="scss" scoped type="text/scss">
    .box-container{
        width:1000px;
        margin:0 auto;
    }

    .footprint{
        display: flex;
        margin-top:50px;
        padding-bottom:20px;
        border-bottom:2px solid #d9d9d9;
        .info{
            .title {
                text-indent: -15px;
                font-size:36px;
                color:#323232;
                font-weight:bold;
            }

            .legend{
                margin-top:24px;
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

            .content{
                margin-top:30px;
                font-size:14px;
                line-height:26px;
                color:#969696;
            }

            .complete{
                margin-top:50px;
                .option{
                    font-size:14px;
                    color:#333;
                    font-weight: bold;
                }
                .ratio{

                }
            }

            .commend{
                margin-top:30px;
                .option{
                    font-size:14px;
                    color:#333;
                    font-weight: bold;
                }
                .ratio{

                }

            }


        }
        img{
            width:208px;
            height:280px;
        }

    }
</style>



<script>
export default {
  name: 'FootPrintList'
}
</script>
