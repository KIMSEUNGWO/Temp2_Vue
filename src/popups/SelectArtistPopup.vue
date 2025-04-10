<template>
  <div class="popup">
    <SearchComponent
        style="width: 100%"
        v-model="word"
        placeholder="아티스트명 또는 멤버이름을 검색해주세요."
        :on-changed="onChanged"
    />
    <div class="search-wrapper">
      <span class="search-total">검색결과 {{ artists.length }}건</span>
      <div class="search-result">
        <button type="button" @click="onSelect(artist)" class="artist box" v-for="(artist, index) in artists" :key="index">
          <img :src="artist.image" class="image" alt="image">
          <span class="name">{{ artist.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchComponent from "@/components/SearchComponent.vue";
import {ref} from "vue";

const word = ref('');
const artists = ref([
  {id: 1, image: '/idol.jpg', name: '유메니온'},
  {id: 2, image: '/idol.jpg', name: '유메니온'},
  {id: 3, image: '/idol.jpg', name: '유메니온'},
  {id: 4, image: '/idol.jpg', name: '유메니온'},
  {id: 5, image: '/idol.jpg', name: '유메니온'},
  {id: 6, image: '/idol.jpg', name: '유메니온'},
  {id: 7, image: '/idol.jpg', name: '유메니온'},
  {id: 8, image: '/idol.jpg', name: '유메니온'},
  {id: 9, image: '/idol.jpg', name: '유메니온'},
]);

function onSelect(artist) {
  let confirmResult = confirm(`${artist.name}을 선택하시겠습니까?`);
  if (confirmResult && window.opener) {
    const sendData = {
      type: 'ARTIST',
      data: artist
    };

    window.opener.postMessage(JSON.stringify(sendData), window.location.origin);
    window.close();
  }
}

function onChanged() {

}
</script>

<style scoped>
.popup {
  padding: 20px 15px;
}
.search-wrapper {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.search-result {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.artist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100px;
  min-width: 85px;
}
.image {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.artist:hover {
  background-color: #fbfbfb;
}
</style>