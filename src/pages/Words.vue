

<template>
  <div class='box-container'>

    <!-- 留言 -->
    <div class='words'>
      <div class='tip'>留下你的喵语</div>
      <div class='content'>
        <!-- XSS @TODO -->
        <!-- v-html="info.content" -->
        <div class="input" id='input' contenteditable="true" @input="inputChange($event);"></div>
        <!-- <textarea placeholder='your idea' v-model="info.content"></textarea> -->
        <div class='face' @click="modalVisible=true">
          <img src='../assets/emoj.png'>
          <span >添加表情</span>
          <vue-emoji v-if="modalVisible" @select="selectEmoji($event)" v-clickoutside='hide'></vue-emoji>
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
  import vueEmoji from '@/components/emoji'
  import clickoutside from '@/utils/clickoutside'
  import moment from 'moment'
  // import * as emojiApi from '@/utils/emoji'
  export default {
    name: 'Words',
    components: {
      Comment, vueEmoji
    },
    directives: {
      clickoutside
    },
    data () {
      return {
        modalVisible: false,
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
        moment.locale()
        this.list.push(Object.assign({
          date: moment(new Date()).format('YYYY-MM-DD')
        }, this.info))
      },
      hide: function () {
        this.modalVisible = false
      },
      selectEmoji: function (event) {
        // const img = emojiApi.emoji(event)
        event = event.replace(/:/g, '')
        // const div = `<div class="sprite-${event}" contenteditable="false"></div>`
        const div = document.createElement('div')
        div.classList.add(`sprite-${event}`)
        div.contentEditable = false
        const input = document.querySelector('#input')
        input.appendChild(div)
        // this.info.content += div
        this.info.content = input.innerHTML
        console.log(this.info.content)
        this.hide()
      },
      inputChange: function (event) {
        const value = event.target.innerHTML
        this.info.content = value
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
      .input {
        background-color: #f4f4f4;
        height: 100px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #ddd;
        padding: 10px 30px;
        font-size: 16px;
        color: #b2b2b2;
      }
      .input:focus {
        border: 1px solid #ddd;
        // outline: 0px;
      }
      .face {
        position: relative;
        display: inline-block;
        img {
          vertical-align: bottom;
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
      button:hover {
        border:1px solid #ddd;
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
