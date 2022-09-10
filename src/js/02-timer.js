//*  Напиши скрипт таймера, 
//*  который ведёт обратный 
//*  отсчет до определенной даты. 
//*  Такой таймер может использоваться 
//*  в блогах и интернет-магазинах, 
//*  страницах регистрации событий, 
//*  во время технического обслуживания и т. д. 
//*  Добавь минимальное оформление элементов интерфейса.
//*  Используй библиотеку flatpickr для того 
//*  чтобы позволить пользователю кроссбраузерно 
//*  выбрать конечную дату и время в одном элементе интерфейса. 
//*  Для того чтобы подключить CSS код библиотеки в проект, 
//*  необходимо добавить еще один импорт, 
//*  кроме того который описан в документации.
 
// import flatpickr from "flatpickr";
// // Дополнительный импорт стилей
// import "flatpickr/dist/flatpickr.min.css";

// const refs = {
//   input: document.querySelector('[datetime-picker]'),
//   startButton: document.querySelector('[data-start]'),
//   timer: document.querySelector('.timer'),
// days:document.querySelector('[data-days]'),
// hours:document.querySelector('[data-hours]'),
// minutes:document.querySelector('[data-minutes]'),
// seconds:document.querySelector('[data-seconds]'),
// };

// // let selectedDate = null;

// // const currentDate = Date.now();
// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //   },
// // };



// refs.startButton.addEventListener('click', onUpdateClockFace);
// refs.startButton.setAttribute('disabled', true);

// function onUpdateClockFace({ days, hours, minutes, seconds }){
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }

// flatpickr(element, {});
// function flatpickr(refs.startButton, options){

// };

// function pad(value) {
// return String(value).padStart(2, '0');
// };

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, minutes, seconds };
// };


// const timer = {
// intervalId: null,
// isActive: false,
// start(){
//   if(refs.startButton.hasAttribute('isActive')){
//     return;
//   }
// }
// // const startTime = Date.now();
// // refs.startButton.hasAttribute('isActive') = true;

// // const currentTime = Date.now();
// //       const deltaTime = currentTime - startTime;
// //       const time = this.getTimeComponents(deltaTime);

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //   },
// // };


//   // onTick: onClickUpdateTimer
// };



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}