// stores/calendarStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LocalDate } from "../assets/js/localdate.js";
import { Schedule, ScheduleManager } from "../assets/js/schedule.js";

export const useCalendarStore = defineStore('calendar', () => {
    // 상태
    const localDate = ref(new LocalDate());
    const scheduleManager = ref(new ScheduleManager());
    const header = ref('');
    const days = ref([]);
    const schedules = ref([]);

    // 액션
    function prevMonth() {
        localDate.value.prev();
        renderCalendar();
    }

    function nextMonth() {
        localDate.value.next();
        renderCalendar();
    }

    function renderCalendar() {
        render();
        onChanged(localDate.value.year, localDate.value.month);
    }

    function render() {
        header.value = localDate.value.getHeader();

        // 캘린더 데이터 생성
        const calendarDates = localDate.value.generate();
        const inputDayArray = [];

        // 주 단위로 생성
        for (let i = 0; i < calendarDates.length; i += 7) {
            let weekArray = [];

            // 한 주 생성
            for (let j = 0; j < 7 && (i + j) < calendarDates.length; j++) {
                const date = calendarDates[i + j];
                const day = date.getDate();
                const isToday = localDate.value.isToday(date);
                const isCurrentMonth = localDate.value.isCurrentMonth(date);

                let cellClass = '';
                if (j === 0) cellClass = 'SUN'; // 일요일
                else if (j === 6) cellClass = 'SAT'; // 토요일

                weekArray.push(new DayData(isCurrentMonth, isToday, cellClass, day, dateToString(date)))
            }
            inputDayArray.push(weekArray);
        }
        days.value = inputDayArray;
    }

    function onChanged(year, month) {
        scheduleManager.value.addAll(new Date(), [
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
        const currentMonth = `${format(localDate.value.year)}-${format(localDate.value.month)}`;
        let schedule = scheduleManager.value.get(currentMonth);

        if (!schedule) return; // 해당 월의 스케줄 데이터가 없으면 종료
        schedules.value = schedule;
    }

    // 유틸리티 함수
    function format(integer) {
        return String(integer).padStart(2, '0');
    }

    function dateToString(date) {
        return `${format(date.getFullYear())}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
    }

    function getHours(date) {
        return `${format(date.getHours())}:${format(date.getMinutes())}`;
    }

    return {
        localDate,
        header,
        days,
        schedules,
        prevMonth,
        nextMonth,
        renderCalendar,
        getHours
    };
});

// DayData 클래스 정의
class DayData {
    constructor(isCurrentMonth, isToday, cellClass, day, date) {
        this.isCurrentMonth = isCurrentMonth;
        this.isToday = isToday;
        this.cellClass = cellClass;
        this.day = day;
        this.date = date;
    }
}