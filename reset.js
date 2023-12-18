(()=>{
    const SELECTED_COLOR='rgb( 38, 191, 163)'
    const INIT_COLOR='rgb( 13, 104, 109)'

    const reset = document.querySelector('.reset');
    
    reset.addEventListener('mouseover',()=>{
        reset.style.backgroundColor = SELECTED_COLOR;
    })
    reset.addEventListener('mouseout',()=>{
        reset.style.backgroundColor = INIT_COLOR;
    })


})();