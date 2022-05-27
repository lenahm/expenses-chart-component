fillTodaysBarCyan();
fillBarsHeight();

function fillTodaysBarCyan() {
    const todayAbbreviation = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const bars = document.querySelectorAll('.bar'); 

    bars.forEach(bar => {
        if (bar.id === todayAbbreviation) {
            bar.childNodes[3].style.backgroundColor = 'var(--cyan)';
        }
    }); 
}

function fillBarsHeight() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                data.forEach(date => {
                    if (bar.id === date.day) {
                        bar.childNodes[3].style.height = `${date.amount}px`;
                    }
                }); 
            }); 
        });
}

const fills = document.querySelectorAll('.fill'); 

fills.forEach(fill => fill.addEventListener('mouseenter', () => {
    const amount = `$${fill.style.height.replace('px', '')}`;
    fill.previousElementSibling.innerHTML = amount;
}))

fills.forEach(fill => fill.addEventListener('mouseleave', () => {
    fill.previousElementSibling.innerHTML = '';
})); 
