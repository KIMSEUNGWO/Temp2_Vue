
<template>
  <h2>아이돌목록</h2>
  <PaginationComponent
    :mapping="'/artist'"
    :count="10"
    @update-data="handleDataUpdate"
  >

    <template #extra-slot>
      <button id="delete">삭제</button>
      <button id="add" @click="addArtist">등록</button>
    </template>

    <template #table-top-slot>
      <li>
        <button type="button" id="checker" class="checkbox">
          <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5C1 2.11929 2.11929 1 3.5 1H9.5C10.8807 1 12 2.11929 12 3.5V9.5C12 10.8807 10.8807 12 9.5 12H3.5C2.11929 12 1 10.8807 1 9.5V3.5ZM3.5 0C1.567 0 0 1.567 0 3.5V9.5C0 11.433 1.567 13 3.5 13H9.5C11.433 13 13 11.433 13 9.5V3.5C13 1.567 11.433 0 9.5 0H3.5ZM9.92326 4.64858C10.1206 4.42886 10.1206 4.07202 9.92326 3.85229H9.92484C9.72753 3.63257 9.40711 3.63257 9.2098 3.85229L5.52572 7.95327L3.86204 6.10229C3.66473 5.88257 3.34431 5.88257 3.147 6.10229C2.9497 6.32202 2.9497 6.67886 3.147 6.89858L5.16741 9.14858C5.36472 9.36831 5.68514 9.36831 5.88245 9.14858L9.92326 4.64858Z"/>
          </svg>
        </button>
      </li>
      <li>번호</li>
      <li>이미지</li>
      <li>이름</li>
      <li>상태</li>
    </template>

    <template #table-result-slot>
      <a v-if="artistList.length <= 0" class="none">검색 결과가 없습니다.</a>
      <button @click="selectArtist(artist.artistId)" v-else v-for="(artist, index) in artistList" :key="artist.artistId" class="result">
        <button type="button" class="checkbox" @click.stop="check(index)">
          <svg :class="{check : artist.check}" width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5C1 2.11929 2.11929 1 3.5 1H9.5C10.8807 1 12 2.11929 12 3.5V9.5C12 10.8807 10.8807 12 9.5 12H3.5C2.11929 12 1 10.8807 1 9.5V3.5ZM3.5 0C1.567 0 0 1.567 0 3.5V9.5C0 11.433 1.567 13 3.5 13H9.5C11.433 13 13 11.433 13 9.5V3.5C13 1.567 11.433 0 9.5 0H3.5ZM9.92326 4.64858C10.1206 4.42886 10.1206 4.07202 9.92326 3.85229H9.92484C9.72753 3.63257 9.40711 3.63257 9.2098 3.85229L5.52572 7.95327L3.86204 6.10229C3.66473 5.88257 3.34431 5.88257 3.147 6.10229C2.9497 6.32202 2.9497 6.67886 3.147 6.89858L5.16741 9.14858C5.36472 9.36831 5.68514 9.36831 5.88245 9.14858L9.92326 4.64858Z"/>
          </svg>
        </button>
        <span>{{ artist.artistId }}</span>
        <img :src="artist.image" alt="그룹이미지" class="idol-image" srcset="">
        <span>{{ artist.name }}</span>
        <span>{{ artist.status }}</span>
      </button>
    </template>

  </PaginationComponent>
</template>

<script setup>
import PaginationComponent from "@/components/PaginationComponent.vue";
import { computed, ref } from "vue";
import { PageData } from "@/assets/js/pagination.js";

// 라디오 버튼 상태를 위한 ref
const artistList = ref([
  {
    artistId: 1,
    image: '/idol.jpg',
    name: '어쩌구~',
    status: '활동중',
    check: false,
  }
]);
const check = (index) => {
  console.log(artistList.value[index]);
  artistList.value[index].check = !artistList.value[index].check;
}

// 검색 조건을 객체로 만들어서 전달
// const searchCondition = computed(() => {
//   return {
//     status: new PageData(
//         () => statusValue.value,
//         (pageable) => { statusValue.value = pageable.data.status; }
//     )
//   };
// });
// 예상 데이터 구조
// {
//   'result' : 'OK',
//     'data' : {
//   'totalElements' : 30,
//       'totalPages' : 50,
//       'pageNumber' : 0,
//       'word' : '테스트임~',
//       'status' : '어쩌구',
//       'content' : [
//     {
//       'artistId' : 1,
//       'image' : 'null',
//       'name' : '김승우',
//       'status' : '어쩌구',
//     },
//     {
//       'artistId' : 2,
//       'image' : 'null',
//       'name' : '김승우',
//       'status' : '어쩌구',
//     },
//     {
//       'artistId' : 3,
//       'image' : 'null',
//       'name' : '김승우',
//       'status' : '어쩌구',
//     },
//   ]
// }
// }

function selectArtist(artistId) {
  const url = new URL(`/popup/artist/${artistId}`, window.location.origin);
  window.open(url.href, '_blank', 'width=500,height=600');
}
function addArtist() {
  const url = new URL(`/popup/artist/new`, window.location.origin);
  window.open(url.href, '_blank', 'width=500,height=600');
}

function handleDataUpdate(list) {
  // artistList.value = list;
}
</script>

<style scoped>

:deep(.searchResult > a:not(.none)),
:deep(.searchResult > button:not(.none)) {
  grid-template-columns: 13.8% 17.2% 17.2% 34.5% 17.2%;
}
.idol-image {
  border-radius: 100%;
  width: 30px;
  height: 30px;
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
.check {
  fill: var(--main-color);
}
</style>