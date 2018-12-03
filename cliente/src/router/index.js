import Vue from 'vue';
import Router from 'vue-router';
import Ping from '@/components/Ping';
import Book from '@/components/Book';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
  ],
  mode: 'hash',
});
