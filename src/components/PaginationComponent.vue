<template>
  <div id="pagintaion">
    <div class="group">
      <div class="group-left">
        <h4 class="total">총 0건</h4>
      </div>
      <div class="group-right">
        <div class="input-box">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74998 14.1667C11.7415 14.1667 14.1666 11.7415 14.1666 8.75C14.1666 5.75846 11.7415 3.33333 8.74998 3.33333C5.75844 3.33333 3.33331 5.75846 3.33331 8.75C3.33331 11.7415 5.75844 14.1667 8.74998 14.1667Z" stroke="#767676" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M16.1363 17.197C16.4292 17.4899 16.9041 17.4899 17.197 17.197C17.4899 16.9041 17.4899 16.4292 17.197 16.1363L16.1363 17.197ZM11.9697 13.0303L16.1363 17.197L17.197 16.1363L13.0303 11.9697L11.9697 13.0303Z" fill="#767676"/>
          </svg>
          <input type="text" style="width: 330px;" class="inputBox" name="searchWord" id="searchWord" placeholder="이름을 입력해주세요.">
        </div>
        <button id="delete">삭제</button>
        <button id="add">등록</button>
      </div>
    </div>
    <div id="result" class="box">
      <ul class="searchResult" id="searchTitle">
        <a disabled>
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
        </a>
      </ul>
      <ul class="searchResult" id="searchResult">
        <a class="none">검색 결과가 없습니다.</a>
      </ul>
    </div>
    <div class="pagination">
      <button type="button" class="button_first" disabled="true" id="first-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
      </button>
      <button type="button" class="button_previous" disabled="true" id="prev-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </button>
      <ol class="page_list"></ol>
      <button type="button" class="button_next" id="next-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </button>
      <button type="button" class="button_last" id="last-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import {PageData, Pagination} from "@/assets/js/pagination.js";
</script>


<style scoped>
h1 {
  color: #5F43FF;
}
.group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
}

/* 페이지네이션 */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 31px;
  background-color: #ffffff00;
}

.pagination svg {
  fill: var(--f1);
  width: 100%;
  height: 100%;
}

.pagination button:disabled svg {
  fill: rgba(16, 16, 16, 0.3);
  pointer-events: none;
}
.pagination button {
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: none;
}
.pagination button:disabled {
  cursor: default;
}

.pagination .button_previous {
  margin-left: 10px;
}

.pagination .button_next {
  margin-right: 10px;
}

.pagination .page_list {
  padding: 0 14px;
  margin: 0 15px;
  white-space: nowrap;
  font-size: 0;
}

.pagination .page {
  display: inline-block;
}

.pagination .page + .page {
  margin-left: 6px;
}

.pagination .page.selected .page_link {
  border: 1px var(--main-color) solid;
  background: var(--main-color-background);
  color: var(--main-color);
}

.pagination .page_link:hover {
  background: var(--main-color-2);
}

.pagination .page_link {
  position: relative;
  display: block;
  min-width: 30px;
  height: 28px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0 7px;
  font-size: 14px;
  font-weight: normal;
  line-height: 26px;
  color: #303038;
  text-align: center;
}

.group {
  margin: 0 8px 12px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.group-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.group-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

#searchTitle {
  background-color: #F7F7FB;
}

.searchResult > a {
  display: grid;
  align-items: center;
  justify-items: center;
  height: 40px;
  text-decoration: none;
}
.searchResult > a:hover:not(#searchTitle > a) {
  background-color: #fff9f9;
  border-radius: 5px;
}
.searchResult > a > li {
  display: flex;
  align-items: center;
  justify-content: center;
}



</style>