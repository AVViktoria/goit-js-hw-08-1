import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
  // delay: document.querySelector('[name="delay"]'),
  // step: document.querySelector('[name="step"]'),
  // amount: document.querySelector('[name="amount"]'),
  // button: document.querySelector('[type="submit"]'),
};
refs.form.addEventListener('submit', createPromptSubmit);


function createPromptSubmit(e){
  e.preventDefault();
  delayValue = Number(e.currentTarget.delay.value);
 amountValue = Number(e.currentTarget.amount.value);
  stepValue = Number(e.currentTarget.step.value);


  for(let i=1; i<=amountValue; i+=1){
    createPromise(i, delayValue)
  .then(({ position, delay }) => {
setTimeout(() => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}, delay);
    
  })
  .catch(({ position, delay }) => {
    setTimeout(()=> {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
    
  });
  delayValue +=stepValue;
  }
}


function createPromise(position, delay) {
const shouldResolve = Math.random() > 0.3; 
const objectPromise = {position, delay};

  return new Promise((resolve, reject) =>{
  if(shouldResolve){
      resolve(objectPromise);
    }
      reject(objectPromise);
    })
  }