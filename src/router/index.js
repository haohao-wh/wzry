import Vue from 'vue'
import Router from 'vue-router'
import Index from "../view/Index";
import Test from "../view/system/Test";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '展示页'
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: {
        title: '展示页'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '展示页'
      }
    }
  ]
})
