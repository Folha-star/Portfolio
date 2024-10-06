document.addEventListener("DOMContentLoaded", function() {
    // Кнопки "Замовити" з секції Ціни
    const orderButtons = document.querySelectorAll('.pricing-card .btn-primary');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Дякуємо за замовлення! Ми з вами зв\'яжемося.');
        });
    });

    // Обробка контактної форми
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Ваше повідомлення відправлено!');
        contactForm.reset();
    });
});
