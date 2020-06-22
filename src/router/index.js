import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/history/',
    component: () => import('../views/History.vue'),
    children: [
      {
        path: '',
        name: 'История',
        component: () => import('../views/HistoryAll.vue')
      },
      {
        path: 'added',
        name: 'История добавлений',
        component: () => import('../views/HistoryAdded.vue')
      },
      {
        path: 'deleted',
        name: 'История удалений',
        component: () => import('../views/HistoryDeleted.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
