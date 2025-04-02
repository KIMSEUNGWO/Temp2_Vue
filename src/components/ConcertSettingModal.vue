<template>

  <div class="setting-modal">
    <div class="setting-menu edit">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.59044 3.45117H3.7714C3.33695 3.45117 2.92029 3.62376 2.61309 3.93096C2.30589 4.23816 2.1333 4.65482 2.1333 5.08927V12.4607C2.1333 12.8951 2.30589 13.3118 2.61309 13.619C2.92029 13.9262 3.33695 14.0988 3.7714 14.0988H11.1428C11.5773 14.0988 11.9939 13.9262 12.3011 13.619C12.6083 13.3118 12.7809 12.8951 12.7809 12.4607V11.6417" stroke="#767676" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3242 3.94335L12.2899 5.90904M13.1974 4.98189C13.4554 4.72383 13.6004 4.37382 13.6004 4.00887C13.6004 3.64392 13.4554 3.29391 13.1974 3.03585C12.9393 2.77779 12.5893 2.63281 12.2244 2.63281C11.8594 2.63281 11.5094 2.77779 11.2513 3.03585L5.73755 8.52997V10.4957H7.70325L13.1974 4.98189Z" stroke="#767676" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>공연 수정</span>
    </div>
    <div class="setting-menu delete">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 6.50065L12.0033 14.0647C11.9491 14.3736 11.7877 14.6535 11.5475 14.8551C11.3072 15.0568 11.0036 15.1673 10.69 15.1673H5.31C4.99636 15.1673 4.69275 15.0568 4.45255 14.8551C4.21235 14.6535 4.05093 14.3736 3.99667 14.0647L2.66667 6.50065M14 4.50065H10.25M10.25 4.50065V3.16732C10.25 2.8137 10.1095 2.47456 9.85948 2.22451C9.60943 1.97446 9.27029 1.83398 8.91667 1.83398H7.08333C6.72971 1.83398 6.39057 1.97446 6.14052 2.22451C5.89048 2.47456 5.75 2.8137 5.75 3.16732V4.50065M10.25 4.50065H5.75M2 4.50065H5.75" stroke="#FF4B4B" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>공연 삭제</span>
    </div>
  </div>
</template>

<script setup>

</script>


<style scoped>
.setting-modal {
  z-index: 10;
  position: absolute;
  top: 100%;
  right: 0;

  padding: 11px 15px;
  border-radius: 8px;
  background-color: white;
  border: 1px #eee solid;

  box-shadow: 10px 10px 30px rgb(0, 0, 0, 0.12);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
}
.setting-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.edit {
  color: var(--f2);
  fill: var(--f2);
}
.delete span {
    color: #FF4B4B;
}
</style>