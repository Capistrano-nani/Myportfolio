const basicInfoDiv = document.querySelector('.basicinfo');
const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
const totalSections = sections.length;
let isScrolling = false;

function scrollToSection(index) {
    if (index >= 0 && index < totalSections) {
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

basicInfoDiv.addEventListener('mouseenter', function () {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('disable-scroll');
});

basicInfoDiv.addEventListener('mouseleave', function () {
    document.body.style.overflow = 'auto';
    document.body.classList.remove('disable-scroll');
});

window.addEventListener('wheel', function (e) {

    if (basicInfoDiv.contains(e.target)) {
        e.preventDefault();
        return;
    }

    if (isScrolling) return;

    const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

    if (scrollDirection === 'down' && currentSectionIndex < totalSections - 1 && e.deltaY > 100) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
        isScrolling = true;

        setTimeout(() => {
            isScrolling = false;
        }, 500);  
    }

    if (scrollDirection === 'up' && currentSectionIndex > 0 && e.deltaY < -100) {
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
        isScrolling = true;

        setTimeout(() => {
            isScrolling = false;
        }, 500); 
    }
});

const scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach(button => {
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
