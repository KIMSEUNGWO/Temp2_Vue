

<template>
    <h2>공연목록</h2>
    <PaginationComponent
        :mapping="'/concert'"
        :count="10"
        @update-data="handleDataUpdate"
    >

      <template #extra-slot>
        <button id="delete">삭제</button>
        <button id="add">등록</button>
      </template>


      <template #table-top-slot>
        <li>
          <button type="button" id="checker" class="checkbox">
            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5C1 2.11929 2.11929 1 3.5 1H9.5C10.8807 1 12 2.11929 12 3.5V9.5C12 10.8807 10.8807 12 9.5 12H3.5C2.11929 12 1 10.8807 1 9.5V3.5ZM3.5 0C1.567 0 0 1.567 0 3.5V9.5C0 11.433 1.567 13 3.5 13H9.5C11.433 13 13 11.433 13 9.5V3.5C13 1.567 11.433 0 9.5 0H3.5ZM9.92326 4.64858C10.1206 4.42886 10.1206 4.07202 9.92326 3.85229H9.92484C9.72753 3.63257 9.40711 3.63257 9.2098 3.85229L5.52572 7.95327L3.86204 6.10229C3.66473 5.88257 3.34431 5.88257 3.147 6.10229C2.9497 6.32202 2.9497 6.67886 3.147 6.89858L5.16741 9.14858C5.36472 9.36831 5.68514 9.36831 5.88245 9.14858L9.92326 4.64858Z"/>
            </svg>
          </button>
        </li>

        <li>공연번호</li>
        <li>날짜</li>
        <li>공연</li>
        <li>지역</li>
        <li>위치</li>
        <li>상태</li>
      </template>

      <template #table-result-slot>
        <a v-if="concertList.length <= 0" class="none">검색 결과가 없습니다.</a>
<!--        <RouterLink :to="{ path: '/concertDetail', state: { concertId: concert.concertId } }" v-else v-for="concert in concertList" :key="concert.concertId" href="/concert" class="result">-->
<!--          <button type="button" class="checkbox">-->
<!--            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5C1 2.11929 2.11929 1 3.5 1H9.5C10.8807 1 12 2.11929 12 3.5V9.5C12 10.8807 10.8807 12 9.5 12H3.5C2.11929 12 1 10.8807 1 9.5V3.5ZM3.5 0C1.567 0 0 1.567 0 3.5V9.5C0 11.433 1.567 13 3.5 13H9.5C11.433 13 13 11.433 13 9.5V3.5C13 1.567 11.433 0 9.5 0H3.5ZM9.92326 4.64858C10.1206 4.42886 10.1206 4.07202 9.92326 3.85229H9.92484C9.72753 3.63257 9.40711 3.63257 9.2098 3.85229L5.52572 7.95327L3.86204 6.10229C3.66473 5.88257 3.34431 5.88257 3.147 6.10229C2.9497 6.32202 2.9497 6.67886 3.147 6.89858L5.16741 9.14858C5.36472 9.36831 5.68514 9.36831 5.88245 9.14858L9.92326 4.64858Z"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--          <span>{{ concert.concertId }}</span>-->
<!--          <span>{{ concert.startDate }}</span>-->
<!--          <span>{{ concert.title }}</span>-->
<!--          <span>{{ concert.region }}</span>-->
<!--          <span>{{ concert.location }}</span>-->
<!--          <span>{{ concert.status }}</span>-->
<!--        </RouterLink>-->
      </template>

    </PaginationComponent>

  <RouterLink :to="{ path: '/concertDetail', state: { concertId: 1 } }">
    공연상세 테스트
  </RouterLink>
  </template>


<script setup>
import PaginationComponent from "@/components/PaginationComponent.vue";
import {ref} from "vue";

const concertList = ref([]);

function handleDataUpdate(list) {
  concertList.value = list;
}
</script>

<style scoped>

:deep(.searchResult > a:not(.none)) {
  grid-template-columns: 8.70% 10.87% 15.22% 27.17% 10.87% 16.30% 10.87%;
}
.checkbox {
  background-color: transparent;
  width: 40px;
  height: 35px;
}
svg {
  fill: var(--f3);
}
.checkbox:hover svg {
  fill: var(--main-color);
}

#add, #delete {
  height: 35px;
  padding: 8px 24px;
  border-radius: 8px;
  color: white;
  font-size: var(--fs-14);
  font-weight: 300;
}
#add {
  background-color: var(--main-color);
}
#delete {
  background-color: #FF4B4B;
}
</style>