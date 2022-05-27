// console.log(document.querySelectorAll('.bar').forEach(node => console.log(node.id)));

fillTodaysBarCyan();

function fillTodaysBarCyan() {
    const todayAbbreviation = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const bars = document.querySelectorAll('.bar'); 

    bars.forEach(bar => {
        if (bar.id === todayAbbreviation) {
            bar.childNodes[1].style.backgroundColor = 'var(--cyan)';
        }
    }); 
}