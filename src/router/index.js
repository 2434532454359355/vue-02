import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import FoundView from '../views/FoundView.vue'
import LostView from '../views/LostView.vue'
import AnnounceView from '../views/AnnounceView.vue'
import ManageView from '../views/ManageView.vue'
import MessageView from '../views/MessageView.vue'
import SubmitView from '../views/Submit.View.vue'
import addItem from '@/components/addItem.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/found',
    name: 'found',
    component: FoundView
  },
  {
    path: '/lost',
    name: 'lost',
    component: LostView
  },
  {
    path: '/announce',
    name: 'announce',
    component: AnnounceView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView
  },
  {
    path: '/message',
    name: 'message',
    component: MessageView
  },
  {
    path: '/submit',
    name: 'submit',
    component: SubmitView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
