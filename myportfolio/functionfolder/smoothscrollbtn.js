document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav .ribbon a');  
    const sections = document.querySelectorAll('section');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();  
            const targetId = this.getAttribute('href').substring(1);  
            const targetSection = document.getElementById(targetId); 

            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });
});
