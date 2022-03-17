/* showFoot 是否显示 底部导航 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showFoot: true,
    }
  },
  {
    path: '/circle',
    name: 'Circle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/circle.vue'),
    meta: {
      showFoot: true,
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/message.vue'),
    meta: {
      showFoot: true,
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine.vue'),
    meta: {
      showFoot: true,
    }
  },
  {
    path: '/pediaBook',
    name: 'PediaBook',
    component: () => import('../views/pediaBook/index.vue'),
    meta: {
      showFoot: false,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
