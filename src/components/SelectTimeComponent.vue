
<template>

  <div class="select-time">
    <div class="click-dropdown">
      <button @click="toggleAllClose(); toggleHour = !toggleHour;" class="click-dropdown-btn">
        <span class="value">{{ format(hour)}} </span>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.67065 8.36828C6.06702 8.95673 6.93308 8.95673 7.32944 8.36828L9.08748 5.75827C9.53489 5.09404 9.05894 4.19961 8.25808 4.19961H4.74201C3.94116 4.19961 3.46521 5.09404 3.91262 5.75827L5.67065 8.36828Z" fill="#505050"/>
        </svg>
      </button>
      <div id="myDropdown" class="click-dropdown-content" :class="{ show : toggleHour }">
        <button type="button" @click="toggleAllClose(); hour = hours; toggleHour = false; onChange()" v-for="hours in hourList" :key="hours">{{ format(hours) }}</button>
      </div>
    </div>
    <span class="separator">:</span>
    <div class="click-dropdown">
      <button @click="toggleAllClose(); toggleMinutes = !toggleMinutes;" class="click-dropdown-btn">
        <span class="value">{{ format(minutes)}} </span>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.67065 8.36828C6.06702 8.95673 6.93308 8.95673 7.32944 8.36828L9.08748 5.75827C9.53489 5.09404 9.05894 4.19961 8.25808 4.19961H4.74201C3.94116 4.19961 3.46521 5.09404 3.91262 5.75827L5.67065 8.36828Z" fill="#505050"/>
        </svg>
      </button>
      <div id="myDropdown" class="click-dropdown-content" :class="{ show : toggleMinutes }">
        <button type="button" @click="toggleAllClose(); minutes = minute; toggleMinutes = false; onChange()" v-for="minute in minuteList" :key="minute">{{ format(minute) }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const hourList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
const minuteList = [0, 10, 20, 30, 40, 50];

const toggleHour = ref(false);
const toggleMinutes = ref(false);

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({ hour: 0, minutes: 0 })
  },
  onChanged: {
    type: Function,
    default: null
  }
})
const emit = defineEmits(['update:modelValue']);
const hour = ref(props.modelValue == null || props.modelValue.hour == null ? 0 : Number(props.modelValue.hour));
const minutes = ref(props.modelValue == null || props.modelValue.minutes == null ? 0 : Number(props.modelValue.minutes));

function toggleAllClose() {
  toggleHour.value = false;
  toggleMinutes.value = false;
}
function format(integer) {
  return String(integer).padStart(2, '0');
}

function onChange() {
  emit('update:modelValue', { hour: hour.value, minutes: minutes.value });
  if (props.onChanged) {
    props.onChanged();
  }
}


</script>

<style scoped>
.click-dropdown {
  position: relative;
  display: inline-block;
}

.click-dropdown-btn {
  padding: 4px 4px;
  font-size: var(--fs-14);
  border: 1px #eee solid;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.click-dropdown-content {
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
  padding: 5px 16px;
  text-decoration: none;
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