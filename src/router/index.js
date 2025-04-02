import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/views/HomeView.vue'),
      children: []
    },
    {
      path: '/artist',
      name: 'Artists',
      component: import('@/views/ArtistListView.vue'),
    },
    {
      path: '/concert',
      name: 'Concerts',
      component: import('@/views/ConcertListView.vue'),
    },
    {
      path: '/concertDetail',
      name: 'ConcertDetail',
      component: import('@/views/ConcertDetailView.vue'),
      props: true // URL 파라미터를 컴포넌트의 props로 전달
    }
  ],
})

// import ConcertDetailView from "@/views/ConcertDetailView.vue";
//     {
//       path: '/concert/:concertId',
//       name: 'ConcertDetail',
//       component: ConcertDetailView,
//       props: true // URL 파라미터를 컴포넌트의 props로 전달
//     }
// 이 방식과
//    {
//       path: '/concert/:concertId',
//       name: 'ConcertDetail',
//       component: import('@/views/ConcertDetailView.vue'),
//       props: true // URL 파라미터를 컴포넌트의 props로 전달
//     }
// 이 방식 차이 : 아래께 더 초기 렌더링성능 좋음
// https://choijying21.tistory.com/entry/Vue-Vue-Router-v4%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-%EB%8F%99%EC%A0%81-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%84%B0

export default router
