/* Burger menu toggle */
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('burgerBtn');
    const nav = document.getElementById('navLinks');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('open');
            const spans = btn.querySelectorAll('span');
            if (nav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Close menu on link click
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                nav.classList.remove('open');
                const spans = btn.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }
});
