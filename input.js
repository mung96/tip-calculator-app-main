(()=>{
    const SELECTED_COLOR='rgb( 38, 191, 163)'
    const INIT_COLOR='rgb( 0, 73, 77)'

    const rates = document.querySelectorAll('.rate');
    
    for(let i=0;i<rates.length;i++){
        let currentRate = rates[i];
        let currentBackColor = 'rgb( 0, 73, 77)';
        rates[i].addEventListener('mouseover',()=>{
            currentBackColor = window.getComputedStyle(currentRate).backgroundColor;
            currentRate.style.backgroundColor=SELECTED_COLOR;
        })
        rates[i].addEventListener('mouseout',()=>{
            currentRate.style.backgroundColor=currentBackColor;
        })
        rates[i].addEventListener('click',()=>{
            currentRate.style.backgroundColor=SELECTED_COLOR;
            currentBackColor = SELECTED_COLOR;
        })
    }

})();