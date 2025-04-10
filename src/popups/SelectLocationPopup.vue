<template>
  <div class="popup">
    <PaginationComponent
        :mapping="'/popup/location'"
        :count="10"
        placeholder="공연장 이름을 검색해주세요."
        @update-data="handleDataUpdate"
    >
      <template #table-top-slot>
        <li>이름</li>
        <li>주소</li>
      </template>

      <template #table-result-slot>
        <a v-if="handleDataUpdate.length <= 0" class="none">검색 결과가 없습니다.</a>
        <button @click="onSelect(location);" v-for="(location, index) in locationList" :key="index" class="result">
          <span>{{ location.name }}</span>
          <span>{{ location.address }}</span>
        </button>
      </template>

    </PaginationComponent>
  </div>
</template>

<script setup>
import {ref} from "vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

const locationList = ref([
  {id: 1, name: '어딘가', address: '서울 어쩌구 저쩌구 어딘가', location: '서울', url: 'https://naver.com'},
  {id: 1, name: '저긴가', address: '서울 어쩌구 저쩌구 어딘가', location: '서울', url: 'https://naver.com'},
  {id: 1, name: '????', address: '서울 어쩌구 저쩌구 어딘가', location: '서울', url: 'https://naver.com'},
  {id: 1, name: '테스트', address: '서울 어쩌구 저쩌구 어딘가', location: '서울', url: 'https://naver.com'}
]);

function handleDataUpdate(list) {
  locationList.value = list;
}
function onSelect(location) {
  let confirmResult = confirm(`${location.name}을 선택하시겠습니까?`);
  if (confirmResult && window.opener) {
    const sendData = {
      type: 'LOCATION',
      data: location
    };

    window.opener.postMessage(JSON.stringify(sendData), window.location.origin);
    window.close();
  }
}
</script>


<style scoped>
:deep(.searchResult > a:not(.none)),
:deep(.searchResult > button:not(.none)) {
  grid-template-columns: 50% 50%;
}
:deep(.searchResult > button:not(.none)) {
  width: 100%;
  font-size: var(--fs-16);
  color: var(--f1);
}
:deep(.group) {
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 20px;
}
:deep(.group-right) {
  width: 100% !important;
  .input-box {
    width: 100% ;
    height: 40px;

  }
}
:deep(#searchWord) {
  width: 100% !important;
}
.popup {
  padding: 20px 15px;
}

</style>