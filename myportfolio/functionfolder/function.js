const button = document.querySelector('.select');
const ribbon = document.querySelector('.ribbon');

button.addEventListener('click', function() {
    if (ribbon.style.visibility === 'visible') {
        ribbon.style.opacity = '0';
        ribbon.style.height = '0';

        setTimeout(function() {
            ribbon.style.visibility = 'hidden';
        }, 300);
    } else {
        ribbon.style.visibility = 'visible';
        ribbon.style.opacity = '1';
        ribbon.style.height = '200px';
    }
});

