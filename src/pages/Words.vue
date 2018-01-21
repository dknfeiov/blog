<template>
 <div class="box-container">

        <!-- 留言 -->
        <div class="words">
            <div class="tip">留下你的喵语</div>
            <div class="content">
                <textarea placeholder="your idea"></textarea>
                <div class="face">
                    <img src="../assets/emoj.png" alt="">
                    <span>添加表情</span>
                </div>
                <button class="submitWords();">喵喵</button>
            </div>
        </div>

        <!-- 留言列表 -->
        <div class="wordsList">
            <div class="tip">全部留言
                <span>(888条)</span>
            </div>
            <div class="words-item">
                <img src="../assets/tx3.jpg">
                <div class="right">
                    <div class="words-detail">
                      <span class="name">王五</span>
                      <span class="date">2017-02-24</span>
                      <div class="content">随我一道除暴安良</div>
                    </div>
                </div>
            </div>
            <div class="words-item">
                <img src="../assets/tx1.jpg">
                <div class="right">
                    <div class="words-detail">
                      <span class="name">流风若水</span>
                      <span class="date">2017-03-24</span>
                      <div class="content">今天天气不错</div>
                    </div>
                    <!-- 留言的评论 -->
                    <div class="words-item comment-box">
                        <img src="../assets/tx2.jpg">
                        <div class="right">
                          <div class="words-detail">
                            <span class="name">上尚若水</span>
                            <span class="date">2017-03-25</span>
                            <div class="content">我们名字好像啊</div>
                          </div>
                        </div>
                    </div>
                    <div class="words-item comment-box">
                        <img src="../assets/tx1.jpg">
                        <div class="right">
                          <div class="words-detail">
                            <span class="name">流风若水</span>
                            <span class="date">2017-03-25</span>
                            <div class="content">是啊，好巧啊，哈哈哈哈</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page">
                <a href="javascript:void(0);" class="box active">1</a>
                <a href="javascript:void(0);" class="box">2</a>
                <a>...</a>
                <a href="javascript:void(0);" class="box nextPage">
                    下一页
                </a>
            </div>
        </div>

    </div>

</template>

<script>
export default {
  name: 'Words',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang='scss' scoped>

.box-container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 70px;
  background-color: #fff;
}

.words {
  width: 1000px;
  .tip {
    // font-weight: bold;
    font-size: 24px;
    color: #333;
  }
  .content {
    position: relative;
    width: 100%;
    margin-top: 60px;
    textarea {
      background-color: #f4f4f4;
      height: 100px;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 10px 30px;
      font-size: 16px;
      color: #b2b2b2;
    }
    textarea:focus{
      border: 1px solid #ddd;
    }
    .face {
      display: inline-block;
      img {
        
        margin-top: 12px;
        width: 20px;
        height: 20px;
      }
      span {
        margin-left: 5px;
        font-size: 16px;
        color: #b2b2b2;
      }
    }
    button {
      float: right;
      margin-top: 12px;
      width: 100px;
      height: 32px;
      border: 0px;
      border-radius: 4px;
      background-color: #63ae9f;
      color: #fff;
      text-align: center;
    }
  }
  .content::before {
    content: "喵";
    text-align: center;
    position: absolute;
    background: url(../assets/shape-green.png) no-repeat;
    height: 49px;
    line-height:49px;
    width: 57px;
    left: -39px;
    top: -20px;
    font-size: 18px;
    color: #fff;
  }
}


.wordsList {
  width: 1000px;
  margin-top: 90px;
  .tip {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    span{
      color:#b2b2b2;
    }
    margin-bottom:50px;
  }
  // 留言详情
  .words-item {
    padding-top: 20px;
    padding-bottom: 40px;
    display: flex;
    border-bottom: 1px dotted #dcddde;
    img {
      border-radius: 50%;
      display: inline-block;
      width: 50px;
      height: 50px;
      vertical-align: top;
    }
    .right {
      flex:1;
      display: inline-block;
      margin-left: 24px;
      .words-detail {
        height: 80px;
        .name {
          font-size: 18px;
          font-weight: bold;
          color: #3a6887;
        }
        .date {
          margin-left: 20px;
          font-size: 12px;
          color: #b2b2b2;
        }
        .content {
          margin-top: 12px;
          font-size: 18px;
        }
      }
      
    }
  }
  // 留言下的评论
  .words-item.comment-box {
    padding-left: 20px;
    padding-bottom: 0px;
    background-color: #ededed;
  }

  .page {
    width: 400px;
    margin: 0 auto;
    margin-top: 70px;
    .box {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      padding: 0px 10px;
      border:1px dotted #dcddde;
      background-color: #fff;
      color: black;
      text-align: center;
      text-decoration: none;
    }
    .box:not(:first-of-type) {
      margin-left: 10px;
    }
    .box.active {
      background-color: grey;
      color: #fff;
    }
    .box:hover{
      background-color: grey;
      color: #fff;
    }

  }
}
</style>
