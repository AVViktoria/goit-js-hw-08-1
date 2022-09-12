import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
// import 'flatpickr/dist/themes/dark.css';

let selectedTime = null;
const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

// refs.startBtn.setAttribute('disabled', true);


// //*   Принимает время в миллисекундах
// //*   Высчитывает сколько в них вмещается часов/минут/секунд
// //*   Возвращает объект со свойствами hours, mins, secs
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// //*   Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function pad(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      selectedDates[0] = new Date();
    } else {
      refs.startBtn.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
};

class Timer {
  //*  первоначальные данные перед запуском таймера
  constructor() {
    this.timerId = null;
    this.isActive = false;
    refs.startBtn.disabled = true;
  }

  //*  запустили таймер
  startTimer() {
    // if (this.isActive) {
    //   return;
    // }

    if(refs.startBtn.hasAttribute('isActive')){
      return;
    }

    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      const componentsTimer = convertMs(deltaTime);
      this.onUpdateClockFace(componentsTimer);
      if (deltaTime <= 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  //*  передаем  интерфейс  таймера
  onUpdateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }

  //*  остановили таймер очистили интервал
  stopTimer() {
    clearInterval(this.timerId);
  }
}

const timer = new Timer();
flatpickr(refs.inputDate, options);
refs.startBtn.addEventListener('click', () => timer.startTimer());

// const startTime = Date.now();
// refs.startButton.hasAttribute('isActive') = true;

// const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

