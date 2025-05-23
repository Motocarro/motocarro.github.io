const text = document.getElementById('text');
const circle = document.getElementById('circle');

window.addEventListener('load', () => {
    const rect = text.getBoundingClientRect();
    circle.setAttribute('cx', rect.left + rect.width / 2);
    circle.setAttribute('cy', rect.top + rect.height / 2);
    circle.setAttribute('r',250);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        circle.setAttribute('fill', 'url(#gradient)');
        circle.style.opacity = 1;
    } else {
        circle.style.opacity = 0;
    }
});

 
