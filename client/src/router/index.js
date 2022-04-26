import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/:limit',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/',
    redirect: '/0',
  },
  {
    path: '/details/:id',
    name: 'detailView',
    component: DetailView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
