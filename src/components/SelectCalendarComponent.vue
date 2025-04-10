<template>
  <div class="date_picker box">
    <div id="calendar_header">
      <button type="button" id="preButton" @click="localDate.prev(); renderCalendar();">
        <svg transform='rotate(180)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
      </button>
      <div class="months">
        <div id="mainMonth">{{ header }}</div>
      </div>
      <button type="button" id="nextButton" @click="localDate.next(); renderCalendar();">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
      </button>
    </div>
    <div id="calendar_body">
      <div id="mainBody">
        <div class="week">
          <div v-for="(week, i) in weeks" :key="i" class="cell">
            <div class="top">
              <span :class="{ SUN: i === 0, SAT: i === 6 }">{{ week }}</span>
            </div>
          </div>
        </div>
        <div v-for="(week, i) in days" :key="i" class="week">
          <button type="button" @click="onSelect(day.date)" v-for="(day, j) in week" :key="j" class="cell" :class="{ other: !day.isCurrentMonth }">
            <div :data-is-today="day.isToday" :data-is-select="day.isSelected" :class="day.cellClass">{{ day.day }}</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {LocalDate} from "../assets/js/localdate.js";
import {Schedule, ScheduleManager} from "../assets/js/schedule.js";
import {Server} from "@/stores/server.js";

const props = defineProps({
  focus: {
    type: Object,
    default: null
  }
})
const emit = defineEmits(['selectDate'])
const selectDate = props.focus != null ? new Date(props.focus.year, props.focus.month - 1, props.focus.day) : null;
function isSelectDate(date) {
  return date.getDate() === selectDate.getDate() &&
      date.getMonth() === selectDate.getMonth() &&
      date.getFullYear() === selectDate.getFullYear();
}
function onSelect(date) {
  emit('selectDate', date);
}
const localDate = new LocalDate();

const renderCalendar = () => {
  render();
  onChanged(localDate.year, localDate.month);
}

const header = ref('');
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const days = ref([]);

onMounted(() => {
  renderCalendar();
});

class DayData {

  constructor(isCurrentMonth, isToday, cellClass, day, date, isSelected) {
    this.isCurrentMonth = isCurrentMonth;
    this.isToday = isToday;
    this.cellClass = cellClass;
    this.day = day;
    this.date = date;
    this.isSelected = isSelected;
  }
}

function render() {

  header.value = localDate.getHeader();

  // 캘린더 데이터 생성
  const calendarDates = localDate.generate();

  const inputDayArray = [];

  // 주 단위로 생성
  for (let i = 0; i < calendarDates.length; i += 7) {

    let weekArray = [];

    // 한 주 생성
    for (let j = 0; j < 7 && (i + j) < calendarDates.length; j++) {
      const date = calendarDates[i + j];
      const day = date.getDate();
      const isToday = localDate.isToday(date);
      const isCurrentMonth = localDate.isCurrentMonth(date);
      const isSelectedDate = isSelectDate(date);

      let cellClass = '';
      if (j === 0) cellClass = 'SUN'; // 일요일
      else if (j === 6) cellClass = 'SAT'; // 토요일

      weekArray.push(new DayData(isCurrentMonth, isToday, cellClass, day, date, isSelectedDate))
    }
    inputDayArray.push(weekArray);
  }
  days.value = inputDayArray;
}

function format(integer) {
  return String(integer).padStart(2, '0');
}

function dateToString(date) {
  return `${format(date.getFullYear())}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
}

function onChanged(year, month) {

}


function getHours(date) {
  return `${format(date.getHours())}:${format(date.getMinutes())}`;
}

</script>


<style scoped>
#calendar_header {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 12px;
}

.months {
  display: flex;
  justify-content: space-around;
  font-size: var(--fs-21);
}

#nextButton, #preButton {
  background-color: transparent;
}

#nextButton svg, #preButton svg {
  width: 18px;
  height: 18px;
}


#nextButton:disabled svg, #preButton:disabled svg{
  fill: #999;
}

/* 캘린더 바디 */
#calendar_body {
  display: flex;
  justify-content: flex-start;
  column-gap: 2rem;
  padding: 10px;
}
#calendar_body > #mainBody {
  width: 100%;
}

.week {
  display: grid;
  grid-template-columns: repeat(7, 45px);
  gap: 0;
}

.cell div[data-is-select="true"] {
  background-color: var(--main-color);
  color: white;
}

.cell div[data-is-today="true"] {
  text-decoration: underline;
}

.cell {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
}
.cell:hover div {
  background-color: var(--main-color-background);
}


.cell > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 35px;
  border-radius: 4px;
  font-size: var(--fs-14);
}
.cell > div:not(.top) {
  font-size: var(--fs-16);
}

.SAT {
  color: #007AFF;
}

.SUN {
  color: #FF2D55;
}


/* 오늘 이전 날짜는 선택 x */
.cell.other div {
  color: var(--f3);
}


</style>