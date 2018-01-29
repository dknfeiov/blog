

<template>
  <div class='box-container'>

    <!-- 留言 -->
    <div class='words'>
      <div class='tip'>留下你的喵语</div>
      <div class='content'>
        <textarea placeholder='your idea' v-model="info.content"></textarea>
        <div class='face'>
          <img src='../assets/emoj.png' alt=''>
          <span>添加表情</span>
        </div>
        <button @click='addWords();'>喵喵</button>
      </div>
    </div>

    <!-- 留言列表 -->
    <Comment :list="list" :page="page"></Comment>

  </div>

</template>

<script>
  import Comment from '@/components/comment'
  export default {
    name: 'Words',
    components: {
      Comment
    },
    data () {
      return {
        info: {
          userName: '赵雅尼萨',
          userIcon: '/static/tx3.jpg',
          content: ''
        },
        list: [],
        page: {}
      }
    },
    methods: {
      // 获取评论列表
      getWordsList: function () {
        this.$http.get('/static/wordsList.json').then(res => {
          if (res.body.code === 200) {
            const data = res.body.data
            this.list = data.list
            this.page = data.page
          }
        })
      },
      addWords: function () {
        this.list.push(Object.assign({
          date: new Date()
        }, this.info))
      }
    },
    created: function () {
      // `this` 指向 vm 实例
      this.getWordsList()
    }
  }
</script>


<style lang='scss' scoped type='text/scss'>

  .box-container {
    width: 1000px;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 70px;
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
      textarea:focus {
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
      content: '喵';
      text-align: center;
      position: absolute;
      background: url(../assets/shape-green.png) no-repeat;
      height: 49px;
      line-height: 49px;
      width: 57px;
      left: -39px;
      top: -20px;
      font-size: 18px;
      color: #fff;
    }
  }

</style>
