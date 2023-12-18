(()=>{
    const SELECTED_COLOR='rgb(38, 191, 163)'
    const INIT_COLOR='rgb( 13, 104, 109)'

    const bill = document.querySelector('.input-money input');
    const rates = document.querySelectorAll('.rate');
    const custom = document.querySelector('#custom');
    const people = document.querySelector('.input-people input');    
    const reset = document.querySelector('.reset');

    let results = document.querySelectorAll('.result-amount');

    window.addEventListener('mouseover',()=>{
        let money=Number(bill.value);
        let rate;
        let num=Number(people.value);
        let tipAmount=0;
        let total=0;

        for(let i=0;i<rates.length;i++){
            if(window.getComputedStyle(rates[i]).backgroundColor==SELECTED_COLOR){
                rate = Number(rates[i].textContent.slice(0,-1));
            }
        }
        tipAmount = money*(rate/100)/num;
        total = money/num + tipAmount;

        if(!isNaN(total)& isFinite(total)){
            results[0].textContent = '$'+tipAmount.toFixed(2);
            results[1].textContent = '$'+total.toFixed(2);
        }
    })
    
    reset.addEventListener('mouseover',()=>{
        reset.style.backgroundColor = SELECTED_COLOR;
        
    })
    reset.addEventListener('mouseout',()=>{
        reset.style.backgroundColor = INIT_COLOR;
    })


})();