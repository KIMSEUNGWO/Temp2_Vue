import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ArtistListView from "@/views/ArtistListView.vue";
import TestView from "@/views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/artist',
      name: 'artists',
      component: ArtistListView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
  ],
})

export default router
