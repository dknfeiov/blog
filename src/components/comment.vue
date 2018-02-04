// 评论组件

<template>

    <!-- 留言列表 -->
    <div class='wordsList'>
      <div class='tip'>全部留言
        <span>({{list.length}})</span>
      </div>

      <div class='words-item' v-for='item in list'>
        <img v-bind:src='item.userIcon'>
        <div class='right'>
          <div class='words-detail'>
            <span class='name'>{{item.userName}}</span>
            <span class='date'>{{item.date}}</span>
            <div class='content' v-html="item.content"></div>
          </div>
          <!-- 留言的评论 -->
          <div class='words-item comment-box' v-for='child in item.children'>
            <img v-bind:src='child.userIcon'>
            <div class='right'>
              <div class='words-detail'>
                <span class='name'>{{child.userName}}</span>
                <span class='date'>{{child.date}}</span>
                <div class='content' v-html="child.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='page'>
        <a href='javascript:void(0);' class='box active'>1</a>
        <a href='javascript:void(0);' class='box'>2</a>
        <a>...</a>
        <a href='javascript:void(0);' class='box nextPage'>
          下一页
        </a>
      </div>
    </div>

</template>


<style lang="scss" scoped type="text/scss">
.wordsList {
  width: 1000px;
  margin-top: 90px;
  .tip {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    span {
      color: #b2b2b2;
    }
    margin-bottom: 50px;
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
      flex: 1;
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
    text-align: center;
    .box {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      padding: 0px 10px;
      border: 1px dotted #dcddde;
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
    .box:hover {
      background-color: grey;
      color: #fff;
    }
  }
}
</style>


<script>
export default {
  name: 'Comment',
  props: {
    list: Array,
    page: Object
  },
  methods: {},
  created: function () {
    console.log('Comment created!')
  }
}
</script>

