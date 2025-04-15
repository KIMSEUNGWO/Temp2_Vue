
<template>
  <div class="popup flex colum">
    <div class="space-between">
      <div class="image-wrapper">
        <div class="image-wrap">
          <img v-if="profileUrl" :src="profileUrl" class="profile" alt="프로필">
          <div v-else class="profile placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" class="placeholder-icon" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
          </div>
          <button type="button" class="edit-image" @click="fileInput.click()">
            <div class="camera-wrap">
              <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1979 24.0001H16.1357C19.6034 24.0001 21.3379 24.0001 22.5834 23.1834C23.121 22.8313 23.5839 22.3767 23.9457 21.8456C24.7779 20.6234 24.7779 18.9201 24.7779 15.5156C24.7779 12.1112 24.7779 10.4078 23.9457 9.18561C23.5839 8.65449 23.121 8.19989 22.5834 7.84783C21.7834 7.32227 20.7812 7.1345 19.2468 7.06783C18.5146 7.06783 17.8846 6.52339 17.7412 5.81783C17.6317 5.30102 17.3471 4.83787 16.9355 4.50666C16.5239 4.17546 16.0106 3.99651 15.4823 4.00005H11.8512C10.7534 4.00005 9.80789 4.76116 9.59233 5.81783C9.449 6.52339 8.819 7.06783 8.08678 7.06783C6.55344 7.1345 5.55122 7.32339 4.75011 7.84783C4.21293 8.20001 3.75041 8.6546 3.389 9.18561C2.55566 10.4078 2.55566 12.1101 2.55566 15.5156C2.55566 18.9212 2.55566 20.6223 3.38789 21.8456C3.74789 22.3745 4.21011 22.8289 4.75011 23.1834C5.99566 24.0001 7.73011 24.0001 11.1979 24.0001ZM13.6668 10.9701C11.1101 10.9701 9.03678 13.0045 9.03678 15.5145C9.03678 18.0245 11.1112 20.0623 13.6668 20.0623C16.2223 20.0623 18.2968 18.0267 18.2968 15.5167C18.2968 13.0067 16.2223 10.9701 13.6668 10.9701ZM13.6668 12.7878C12.1334 12.7878 10.889 14.0089 10.889 15.5156C10.889 17.0212 12.1334 18.2423 13.6668 18.2423C15.2001 18.2423 16.4446 17.0212 16.4446 15.5156C16.4446 14.0101 15.2001 12.7878 13.6668 12.7878ZM18.9134 11.8789C18.9134 11.3767 19.3279 10.9701 19.8401 10.9701H21.0734C21.5846 10.9701 22.0001 11.3767 22.0001 11.8789C21.9978 12.1222 21.899 12.3545 21.7254 12.5249C21.5519 12.6953 21.3178 12.7899 21.0746 12.7878H19.8401C19.7196 12.789 19.6 12.7664 19.4882 12.7214C19.3764 12.6763 19.2746 12.6097 19.1885 12.5253C19.1025 12.4409 19.0339 12.3404 18.9867 12.2295C18.9395 12.1186 18.9146 11.9995 18.9134 11.8789Z" fill="white"/>
              </svg>
            </div>
          </button>
          <input
              type="file"
              ref="fileInput"
              @change="handleFileChange"
              style="display: none;"
              accept="image/*">
        </div>
      </div>
      <div class="flex colum">
        <div class="box info-card">
          <span class="icon-text">아티스트명</span>
          <input type="text" class="value" :value="name">
        </div>
        <div class="box info-card">
          <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2033 1.875H17.9599L11.9374 8.75833L19.0224 18.125H13.4749L9.12992 12.4442L4.15826 18.125H1.39992L7.84159 10.7625L1.04492 1.875H6.73326L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90326 3.43833H4.26409L14.2358 16.475Z" fill="#505050"/>
          </svg>
          <input type="text" class="value":value="twitter">
        </div>
      </div>
    </div>
    <div class="button-list">
      <button type="button" @click="add" class="primary-btn">등록</button>
    </div>
  </div>
</template>

<script setup>
import '../assets/css/artist_detail_popup.css';
import {ref} from "vue";

const profileUrl = ref(null);
const fileInput = ref(null);
const name = ref('');
const twitter = ref('');

const add = () => {
  const isConfirm = confirm('등록하시겠습니까?');
  if (isConfirm && valid()) {

    alert('등록 완료되었습니다.');
    window.close();
  }
}
// 파일 변경 처리 함수
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // 선택된 파일로 이미지 URL 생성
    profileUrl.value = URL.createObjectURL(file);
  }
};

function valid() {
  return validProfile() &&
      validName() &&
      validTwitter();
}

function validProfile() {
  const hasInputFile = fileInput.value && fileInput.value.files && fileInput.value.files.length === 1;
  if (hasInputFile) {
    alert('프로필을 등록해주세요');
    return false;
  }
  return true;
}
function validName() {
  if (name.value.length === 0) {
    alert('아티스트명을 입력해주세요.');
    return false;
  }
  return true;
}
function validTwitter() {
  return true;
}
</script>

<style scoped>
</style>