<template>
  <div class="date_picker">
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
    <div id="calendar_body" class="box">
      <div id="mainBody">
        <div class="week">
          <div v-for="(week, i) in weeks" :key="i" class="cell">
            <div class="top">
              <span :class="{ SUN: i === 0, SAT: i === 6 }">{{ week }}</span>
            </div>
          </div>
        </div>
        <div v-for="(week, i) in days" :key="i" class="week">
          <div v-for="(day, j) in week" :key="j" class="cell" :class="{ other: !day.isCurrentMonth }">
            <div :data-is-today="day.isToday" :class="day.cellClass">{{ day.day }}</div>
            <ul class="scheduleList">
              <li class="schedule" v-for="(schedule, k) in schedules[day.date]" :key="k">
                <a :href="schedule.id">
                  <img :src="schedule.image" alt="포스터" class="poster">
                  <div class="scheduleInfo">
                    <span class="openDate">OPEN <b>{{ getHours(schedule.dateTime) }}</b></span>
                    <span class="title">{{ schedule.title }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {LocalDate} from "../assets/js/localdate.js";
import {Schedule, ScheduleManager} from "../assets/js/schedule.js";

const localDate = new LocalDate();
const scheduleManager = new ScheduleManager();

const renderCalendar = () => {
  render();
  onChanged(localDate.year, localDate.month);
}

const header = ref('');
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const days = ref([]);
const schedules = ref([]);

onMounted(() => {
  renderCalendar();
});

class DayData {

  constructor(isCurrentMonth, isToday, cellClass, day, date) {
    this.isCurrentMonth = isCurrentMonth;
    this.isToday = isToday;
    this.cellClass = cellClass;
    this.day = day;
    this.date = date;
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

      let cellClass = '';
      if (j === 0) cellClass = 'SUN'; // 일요일
      else if (j === 6) cellClass = 'SAT'; // 토요일

      weekArray.push(new DayData(isCurrentMonth, isToday, cellClass, day, dateToString(date)))
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
  scheduleManager.addAll(new Date(), [
    new Schedule(
        1,
        'Frame 1707485619.jpg',
        '어쨌든 새학기새학기새학기새학기새학기새학기새학기새학기새학기새학기새학기새학기새학기',
        new Date(2025, 1, 28, 16, 30)
    ),
    new Schedule(
        2,
        'Frame 1707485619.jpg',
        '어쨌든 새학기',
        new Date(2025, 2, 20, 16, 30)
    ),
    new Schedule(
        3,
        'Frame 1707485619.jpg',
        '22어쨌든 새학기',
        new Date(2025, 2, 20, 17, 20)
    ),
    new Schedule(
        5,
        'Frame 1707485619.jpg',
        '233어쨌든 새학기',
        new Date(2025, 2, 20, 19, 0)
    ),
  ]);
  scheduleRender();
}

function scheduleRender() {
  const currentMonth = `${format(localDate.year)}-${format(localDate.month)}`;
  let schedule = scheduleManager.get(currentMonth);

  if (!schedule) return; // 해당 월의 스케줄 데이터가 없으면 종료
  schedules.value = schedule;
}

function getHours(date) {
  return `${format(date.getHours())}:${format(date.getMinutes())}`;
}

</script>


<style>
#calendar_header {
  display: flex;

  gap: 12px;
  margin-bottom: 20px;
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


#nextButton:disabled svg, #preButton:disabled svg {
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
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 2px #eee solid;
  gap: 0;
}

.week:not(:first-child) > .cell:not(:last-child) {
  border-right: 2px #eee solid;
}

.cell div[data-is-today="true"] {
  background-color: var(--main-color);
  border-radius: 4px;
  color: white;
}

.cell {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
}


.cell > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  font-size: var(--fs-14);
}

.cell > div:not(.top) {
  height: 20px;
  font-size: var(--fs-16);
  margin-bottom: 10px;
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


.cell {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.scheduleList {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  min-height: 50px;
  padding: 0 5px;
}
.schedule {
  min-height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
}
.schedule > a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  gap: 6px;
  width: 100%;
  overflow: hidden;
}


.schedule::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: var(--main-color);
}

.scheduleInfo {
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;

}
.openDate {
  font-size: var(--fs-12);
  color: var(--f3);
  font-weight: 400;
}
.scheduleInfo .title {
  font-weight: 500;
  font-size: var(--fs-14);
  color: var(--f2);
  white-space: nowrap;        /* 텍스트가 줄바꿈 되지 않도록 설정 */
  overflow: hidden;           /* 넘치는 콘텐츠 숨김 */
  text-overflow: ellipsis;    /* 넘치는 부분을 ...으로 표시 */

}


</style>