<script setup>

</script>

<template>
  <header>
    <div id="header-left">
      <h3>Admin Dashboard</h3>
    </div>

    <div id="header-right">
      <ul id="icon-ul">
        <li id="icon-li">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H14" stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M12 5V4" stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M19 17H5L7 15V10C7 7.102 9 5 12 5C15 5 17 7.102 17 10V15L19 17Z" stroke="#111111" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M16.5 11C18.433 11 20 9.433 20 7.5C20 5.567 18.433 4 16.5 4C14.567 4 13 5.567 13 7.5C13 9.433 14.567 11 16.5 11Z" fill="#ED1C24" stroke="#F7F7FB" stroke-width="1.5"/>
          </svg>
        </li>
      </ul>
      <div id="profile">
        <div id="profile-image">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10" cy="5.83398" rx="2.5" ry="2.5" fill="#767676" stroke="#767676" stroke-width="1.5"/>
            <path d="M3.3335 14.9993C3.3335 13.1584 4.82588 11.666 6.66683 11.666H13.3335C15.1744 11.666 16.6668 13.1584 16.6668 14.9993C16.6668 15.9198 15.9206 16.666 15.0002 16.666H5.00016C4.07969 16.666 3.3335 15.9198 3.3335 14.9993Z" fill="#767676" stroke="#767676" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
        <span id="profile-name">코지 프로덕션</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 80px;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px var(--stroke-color) solid;
}
#header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

header #profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

header #profile-image {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>