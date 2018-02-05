<template>

  <div id="app">
    <div class="header">
      <div class="title">
        徐思思<span>个人博客</span>
      </div>
      <div class="welcome">
        欢迎来到徐思思的技术小猫屋～～
      </div>
    </div>

    <div class="main">
      <div class="nav-content">
        <div class="navs">
          <router-link class="nav-item" active-class="active" to="/index" >首页</router-link>
          <router-link class="nav-item" active-class="active" to="/footPrintList">足迹</router-link>
          <router-link class="nav-item" active-class="active" to="/technology">技术</router-link>
          <router-link class="nav-item" active-class="active" to="/essay">随笔</router-link>
          <router-link class="nav-item" active-class="active" to="/words">留言</router-link>
          <router-link class="nav-item" active-class="active" to="/aboutMe">关于我</router-link>
        </div>
      </div>


      <router-view/>
    </div>

  </div>
</template>

// scoped
<style lang="scss" >

  @import 'assets/scss/emoji-sprite.scss';
  @import 'assets/scss/font-define.scss';
  * {
    box-sizing:border-box;
  }

  #app .header{
      margin:0 auto;
      padding:0px 160px;
      padding-top:25px;
      height:200px;
      .title{
          font-family: wyjzfs;
          line-height: 101px;
          font-size: 81px;
          font-weight: bold;
        span{
          font-weight: normal;
          color:rgba(128, 128, 128, 0.904);
        }
      }
      .welcome{
        font-family: hylmt;
        font-size:20px;
        color:rgba(143, 136, 136, 0.281);
      }
  }

  #app .main{
    margin:0 auto;
    .nav-content{
        height:70px;
        line-height: 70px;
        width:100%;
        background-image:url('./assets/back.png');
        position: relative;
        .navs{
            width:1000px;
            margin:0 auto;
            .nav-item{
              display: inline-block;
              height:100%;
              min-width: 75px;
              text-align: center;
              text-decoration: none;
              padding:0px 20px;
              color:#fff;
              font-size:18px;
            }
            .nav-item:first-of-type{
              margin-left:20px;
            }
            .nav-item.active{
              background: url('assets/shape.png') no-repeat 3px 3px;
              font-size: 12px;
              color:#607182;
              position: relative;
              // left: -20px;
              // border-right: 20px solid transparent;
              // -webkit-filter: drop-shadow(20px 0);
              // filter: drop-shadow(20px 0);
            }
        }
        &:after{
          display: block;
          width:215px;
          height:180px;
          content:'';
          background: url('assets/cat-books.png') no-repeat 0px 0px;
          position: absolute;
          right: 150px;
          top: -150px;

        }
    }

  }
</style>


<script>
export default {
  name: 'app'
}
</script>
