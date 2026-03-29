// ===========================
// URAL GO PARK — Scripts
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // --- Header scroll ---
    const header = document.getElementById('header');
    const floatingCta = document.getElementById('floatingCta');

    const onScroll = () => {
        const scrolled = window.scrollY > 80;
        header.classList.toggle('scrolled', scrolled);
        if (floatingCta) {
            floatingCta.classList.toggle('visible', window.scrollY > 600);
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Burger menu ---
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    document.querySelectorAll('[data-nav]').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- FAQ accordion ---
    document.querySelectorAll('.faq__question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq__item');
            const answer = item.querySelector('.faq__answer');
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq__item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq__answer').style.maxHeight = '0';
            });

            // Open clicked if was closed
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // --- Scroll reveal ---
    const revealElements = document.querySelectorAll(
        '.advantage-card, .how__step, .condition-card, .faq__item, .team__card, .contacts__block, .contacts__map-placeholder'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        revealObserver.observe(el);
    });

    // --- Smooth anchor scroll offset ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- Cookies banner ---
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        if (localStorage.getItem('cookiesAccepted')) {
            cookieBanner.classList.add('hidden');
        }
        document.getElementById('cookieAccept')?.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.add('hidden');
        });
        document.getElementById('cookieCancel')?.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'false');
            cookieBanner.classList.add('hidden');
        });
    }
});
