
<template>
  <div class="articleHeader">
    <h3>공연</h3>
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.61106 4.25L10.1099 10.6436C10.309 10.8395 10.309 11.1605 10.1099 11.3564L3.61106 17.75" stroke="#505050" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="settingBox">
      <h3>Dream Walker Vol.1</h3>
      <button type="button" id="setting" @click="isShowSettingModal = !isShowSettingModal" @close="isShowSettingModal = false">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4339 9.85703C21.5464 10.1629 21.4515 10.5039 21.2089 10.7219L19.6866 12.107C19.7253 12.3988 19.7464 12.6977 19.7464 13C19.7464 13.3023 19.7253 13.6012 19.6866 13.893L21.2089 15.2781C21.4515 15.4961 21.5464 15.8371 21.4339 16.143C21.2792 16.5613 21.0929 16.9621 20.8784 17.3488L20.7132 17.6336C20.4812 18.0203 20.221 18.3859 19.9362 18.7305C19.7288 18.9836 19.3843 19.068 19.0749 18.9695L17.1167 18.3473C16.6456 18.7094 16.1253 19.0117 15.5698 19.2402L15.1304 21.2477C15.0601 21.5676 14.814 21.8207 14.4905 21.8734C14.0054 21.9543 13.5062 21.9965 12.9964 21.9965C12.4866 21.9965 11.9874 21.9543 11.5023 21.8734C11.1788 21.8207 10.9327 21.5676 10.8624 21.2477L10.423 19.2402C9.86749 19.0117 9.34718 18.7094 8.87608 18.3473L6.9214 18.973C6.61202 19.0715 6.26749 18.9836 6.06007 18.734C5.7753 18.3895 5.51515 18.0238 5.28311 17.6371L5.11788 17.3523C4.90343 16.9656 4.7171 16.5648 4.56241 16.1465C4.44991 15.8406 4.54483 15.4996 4.78741 15.2816L6.30968 13.8965C6.271 13.6012 6.24991 13.3023 6.24991 13C6.24991 12.6977 6.271 12.3988 6.30968 12.107L4.78741 10.7219C4.54483 10.5039 4.44991 10.1629 4.56241 9.85703C4.7171 9.43867 4.90343 9.03789 5.11788 8.65117L5.28311 8.36641C5.51515 7.97969 5.7753 7.61406 6.06007 7.26953C6.26749 7.01641 6.61202 6.93203 6.9214 7.03047L8.8796 7.65273C9.35069 7.29063 9.871 6.98828 10.4265 6.75977L10.8659 4.75234C10.9362 4.43242 11.1823 4.1793 11.5058 4.12656C11.9909 4.04219 12.4901 4 12.9999 4C13.5097 4 14.0089 4.04219 14.4941 4.12305C14.8175 4.17578 15.0636 4.42891 15.1339 4.74883L15.5733 6.75625C16.1288 6.98477 16.6491 7.28711 17.1202 7.64922L19.0784 7.02695C19.3878 6.92852 19.7323 7.01641 19.9398 7.26602C20.2245 7.61055 20.4847 7.97617 20.7167 8.36289L20.8819 8.64766C21.0964 9.03437 21.2827 9.43516 21.4374 9.85352L21.4339 9.85703ZM12.9999 15.8125C13.7458 15.8125 14.4612 15.5162 14.9886 14.9887C15.5161 14.4613 15.8124 13.7459 15.8124 13C15.8124 12.2541 15.5161 11.5387 14.9886 11.0113C14.4612 10.4838 13.7458 10.1875 12.9999 10.1875C12.254 10.1875 11.5386 10.4838 11.0112 11.0113C10.4837 11.5387 10.1874 12.2541 10.1874 13C10.1874 13.7459 10.4837 14.4613 11.0112 14.9887C11.5386 15.5162 12.254 15.8125 12.9999 15.8125Z" fill="#767676"/>
        </svg>
      </button>
      <ConcertSettingModal v-if="isShowSettingModal" :concert-id="concertId"/>
    </div>
  </div>

  <div class="concert">
    <img class="poster" src="/Frame%201707485619.jpg" alt="">
    <div class="concert-info">
      <div class="extra-info">
        <div class="box info-card">
          <div class="icon-text">제목</div>
          <span class="title">Dream Walker Vol.1</span>
        </div>
        <div class="box info-card">
          <svg class="icon" width="16" height="16" fill="#767676" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
          <span class="title">https://form.google/sEfaeFefs</span>
        </div>
      </div>
      <div class="flex-info">
        <div class="extra-info">
          <div class="openDate box grid-card">
            <ul class="grid-top">
              <li class="openDate-top-name">OPEN</li>
              <li class="openDate-top-name">START</li>
            </ul>
            <ul class="grid-result openDate-result">
              <li class="openDate-result">17:50</li>
              <li class="openDate-result">18:10</li>
            </ul>
          </div>
          <div class="price box grid-card">
            <ul class="grid-top">
              <li class="openDate-top-name">이름</li>
              <li class="openDate-top-name">가격</li>
            </ul>
            <ul class="grid-result openDate-result">
              <li class="openDate-result">DOOR</li>
              <li class="openDate-result">₩25,000</li>
            </ul>
            <ul class="grid-result openDate-result">
              <li class="openDate-result">ADV</li>
              <li class="openDate-result">₩20,000</li>
            </ul>
          </div>

        </div>
        <div class="extra-info">
          <div class="time-box box info-card">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 1.66602C14.6026 1.66602 18.3334 5.39685 18.3334 9.99935C18.3334 14.6018 14.6026 18.3327 10.0001 18.3327C5.39758 18.3327 1.66675 14.6018 1.66675 9.99935C1.66675 5.39685 5.39758 1.66602 10.0001 1.66602ZM10.0001 3.33268C8.23197 3.33268 6.53628 4.03506 5.28604 5.2853C4.03579 6.53555 3.33341 8.23124 3.33341 9.99935C3.33341 11.7675 4.03579 13.4632 5.28604 14.7134C6.53628 15.9636 8.23197 16.666 10.0001 16.666C11.7682 16.666 13.4639 15.9636 14.7141 14.7134C15.9644 13.4632 16.6667 11.7675 16.6667 9.99935C16.6667 8.23124 15.9644 6.53555 14.7141 5.2853C13.4639 4.03506 11.7682 3.33268 10.0001 3.33268ZM10.0001 4.99935C10.2042 4.99938 10.4012 5.07431 10.5537 5.20994C10.7063 5.34558 10.8037 5.53247 10.8276 5.73518L10.8334 5.83268V9.65435L13.0892 11.9102C13.2387 12.0601 13.3255 12.2614 13.3319 12.473C13.3384 12.6846 13.2641 12.8908 13.124 13.0496C12.984 13.2084 12.7888 13.3079 12.578 13.328C12.3673 13.3481 12.1567 13.2872 11.9892 13.1577L11.9109 13.0885L9.41091 10.5885C9.2814 10.4589 9.19822 10.2902 9.17425 10.1085L9.16675 9.99935V5.83268C9.16675 5.61167 9.25455 5.39971 9.41083 5.24343C9.56711 5.08715 9.77907 4.99935 10.0001 4.99935Z" fill="#767676"/>
            </svg>
            <span id="time">2025-03-31</span>
          </div>
          <div class="location-box box info-card">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 9.58268C9.44755 9.58268 8.91764 9.36319 8.52694 8.97249C8.13624 8.58179 7.91675 8.05188 7.91675 7.49935C7.91675 6.94681 8.13624 6.41691 8.52694 6.02621C8.91764 5.63551 9.44755 5.41602 10.0001 5.41602C10.5526 5.41602 11.0825 5.63551 11.4732 6.02621C11.8639 6.41691 12.0834 6.94681 12.0834 7.49935C12.0834 7.77294 12.0295 8.04384 11.9248 8.29661C11.8201 8.54937 11.6667 8.77903 11.4732 8.97249C11.2798 9.16594 11.0501 9.3194 10.7973 9.4241C10.5446 9.5288 10.2737 9.58268 10.0001 9.58268ZM10.0001 1.66602C8.45299 1.66602 6.96925 2.2806 5.87529 3.37456C4.78133 4.46852 4.16675 5.95225 4.16675 7.49935C4.16675 11.8743 10.0001 18.3327 10.0001 18.3327C10.0001 18.3327 15.8334 11.8743 15.8334 7.49935C15.8334 5.95225 15.2188 4.46852 14.1249 3.37456C13.0309 2.2806 11.5472 1.66602 10.0001 1.66602Z" fill="#767676"/>
            </svg>
            <a href="#" id="location">옥타바리움</a>
          </div>
          <div class="ticket-box box info-card">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2988 5.70308C13.9738 5.378 13.7835 4.94224 13.766 4.48293C13.7485 4.02362 13.905 3.57462 14.2042 3.22573C14.229 3.19671 14.2419 3.15942 14.2403 3.12131C14.2387 3.08321 14.2227 3.04711 14.1957 3.02026L12.4718 1.29448C12.4433 1.266 12.4047 1.25 12.3644 1.25C12.3241 1.25 12.2855 1.266 12.257 1.29448L9.50933 4.04214C9.40792 4.14347 9.33155 4.26706 9.28628 4.40307C9.24115 4.53939 9.16487 4.66332 9.0635 4.76503C8.96214 4.86674 8.83846 4.94343 8.70229 4.98901C8.5662 5.03436 8.4425 5.11072 8.34097 5.21206L1.29448 12.257C1.266 12.2855 1.25 12.3241 1.25 12.3644C1.25 12.4047 1.266 12.4433 1.29448 12.4718L3.01831 14.1957C3.04516 14.2227 3.08125 14.2387 3.11936 14.2403C3.15746 14.2419 3.19476 14.229 3.22378 14.2042C3.57259 13.9047 4.02169 13.7479 4.48116 13.7653C4.94063 13.7828 5.37656 13.9731 5.70169 14.2982C6.02682 14.6233 6.21714 15.0593 6.23456 15.5187C6.25199 15.9782 6.09522 16.4273 5.79565 16.7761C5.7709 16.8051 5.75804 16.8424 5.75963 16.8805C5.76122 16.9186 5.77716 16.9547 5.80425 16.9816L7.52808 18.7054C7.55657 18.7339 7.59521 18.7499 7.6355 18.7499C7.67579 18.7499 7.71442 18.7339 7.74292 18.7054L14.7898 11.6589C14.8911 11.5574 14.9675 11.4337 15.0128 11.2976C15.058 11.1613 15.1342 11.0374 15.2356 10.9357C15.337 10.8339 15.4607 10.7573 15.5968 10.7117C15.7328 10.6664 15.8564 10.59 15.9578 10.4886L18.7054 7.74097C18.7339 7.71247 18.7499 7.67383 18.7499 7.63354C18.7499 7.59326 18.7339 7.55462 18.7054 7.52612L16.9816 5.80229C16.9547 5.77521 16.9186 5.75927 16.8805 5.75768C16.8424 5.75608 16.8051 5.76895 16.7761 5.7937C16.4277 6.09345 15.979 6.25065 15.5197 6.23384C15.0604 6.21704 14.6244 6.02748 14.2988 5.70308Z" stroke="#767676" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M9.78506 5.48672L9.14014 4.8418M11.5046 7.20625L11.0745 6.77656M13.2241 8.92617L12.7944 8.49609M15.1589 10.8605L14.514 10.2156" stroke="#767676" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
            <span id="ticket">41장 남음</span>
          </div>
          <div class="status-box box info-card">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 3C15.1892 3 14.6667 3.62988 14.6667 4.40625V16.5938C14.6667 17.3701 15.1892 18 15.8333 18C16.4774 18 17 17.3701 17 16.5938V4.40625C17 3.62988 16.4774 3 15.8333 3ZM10.7778 8.15625V16.5938C10.7778 17.3701 11.3003 18 11.9444 18C12.5885 18 13.1111 17.3701 13.1111 16.5938V8.15625C13.1111 7.37988 12.5885 6.75 11.9444 6.75C11.3003 6.75 10.7778 7.37988 10.7778 8.15625ZM8.05556 10.5C7.41146 10.5 6.88889 11.1299 6.88889 11.9062V16.5938C6.88889 17.3701 7.41146 18 8.05556 18C8.69965 18 9.22222 17.3701 9.22222 16.5938V11.9062C9.22222 11.1299 8.69965 10.5 8.05556 10.5ZM4.16667 14.25C3.52257 14.25 3 14.8799 3 15.6562V16.5938C3 17.3701 3.52257 18 4.16667 18C4.81076 18 5.33333 17.3701 5.33333 16.5938V15.6562C5.33333 14.8799 4.81076 14.25 4.16667 14.25Z" fill="#767676"/>
            </svg>
            <span class="status">예매중</span>
          </div>

        </div>
      </div>
    </div>
    <div class="participantsInfo box">
      <span>참여 아티스트</span>
      <div class="schedule grid-card">
        <ul class="grid-top">
          <li>시간</li>
          <li>아티스트</li>
        </ul>
        <ul class="grid-result openDate-result">
          <li>17:00 - 17:20</li>
          <li class="event">
            <img src="/idol.jpg" alt="" class="profile">
            <span>유메니온</span>
          </li>
        </ul>
        <ul class="grid-result openDate-result">
          <li>17:20 - 17:40</li>
          <li class="event">
            <img src="/idol.jpg" alt="" class="profile">
            <span>유메니온</span>
          </li>
        </ul>
        <ul class="grid-result openDate-result">
          <li>17:40 - 18:00</li>
          <li class="event">
            <img src="/idol.jpg" alt="" class="profile">
            <span>유메니온</span>
          </li>
        </ul>
        <ul class="grid-result openDate-result">
          <li>18:00 - 18:20</li>
          <li class="event">
            <img src="/idol.jpg" alt="" class="profile">
            <span>유메니온</span>
          </li>
        </ul>
        <ul class="grid-result openDate-result">
          <li>19:00 - 20:00</li>
          <li class="event">
            <span>FAN MEETING</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="concertWrapper">
    </div>
  </div>
</template>

<script setup>

import {onMounted, onUnmounted, ref} from "vue";
import ConcertSettingModal from "@/views/concert/ConcertSettingModal.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const concertId = ref(Number(route.params.concertId));

const isShowSettingModal = ref(false);

// 모달 외부 클릭 감지를 위한 함수
const handleClickOutside = (event) => {
  // 설정 버튼이나 모달 내부를 클릭한 경우는 무시
  if (event.target.closest('#setting') || event.target.closest('.setting-modal')) {
    return;
  }

  // 그 외의 영역을 클릭했을 경우 모달 닫기
  isShowSettingModal.value = false;
};

onMounted(() => {
  // 문서 전체에 클릭 이벤트 리스너 추가
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  // 컴포넌트가 제거될 때 이벤트 리스너 제거
  document.removeEventListener('click', handleClickOutside);
});

</script>


<style scoped>
.articleHeader {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 36px;
}
.articleHeader h3 {
  margin: 0;
}
.settingBox {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}


.box {
  padding: 15px;
}
/* 여기서부터 */
.concert {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
}
.concertWrapper {
  display: flex;
  gap: 12px;
}

.poster {
  border-radius: 12px;
  width: 240px;
}


.concert-info {
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 12px;
}
.flex-info {
  display: flex;
  align-content: center;
  gap: 12px;
}
.extra-info {
  display: flex;
  flex-direction: column;
  gap: 12px  ;
}
.location-box a {
  text-decoration: underline;
}

.grid-card {
  min-width: 250px;
}
.grid-card > ul {
  display: grid;
  justify-items: center;
  align-items: center;
  border-bottom: 1px #eee solid;
}

.openDate > ul, .price > ul {
  grid-template-columns: 50% 50%;
  height: 40px;
}
.schedule > ul {
  grid-template-columns: 40% 60%;
  height: 50px;
}
.grid-top {
  background-color: #F7F7FB;
  height: 40px !important;
}

.info-card {
  min-width: 250px;
}

.event {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}
.profile {
  width: 30px;
  height: 30px;
}

.participantsInfo {
  width: 480px;
}
.participantsInfo > span {
  display: inline-block;
  margin-bottom: 10px;

}
</style>