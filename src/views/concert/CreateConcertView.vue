<template>
  <div class="articleHeader">
    <h3>공연</h3>
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.61106 4.25L10.1099 10.6436C10.309 10.8395 10.309 11.1605 10.1099 11.3564L3.61106 17.75" stroke="#505050" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <h3>임시등록</h3>
  </div>

  <div class="concert">
    <div class="posterWrapper">
      <img class="poster" src="/Frame%201707485619.jpg" alt="">
      <input type="file" name="poster" style="width: 0; height: 0;">
    </div>
    <div class="concert-info">
      <div class="extra-info">
        <div class="box info-card">
          <div class="icon-text">제목</div>
          <input type="text" name="title" placeholder="공연명을 입력해주세요.">
        </div>
        <div class="box info-card">
          <svg class="icon" width="16" height="16" fill="#767676" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
          <input type="url" placeholder="연결할 주소를 입력해주세요." value="https://form.google/sEfaeFefs">
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
              <li class="openDate-result">
                <SelectTimeComponent v-model="openTime"/>
              </li>
              <li class="openDate-result">
                <SelectTimeComponent v-model="startTime"/>
              </li>
            </ul>
          </div>
          <div class="price box grid-card grid-edit">
            <ul class="grid-top">
              <li>이름</li>
              <li>가격</li>
            </ul>
            <ul class="grid-result">
              <li>DOOR</li>
              <li>
                <input type="text" class="input-price" v-model.number="doorPrice">
              </li>
            </ul>
            <ul class="grid-result">
              <li>ADV</li>
              <li>
                <input type="text" class="input-price" v-model.number="advPrice">
              </li>
            </ul>
            <ul class="grid-result relative" v-for="(item, index) in extraPrices" :key="index">
              <li>
                <input type="text" class="extra-title" placeholder="TITLE" v-model="item.title">
              </li>
              <li>
                <input type="text" class="extra-price" placeholder="PRICE" v-model.number="item.price">
              </li>
              <li class="deleteSvg">
                <button type="button" @click="removeExtraPrice(index)">
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00002 1.16602C10.2218 1.16602 12.8334 3.7776 12.8334 6.99935C12.8334 10.2211 10.2218 12.8327 7.00002 12.8327C3.77827 12.8327 1.16669 10.2211 1.16669 6.99935C1.16669 3.7776 3.77827 1.16602 7.00002 1.16602ZM9.33335 6.41602H4.66669C4.51198 6.41602 4.3636 6.47747 4.25421 6.58687C4.14481 6.69627 4.08335 6.84464 4.08335 6.99935C4.08335 7.15406 4.14481 7.30243 4.25421 7.41183C4.3636 7.52122 4.51198 7.58268 4.66669 7.58268H9.33335C9.48806 7.58268 9.63644 7.52122 9.74583 7.41183C9.85523 7.30243 9.91669 7.15406 9.91669 6.99935C9.91669 6.84464 9.85523 6.69627 9.74583 6.58687C9.63644 6.47747 9.48806 6.41602 9.33335 6.41602Z" fill="#FF4B4B"/>
                  </svg>
                </button>
              </li>
            </ul>

            <button type="button" class="grid-edit-add" @click="addExtraPrice">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0833 6.41732H7.58331V2.91732C7.58331 2.76261 7.52185 2.61424 7.41246 2.50484C7.30306 2.39544 7.15469 2.33398 6.99998 2.33398C6.84527 2.33398 6.6969 2.39544 6.5875 2.50484C6.4781 2.61424 6.41665 2.76261 6.41665 2.91732V6.41732H2.91665C2.76194 6.41732 2.61356 6.47878 2.50417 6.58817C2.39477 6.69757 2.33331 6.84594 2.33331 7.00065C2.33331 7.15536 2.39477 7.30373 2.50417 7.41313C2.61356 7.52253 2.76194 7.58398 2.91665 7.58398H6.41665V11.084C6.41665 11.2387 6.4781 11.3871 6.5875 11.4965C6.6969 11.6059 6.84527 11.6673 6.99998 11.6673C7.15469 11.6673 7.30306 11.6059 7.41246 11.4965C7.52185 11.3871 7.58331 11.2387 7.58331 11.084V7.58398H11.0833C11.238 7.58398 11.3864 7.52253 11.4958 7.41313C11.6052 7.30373 11.6666 7.15536 11.6666 7.00065C11.6666 6.84594 11.6052 6.69757 11.4958 6.58817C11.3864 6.47878 11.238 6.41732 11.0833 6.41732Z" fill="#767676"/>
                </svg>
            </button>
          </div>

        </div>
        <div class="extra-info">
          <div class="time-box box info-card relative">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 1.66602C14.6026 1.66602 18.3334 5.39685 18.3334 9.99935C18.3334 14.6018 14.6026 18.3327 10.0001 18.3327C5.39758 18.3327 1.66675 14.6018 1.66675 9.99935C1.66675 5.39685 5.39758 1.66602 10.0001 1.66602ZM10.0001 3.33268C8.23197 3.33268 6.53628 4.03506 5.28604 5.2853C4.03579 6.53555 3.33341 8.23124 3.33341 9.99935C3.33341 11.7675 4.03579 13.4632 5.28604 14.7134C6.53628 15.9636 8.23197 16.666 10.0001 16.666C11.7682 16.666 13.4639 15.9636 14.7141 14.7134C15.9644 13.4632 16.6667 11.7675 16.6667 9.99935C16.6667 8.23124 15.9644 6.53555 14.7141 5.2853C13.4639 4.03506 11.7682 3.33268 10.0001 3.33268ZM10.0001 4.99935C10.2042 4.99938 10.4012 5.07431 10.5537 5.20994C10.7063 5.34558 10.8037 5.53247 10.8276 5.73518L10.8334 5.83268V9.65435L13.0892 11.9102C13.2387 12.0601 13.3255 12.2614 13.3319 12.473C13.3384 12.6846 13.2641 12.8908 13.124 13.0496C12.984 13.2084 12.7888 13.3079 12.578 13.328C12.3673 13.3481 12.1567 13.2872 11.9892 13.1577L11.9109 13.0885L9.41091 10.5885C9.2814 10.4589 9.19822 10.2902 9.17425 10.1085L9.16675 9.99935V5.83268C9.16675 5.61167 9.25455 5.39971 9.41083 5.24343C9.56711 5.08715 9.77907 4.99935 10.0001 4.99935Z" fill="#767676"/>
            </svg>
            <button type="button" class="select-date time" @click="isShowModal = !isShowModal">{{ dateToString(date) }}</button>
            <SelectCalendarComponent class="absolute" v-if="isShowModal"
                                     :focus="{ year: date.getFullYear(), month: date.getMonth() + 1,day: date.getDate() }"
                                     @select-date="selectDate"
            />
          </div>
          <div class="location-box box info-card">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 9.58268C9.44755 9.58268 8.91764 9.36319 8.52694 8.97249C8.13624 8.58179 7.91675 8.05188 7.91675 7.49935C7.91675 6.94681 8.13624 6.41691 8.52694 6.02621C8.91764 5.63551 9.44755 5.41602 10.0001 5.41602C10.5526 5.41602 11.0825 5.63551 11.4732 6.02621C11.8639 6.41691 12.0834 6.94681 12.0834 7.49935C12.0834 7.77294 12.0295 8.04384 11.9248 8.29661C11.8201 8.54937 11.6667 8.77903 11.4732 8.97249C11.2798 9.16594 11.0501 9.3194 10.7973 9.4241C10.5446 9.5288 10.2737 9.58268 10.0001 9.58268ZM10.0001 1.66602C8.45299 1.66602 6.96925 2.2806 5.87529 3.37456C4.78133 4.46852 4.16675 5.95225 4.16675 7.49935C4.16675 11.8743 10.0001 18.3327 10.0001 18.3327C10.0001 18.3327 15.8334 11.8743 15.8334 7.49935C15.8334 5.95225 15.2188 4.46852 14.1249 3.37456C13.0309 2.2806 11.5472 1.66602 10.0001 1.66602Z" fill="#767676"/>
            </svg>
            <button type="button" @click="openLocationPopup" id="location">{{ location.name }}</button>
          </div>
          <div class="ticket-box box info-card">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2988 5.70308C13.9738 5.378 13.7835 4.94224 13.766 4.48293C13.7485 4.02362 13.905 3.57462 14.2042 3.22573C14.229 3.19671 14.2419 3.15942 14.2403 3.12131C14.2387 3.08321 14.2227 3.04711 14.1957 3.02026L12.4718 1.29448C12.4433 1.266 12.4047 1.25 12.3644 1.25C12.3241 1.25 12.2855 1.266 12.257 1.29448L9.50933 4.04214C9.40792 4.14347 9.33155 4.26706 9.28628 4.40307C9.24115 4.53939 9.16487 4.66332 9.0635 4.76503C8.96214 4.86674 8.83846 4.94343 8.70229 4.98901C8.5662 5.03436 8.4425 5.11072 8.34097 5.21206L1.29448 12.257C1.266 12.2855 1.25 12.3241 1.25 12.3644C1.25 12.4047 1.266 12.4433 1.29448 12.4718L3.01831 14.1957C3.04516 14.2227 3.08125 14.2387 3.11936 14.2403C3.15746 14.2419 3.19476 14.229 3.22378 14.2042C3.57259 13.9047 4.02169 13.7479 4.48116 13.7653C4.94063 13.7828 5.37656 13.9731 5.70169 14.2982C6.02682 14.6233 6.21714 15.0593 6.23456 15.5187C6.25199 15.9782 6.09522 16.4273 5.79565 16.7761C5.7709 16.8051 5.75804 16.8424 5.75963 16.8805C5.76122 16.9186 5.77716 16.9547 5.80425 16.9816L7.52808 18.7054C7.55657 18.7339 7.59521 18.7499 7.6355 18.7499C7.67579 18.7499 7.71442 18.7339 7.74292 18.7054L14.7898 11.6589C14.8911 11.5574 14.9675 11.4337 15.0128 11.2976C15.058 11.1613 15.1342 11.0374 15.2356 10.9357C15.337 10.8339 15.4607 10.7573 15.5968 10.7117C15.7328 10.6664 15.8564 10.59 15.9578 10.4886L18.7054 7.74097C18.7339 7.71247 18.7499 7.67383 18.7499 7.63354C18.7499 7.59326 18.7339 7.55462 18.7054 7.52612L16.9816 5.80229C16.9547 5.77521 16.9186 5.75927 16.8805 5.75768C16.8424 5.75608 16.8051 5.76895 16.7761 5.7937C16.4277 6.09345 15.979 6.25065 15.5197 6.23384C15.0604 6.21704 14.6244 6.02748 14.2988 5.70308Z" stroke="#767676" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M9.78506 5.48672L9.14014 4.8418M11.5046 7.20625L11.0745 6.77656M13.2241 8.92617L12.7944 8.49609M15.1589 10.8605L14.514 10.2156" stroke="#767676" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
            <span id="ticket">41장 남음</span>
          </div>
        </div>
      </div>
    </div>
    <div class="participantsInfo box">
      <span>참여 아티스트</span>
      <div class="schedule grid-card grid-edit">
        <ul class="grid-top">
          <li>시간</li>
          <li>아티스트</li>
        </ul>
        <ul class="grid-result openDate-result relative" v-for="(schedule, index) in schedules" :key="schedule.schedule.id">
          <li class="select-time">
            <SelectTimeComponent v-model="schedule.startTime" :onChanged="onChangeSchedule"/>
            ~
            <SelectTimeComponent v-model="schedule.endTime" :onChanged="onChangeSchedule"/>
          </li>
          <li class="event">
            <img v-if="schedule.schedule.image != null" :src="schedule.schedule.image" alt="" class="profile">
            <span>{{ schedule.schedule.name }}</span>
          </li>
          <li class="deleteSvg" v-if="schedule.schedule.id !== 0">
            <button type="button" @click="removeSchedule(index)">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00002 1.16602C10.2218 1.16602 12.8334 3.7776 12.8334 6.99935C12.8334 10.2211 10.2218 12.8327 7.00002 12.8327C3.77827 12.8327 1.16669 10.2211 1.16669 6.99935C1.16669 3.7776 3.77827 1.16602 7.00002 1.16602ZM9.33335 6.41602H4.66669C4.51198 6.41602 4.3636 6.47747 4.25421 6.58687C4.14481 6.69627 4.08335 6.84464 4.08335 6.99935C4.08335 7.15406 4.14481 7.30243 4.25421 7.41183C4.3636 7.52122 4.51198 7.58268 4.66669 7.58268H9.33335C9.48806 7.58268 9.63644 7.52122 9.74583 7.41183C9.85523 7.30243 9.91669 7.15406 9.91669 6.99935C9.91669 6.84464 9.85523 6.69627 9.74583 6.58687C9.63644 6.47747 9.48806 6.41602 9.33335 6.41602Z" fill="#FF4B4B"/>
              </svg>
            </button>
          </li>
        </ul>
        <button type="button" class="grid-edit-add" @click="openArtistPopup">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0833 6.41732H7.58331V2.91732C7.58331 2.76261 7.52185 2.61424 7.41246 2.50484C7.30306 2.39544 7.15469 2.33398 6.99998 2.33398C6.84527 2.33398 6.6969 2.39544 6.5875 2.50484C6.4781 2.61424 6.41665 2.76261 6.41665 2.91732V6.41732H2.91665C2.76194 6.41732 2.61356 6.47878 2.50417 6.58817C2.39477 6.69757 2.33331 6.84594 2.33331 7.00065C2.33331 7.15536 2.39477 7.30373 2.50417 7.41313C2.61356 7.52253 2.76194 7.58398 2.91665 7.58398H6.41665V11.084C6.41665 11.2387 6.4781 11.3871 6.5875 11.4965C6.6969 11.6059 6.84527 11.6673 6.99998 11.6673C7.15469 11.6673 7.30306 11.6059 7.41246 11.4965C7.52185 11.3871 7.58331 11.2387 7.58331 11.084V7.58398H11.0833C11.238 7.58398 11.3864 7.52253 11.4958 7.41313C11.6052 7.30373 11.6666 7.15536 11.6666 7.00065C11.6666 6.84594 11.6052 6.69757 11.4958 6.58817C11.3864 6.47878 11.238 6.41732 11.0833 6.41732Z" fill="#767676"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import SelectCalendarComponent from "@/components/SelectCalendarComponent.vue";
import {onBeforeUnmount, ref} from "vue";
import SelectTimeComponent from "@/components/SelectTimeComponent.vue";

const isShowModal = ref(false);
const date = ref(new Date());
const location = ref({id: 1, name: '옥타바리움', address: '서울 어쩌구 저쩌구 어딘가', location: '서울', url: 'https://naver.com'})

const openTime = ref({hour: 18, minutes: 30})
const startTime = ref({hour: 19, minutes: 10})

const doorPrice = ref(25000);
const advPrice = ref(20000);

const extraPrices = ref([
  {title : 'STUDENT', price: 15000},
  {title : 'CHILDREN', price: 0},
]);

const schedules = ref([
  {
    startTime: {hour: 0, minutes: 0},
    endTime: {hour: 0, minutes: 0},
    schedule: {id: 0, image: null, name: 'FAN MEETING'}
  },
])

const popupWindowArtist = ref(null);
const popupWindowLocation = ref(null);

const openArtistPopup = () => {
  const url = new URL('/popup/artist', window.location.origin);
  popupWindowArtist.value =  window.open(url.href, '_blank', 'width=600,height=700');
};
const openLocationPopup = () => {
  const url = new URL('/popup/location', window.location.origin);
  popupWindowArtist.value =  window.open(url.href, '_blank', 'width=600,height=700');
};

const receiveDataFromPopup = (event) => {
  // 출처 검증 (보안)
  if (event.origin !== window.location.origin) return;

  let receive = JSON.parse(event.data);
  if (receive.type === 'ARTIST') {
    receiveArtist(receive.data);
  } else if (receive.type === 'LOCATION') {
    receiveLocation(receive.data);
  }

};
window.addEventListener('message', receiveDataFromPopup);

onBeforeUnmount(() => {
  window.removeEventListener('message', receiveDataFromPopup);

  if (popupWindowLocation.value && !popupWindowLocation.value.closed) {
    popupWindowLocation.value.close();
  }
  // 열려있는 팝업 창 닫기
  if (popupWindowArtist.value && !popupWindowArtist.value.closed) {
    popupWindowArtist.value.close();
  }

});


function receiveArtist(artist) {
  console.log(artist);
  schedules.value.push({
    startTime: {hour: 0, minutes: 0},
    endTime: {hour: 0, minutes: 0},
    schedule: artist
  });
}
function receiveLocation(data) {
  location.value = data;
}
function selectDate(select) {
  date.value = select;
  isShowModal.value = false;
}
function dateToString(date) {
  return `${format(date.getFullYear())}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
}
function format(integer) {
  return String(integer).padStart(2, '0');
}


function onChangeSchedule() {
  schedules.value.sort((a, b) => {
    if (a.startTime.hour !== b.startTime.hour) {
      return a.startTime.hour - b.startTime.hour;
    }
    return a.startTime.minutes - b.startTime.minutes;
  });
}
function addExtraPrice() {
  extraPrices.value.push({title : '', price: 0});
}
function removeExtraPrice(index) {
  extraPrices.value.splice(index, 1);
}

function removeSchedule(index) {
  schedules.value.splice(index, 1);
}
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
.box {
  padding: 15px;
}
.concert {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
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
  width: 100%;
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
  grid-template-columns: 1fr 1fr;
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
}
.participantsInfo > span {
  display: inline-block;
  margin-bottom: 10px;
}

/* input style */
.icon-text {
  white-space: nowrap;
}
input {
  width: 100%;
  color: var(--f1);
  font-size: var(--fs-14);
}
.select-date {
  text-decoration: underline;
  color: var(--f1);
  font-size: var(--fs-16);
}

.absolute {
  top: 60px;
  left: 0;
  z-index: 3;
  border: 1px #eee solid;
}

/* Grid-Edit */
.grid-edit-add {
  width: 100%;
  grid-template-columns: 100% ;
  height: 25px;
  border: 1px #eee solid;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.grid-edit-add:hover {
  background-color: #f6f6f6;
}

.grid-edit {
  padding-right: 20px;
}
.deleteSvg {
  width: 20px;
  height: 20px;
  position: absolute;

  right: -10px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.extra-title {
  text-align: center;
}
.input-price, .extra-price {
  text-align: center;
}
.select-time {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
}
#location {
  font-size: var(--fs-16);
  text-decoration: underline;
  color: var(--f1);
}

</style>