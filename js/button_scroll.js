document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('btn-back-to-top');

    window.addEventListener('scroll', () => {
        console.log(`Scroll position: ${window.scrollY}`);
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
