
<template>
  <div class="popup flex colum">
    <div class="space-between">
      <div class="image-wrapper">
        <div class="image-wrap">
          <img v-if="type === 'VIEW'" :src="profileUrl" class="profile" alt="프로필">
          <img v-if="type === 'EDIT'" :src="editProfileUrl" class="profile" alt="프로필">
          <button type="button" class="edit-image" v-if="type === 'EDIT'" @click="editFileInput.click()">
            <div class="camera-wrap">
              <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1979 24.0001H16.1357C19.6034 24.0001 21.3379 24.0001 22.5834 23.1834C23.121 22.8313 23.5839 22.3767 23.9457 21.8456C24.7779 20.6234 24.7779 18.9201 24.7779 15.5156C24.7779 12.1112 24.7779 10.4078 23.9457 9.18561C23.5839 8.65449 23.121 8.19989 22.5834 7.84783C21.7834 7.32227 20.7812 7.1345 19.2468 7.06783C18.5146 7.06783 17.8846 6.52339 17.7412 5.81783C17.6317 5.30102 17.3471 4.83787 16.9355 4.50666C16.5239 4.17546 16.0106 3.99651 15.4823 4.00005H11.8512C10.7534 4.00005 9.80789 4.76116 9.59233 5.81783C9.449 6.52339 8.819 7.06783 8.08678 7.06783C6.55344 7.1345 5.55122 7.32339 4.75011 7.84783C4.21293 8.20001 3.75041 8.6546 3.389 9.18561C2.55566 10.4078 2.55566 12.1101 2.55566 15.5156C2.55566 18.9212 2.55566 20.6223 3.38789 21.8456C3.74789 22.3745 4.21011 22.8289 4.75011 23.1834C5.99566 24.0001 7.73011 24.0001 11.1979 24.0001ZM13.6668 10.9701C11.1101 10.9701 9.03678 13.0045 9.03678 15.5145C9.03678 18.0245 11.1112 20.0623 13.6668 20.0623C16.2223 20.0623 18.2968 18.0267 18.2968 15.5167C18.2968 13.0067 16.2223 10.9701 13.6668 10.9701ZM13.6668 12.7878C12.1334 12.7878 10.889 14.0089 10.889 15.5156C10.889 17.0212 12.1334 18.2423 13.6668 18.2423C15.2001 18.2423 16.4446 17.0212 16.4446 15.5156C16.4446 14.0101 15.2001 12.7878 13.6668 12.7878ZM18.9134 11.8789C18.9134 11.3767 19.3279 10.9701 19.8401 10.9701H21.0734C21.5846 10.9701 22.0001 11.3767 22.0001 11.8789C21.9978 12.1222 21.899 12.3545 21.7254 12.5249C21.5519 12.6953 21.3178 12.7899 21.0746 12.7878H19.8401C19.7196 12.789 19.6 12.7664 19.4882 12.7214C19.3764 12.6763 19.2746 12.6097 19.1885 12.5253C19.1025 12.4409 19.0339 12.3404 18.9867 12.2295C18.9395 12.1186 18.9146 11.9995 18.9134 11.8789Z" fill="white"/>
              </svg>
            </div>
          </button>
          <input
              type="file"
              v-if="type === 'EDIT'"
              ref="editFileInput"
              @change="handleFileChange"
              style="display: none;"
              accept="image/*">
        </div>
      </div>
      <div class="flex colum">
        <div class="flex">
          <div class="box info-card">
            <span class="icon-text">번호</span>
            <span class="value">{{ artistId }}</span>
          </div>
          <div class="box info-card">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 3C15.1892 3 14.6667 3.62988 14.6667 4.40625V16.5938C14.6667 17.3701 15.1892 18 15.8333 18C16.4774 18 17 17.3701 17 16.5938V4.40625C17 3.62988 16.4774 3 15.8333 3ZM10.7778 8.15625V16.5938C10.7778 17.3701 11.3003 18 11.9444 18C12.5885 18 13.1111 17.3701 13.1111 16.5938V8.15625C13.1111 7.37988 12.5885 6.75 11.9444 6.75C11.3003 6.75 10.7778 7.37988 10.7778 8.15625ZM8.05556 10.5C7.41146 10.5 6.88889 11.1299 6.88889 11.9062V16.5938C6.88889 17.3701 7.41146 18 8.05556 18C8.69965 18 9.22222 17.3701 9.22222 16.5938V11.9062C9.22222 11.1299 8.69965 10.5 8.05556 10.5ZM4.16667 14.25C3.52257 14.25 3 14.8799 3 15.6562V16.5938C3 17.3701 3.52257 18 4.16667 18C4.81076 18 5.33333 17.3701 5.33333 16.5938V15.6562C5.33333 14.8799 4.81076 14.25 4.16667 14.25Z" fill="#767676"/>
            </svg>
            <span class="value" v-if="type === 'VIEW'">{{ status }}</span>
            <div class="click-dropdown" v-if="type === 'EDIT'">
              <button @click="toggleStatus = !toggleStatus;" class="click-dropdown-btn">
                <span class="value">{{ editStatus }} </span>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.67065 8.36828C6.06702 8.95673 6.93308 8.95673 7.32944 8.36828L9.08748 5.75827C9.53489 5.09404 9.05894 4.19961 8.25808 4.19961H4.74201C3.94116 4.19961 3.46521 5.09404 3.91262 5.75827L5.67065 8.36828Z" fill="#505050"/>
                </svg>
              </button>
              <div id="myDropdown" class="click-dropdown-content" :class="{ show : toggleStatus }">
                <button type="button"
                        v-for="s in statusList" :key="s"
                        @click="editStatus = s; toggleStatus = false;"
                >{{ s }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="box info-card">
          <span class="icon-text">아티스트명</span>
          <span class="value" v-if="type === 'VIEW'">{{ name }}</span>
          <input type="text" class="value" v-if="type === 'EDIT'" :value="editName">
        </div>
        <div class="box info-card">
          <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2033 1.875H17.9599L11.9374 8.75833L19.0224 18.125H13.4749L9.12992 12.4442L4.15826 18.125H1.39992L7.84159 10.7625L1.04492 1.875H6.73326L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90326 3.43833H4.26409L14.2358 16.475Z" fill="#505050"/>
          </svg>
          <span class="value" v-if="type === 'VIEW'">{{ twitter }}</span>
          <input type="text" class="value" v-if="type === 'EDIT'" :value="editTwitter">
        </div>
      </div>
    </div>
    <div class="button-list">
      <button type="button" @click="changeToEdit" v-if="type === 'VIEW'" class="primary-btn">수정</button>
      <button type="button" @click="cancel" v-if="type === 'EDIT'" class="secondary-btn">취소</button>
      <button type="button" @click="edit" v-if="type === 'EDIT'" class="primary-btn">변경</button>
    </div>
  </div>
</template>

<script setup>
import '../assets/css/artist_detail_popup.css';
import {ref} from "vue";
import {useRoute} from "vue-router";
import {Server} from "@/stores/server.js";
const statusList = ['활동중', '해체']
const type = ref('VIEW'); // VIEW, EDIT

const route = useRoute();
const profileUrl = ref(null);
const artistId = ref(route.params.artistId); // URL에서 id 파라미터 가져오기
const status = ref('활동중');
const name = ref('');
const twitter = ref('');

const editProfileUrl = ref(null);
const editFileInput = ref(null);
const editStatus = ref(null);
const editName = ref(null);
const editTwitter = ref(null);

const init = async () => {

  await Server.mockFetch('/popup/artist/1')
      .mock({
        artistId: 1,
        profile: '/idol.jpg',
        status: '활동중',
        name: '어쩌구 저쩌구',
        twitter: 'https://x.com/'
      })
      .then(data => {
        profileUrl.value = data.profile;
        artistId.value = data.artistId;
        status.value = data.status;
        name.value = data.name;
        twitter.value = data.twitter;
      })
  await new Promise(resolve => setTimeout(resolve, 1000));
  return true;
}

await init();

const toggleStatus = ref(false);


const changeToEdit = () => {
  editProfileUrl.value = profileUrl.value;
  editFileInput.value = null;

  editStatus.value = status.value;
  editName.value = name.value;
  editTwitter.value = twitter.value;

  type.value = 'EDIT';
}
const cancel = () => {
  type.value = 'VIEW';
}
const edit = () => {
  const isConfirm = confirm('변경하시겠습니까?');
  if (isConfirm) {
    alert('변경이 완료되었습니다.');
    location.reload();
  }
}
// 파일 변경 처리 함수
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // 선택된 파일로 이미지 URL 생성
    editProfileUrl.value = URL.createObjectURL(file);
  }
};
</script>

<style scoped>
.click-dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.click-dropdown-btn {
  width: 100%;
  font-size: var(--fs-14);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.click-dropdown-content {
  width: 100%;
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
}

.click-dropdown-content button {
  width: 100%;
  color: #333;
  padding: 8px 16px;
  text-decoration: none;
  text-align: left;
  display: block;
  transition: background 0.2s;
}

.click-dropdown-content button:hover {
  background-color: #f1f1f1;
}

.show {
  display: block;
}
</style>