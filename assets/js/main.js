// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    initializeProjectFilter();
    initializeScrollEffects();
    initializeTypingEffect();
    initializeCounterAnimation();
    initializeBackToTop();
    populateProjects();
    // Allow transitions after theme set
    document.documentElement.classList.remove('pre-theme');
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}

// ===== THEME TOGGLE =====
function initializeTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');

    // Determine initial theme: stored preference > system preference > light
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');

    setTheme(initial);

    if (toggle) {
        updateVisualFromTheme(initial);
        const handleToggle = () => {
            const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
            updateVisualFromTheme(next);
            localStorage.setItem('theme', next);
        };
        toggle.addEventListener('click', handleToggle);
        toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleToggle();
            }
        });
    }

    // Listen to system changes if user hasn’t set a preference
    if (!stored && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const next = e.matches ? 'dark' : 'light';
            setTheme(next);
            updateToggleIcon(next);
        });
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
    }

    function updateVisualFromTheme(theme) {
        if (!toggle) return;
        const isDark = theme === 'dark';
        // Reflect state for custom toggle visuals on index (tdnn/moon)
        toggle.classList.toggle('day', !isDark);
        const knob = toggle.querySelector('.moon');
        if (knob) knob.classList.toggle('sun', !isDark);
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        // Optional: update footer/back-to-top contrast if needed (handled by CSS vars)
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger counter animation for stats
                if (entry.target.classList.contains('about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll([
        '.about-content',
        '.skills-category',
        '.project-card',
        '.athletics-overview',
        '.contact-content'
    ].join(', '));

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const text = typingText.textContent;
    typingText.textContent = '';
    
    let index = 0;
    const typingSpeed = 100;
    
    function typeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeText, 500);
}

// ===== COUNTER ANIMATION =====
function initializeCounterAnimation() {
    let countersAnimated = false;
    
    window.animateCounters = function() {
        if (countersAnimated) return;
        countersAnimated = true;
        
        const counters = document.querySelectorAll('[data-target]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 50);
        });
    };
}

// ===== PROJECT FILTER =====
function initializeProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===== POPULATE PROJECTS =====
function populateProjects() {
    const projectsData = [
        {
            title: "Docparser",
            description: "A document parsing tool that extracts data from PDFs and images converting it in markdown format.",
            image: "📄",
            technologies: ["Transformers", "PyTorch", "FastAPI"],
            category: "Deep Learning",
            github: "https://github.com/yourusername/ecommerce-platform",
            demo: "https://your-ecommerce-demo.com"
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category}`;
    
    card.innerHTML = `
        <div class="project-image">
            <span style="font-size: 3rem;">${project.image}</span>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demo}" class="project-link primary" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="${project.github}" class="project-link secondary" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// ===== BACK TO TOP BUTTON =====

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#2563eb'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Parallax effect for hero section (only on home page)
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxTranslate = Math.max(0, window.innerHeight - 150); // clamp to avoid overlapping footer
            const translate = Math.min(scrolled * 0.5, maxTranslate);
            hero.style.transform = `translateY(${translate}px)`;
        });
    }
}

// ===== BACK TO TOP BUTTON =====
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function to limit function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function to limit function calls
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimized scroll listener
const optimizedScroll = throttle(() => {
    // Handle scroll-based animations and effects
    const scrollY = window.pageYOffset;
    
    // Update any scroll-based animations here
    document.documentElement.style.setProperty('--scroll-y', scrollY + 'px');
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', (e) => {
    // Handle keyboard navigation if needed
    if (e.key === 'Escape') {
        // Future: Add any escape key functionality here
    }
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Performance:', {
                'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart + 'ms',
                'Load Complete': perfData.loadEventEnd - perfData.loadEventStart + 'ms',
                'Total Load Time': perfData.loadEventEnd - perfData.fetchStart + 'ms'
            });
        }, 100);
    });
}

// ===== INTERSECTION OBSERVER POLYFILL CHECK =====
if (!window.IntersectionObserver) {
    console.warn('IntersectionObserver not supported. Loading polyfill...');
    // In a production environment, you would load a polyfill here
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker for offline functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}