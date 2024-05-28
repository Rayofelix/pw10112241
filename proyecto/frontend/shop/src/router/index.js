import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsView from '../views/ClientsView.vue'
import ClientsCreateView from '../views/ClientsCreateView.vue'
import ClientsEditView  from '../views/ClientsEditView.vue'
import LoginView from '../views/LoginView.vue'
import SignInView from '../views/SignInView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clients/login',
      name: 'login',
      component: LoginView
    },
    {
    path: '/clients/signIn',
    name: 'signIn',
    component: SignInView
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsView
    },
    {
      path: '/clients/create',
      name: 'clientsCreate',
      component: ClientsCreateView
    },
    {
      path: '/clients/:id/edit',
      name: 'clientsEdit',
      component: ClientsEditView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
