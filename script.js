// Плавний ефект для плаваючих елементів
window.addEventListener('scroll', function() {
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            element.classList.add('visible');
        }
    });
});
