import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import H3 from '@/components/H3'
import H4 from '@/components/H4'
import H1_1 from '@/components/H1-1'
import H1_2 from '@/components/H1-2'
import H1_3 from '@/components/H1-3'
import H1_4 from '@/components/H1-4'
import H1_5 from '@/components/H1-5'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Main,
    children: [
      {
        path: '/', redirect: '/H1/H1_1'
      },
      {
        path: '/H1', component: H1, redirect: '/H1/H1_1',
        children: [
          { path: '/H1/H1_1', component: H1_1 },
          { path: '/H1/H1_2', component: H1_2 },
          { path: '/H1/H1_3', component: H1_3 },
          { path: '/H1/H1_4', component: H1_4 },
          { path: '/H1/H1_5', component: H1_5 },
        ]
      },
      { path: '/H2', component: H2 },
      { path: '/H3', component: H3 },
      { path: '/H4', component: H4 },
    ]
  }]
})
