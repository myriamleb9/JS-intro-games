const CounterEl = document.querySelector('.counter');
const CounterTitleEl = document.querySelector('.counter-title');
const CounterValueEl = document.querySelector('.counter-value');
const CounterResetEl = document.querySelector('.counter-reset');
const ButtonDecreaseEl = document.querySelector('.button_counter_decrease');
const ButtonIncreaseEl = document.querySelector('.button_counter_increase');

CounterResetEl.addEventListener('click', function () {

    CounterValueEl.textContent = 0;

    ButtonIncreaseEl.disabled = false;
    ButtonDecreaseEl.disabled = false;

     CounterEl.classList.remove ('counter_limit');

     CounterTitleEl.textContent = 'Fancy Counter';


});

ButtonIncreaseEl.addEventListener('click', () => {

// Define the variable

const CurrentValue = Number(CounterValueEl.textContent);


//Increment Value

let NewValue = CurrentValue + 1;

if (NewValue > 5) {
    CounterTitleEl.innerHTML= 'Buy PRO for 10$';
    NewValue = 5;
    
    CounterEl.classList.add ('counter_limit');

    ButtonIncreaseEl.disabled = true;
    ButtonDecreaseEl.disabled = true;
}

 CounterValueEl.textContent = NewValue;

});


ButtonDecreaseEl.addEventListener('click', () => {

// Define the variable

const CurrentValue = Number(CounterValueEl.textContent);


//Decrement Value

let NewValue = CurrentValue - 1;

if (NewValue < 0 ) {
    NewValue=0;
}

 CounterValueEl.textContent = NewValue;

});



