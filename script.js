fillTodaysBarCyan();
fillBarsHeight();

function fillTodaysBarCyan() {
    const todayAbbreviation = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const bars = document.querySelectorAll('.bar'); 

    bars.forEach(bar => {
        if (bar.id === todayAbbreviation) {
            bar.childNodes[1].style.backgroundColor = 'var(--cyan)';
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
                        bar.childNodes[1].style.height = `${date.amount}px`;
                    }
                }); 
            }); 
        });
}