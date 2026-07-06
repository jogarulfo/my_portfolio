/* =========================================================================
   Joseph RIGAL — Portfolio interactions
   Single-page, dark-only. Nav, scrollspy, reveal-on-scroll, back-to-top.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollSpy();
    initReveal();
    initBackToTop();
});

/* ----- Navbar background on scroll ----- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

/* ----- Mobile hamburger menu ----- */
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    const close = () => { menu.classList.remove('active'); toggle.classList.remove('active'); };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close after tapping a link, or clicking outside
    menu.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', close));
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) close();
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 768) close(); });
}

/* ----- Scrollspy: highlight the nav link for the section in view ----- */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const links = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;

    const byId = {};
    links.forEach(l => { byId[l.getAttribute('href')] = l; });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const link = byId['#' + entry.target.id];
                if (link) {
                    links.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
}

/* ----- Reveal-on-scroll ----- */
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
}

/* ----- Back-to-top button ----- */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const onScroll = () => btn.classList.toggle('visible', window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
