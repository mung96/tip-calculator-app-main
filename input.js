(()=>{
    const SELECTED_COLOR='rgb( 38, 191, 163)'
    const INIT_COLOR='rgb( 0, 73, 77)'

    const rates = document.querySelectorAll('.rate');
    
    for(let i=0;i<rates.length;i++){
        let currentRate = rates[i];
        rates[i].addEventListener('mouseover',()=>{
            currentRate.style.backgroundColor=SELECTED_COLOR;
        })
        rates[i].addEventListener('mouseout',()=>{
            currentRate.style.backgroundColor=INIT_COLOR;
        })
    }

})();