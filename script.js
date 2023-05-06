const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = '#' + randomColor;
    });
}