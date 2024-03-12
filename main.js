let bill = document.querySelector('.inputs-section__bill-input');
let billNumber = parseInt(bill.value);


let people = document.querySelector('.inputs-section__people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResuslt = document.querySelector('.results__total-value')

let buttons = document.querySelectorAll('.btns__button');

let alert = document.querySelector('#alert');

let tipValue = 5;
buttons.forEach(Element =>{
    Element.addEventListener('click', event=>{
        //Cambiar estilos
        removeActive()
        Element.classList.add('btns__button--selected');


        tipValue = parseInt(event.target.innerText.slice(0,-1));
        
        calculateTip()
        });
})

function removeActive(){
    buttons.forEach(Element =>{
        Element.classList.remove('btns__button--selected');
    });
}



// Actualizando el bill
bill.addEventListener('input', ()=>{
    billNumber = parseFloat(bill.value);
    
})

// Actualizando Custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('click', ()=>{
    removeActive()
});
custom.addEventListener('input', ()=>{
    
    tipValue = parseInt(custom.value);
   if (isNaN(tipValue)){

   }else{
    calculateTip();
   }
     
})


// Actualizando Personas
people.addEventListener('input', ()=>{
    peopleNumber = parseFloat(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)){
        people.style.borderColor = 'red';
        alert.classList.add('error');
    }else{
        alert.classList.remove('error');
        people.style.borderColor = 'hsl(189, 41%, 97%)';
        calculateTip()
    }
    
})

// Reset
let resetBtn = document.querySelector('.result-section__reset');
resetBtn.addEventListener('click', ()=>{
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'Custom';
    calculateTip();
});

function calculateTip(){
     //Calculo de Tip Amount
     tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

     //Calculo del total
         totalResuslt.innerText = (((billNumber * tipValue / 100) + billNumber)/peopleNumber).toFixed(2);
}