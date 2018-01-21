import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import FootPrintList from '@/pages/FootPrintList'
import FootPrint from '@/pages/FootPrint'
import Essay from '@/pages/Essay'
import Words from '@/pages/Words'
import AboutMe from '@/pages/AboutMe'
import Article from '@/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/footPrintList',
      name: 'FootPrintList',
      component: FootPrintList
    }, {
      path: '/footPrint',
      name: 'FootPrint',
      component: FootPrint
    }, {
      path: '/words',
      name: 'Words',
      component: Words
    }, {
      path: '/aboutMe',
      name: 'AboutMe',
      component: AboutMe
    }, {
      path: '/essay',
      name: 'Essay',
      component: Essay
    }, {
      path: '/technology',
      name: 'Article',
      component: Article
    }, {
      path: '/*',
      name: 'default',
      component: Index
    }
  ]
})
