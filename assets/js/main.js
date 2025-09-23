// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initializeNavigation();
    initializeAnimations();
    initializeProjectFilter();
    initializeContactForm();
    initializeScrollEffects();
    initializeTypingEffect();
    initializeCounterAnimation();
    initializeBackToTop();
    populateProjects();
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

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

    // Active section highlighting for simplified navigation
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Map section IDs to navigation links
            let navSelector;
            switch(sectionId) {
                case 'home':
                    navSelector = '.nav-link[href="#home"]';
                    break;
                case 'projects':
                    navSelector = '.nav-link[href="#projects"]';
                    break;
                case 'athletics':
                    navSelector = '.nav-link[href="#athletics"]';
                    break;
                case 'about':
                    navSelector = '.nav-link[href="#about"]';
                    break;
                case 'contact':
                    navSelector = '.nav-link[href="#contact"]';
                    break;
            }
            
            const navLink = document.querySelector(navSelector);
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call on load
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
            title: "E-Commerce Platform",
            description: "Full-stack web application built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
            image: "🛒",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            category: "web",
            github: "https://github.com/yourusername/ecommerce-platform",
            demo: "https://your-ecommerce-demo.com"
        },
        {
            title: "Task Management App",
            description: "Mobile-first task management application with real-time synchronization. Built using React Native with Firebase backend.",
            image: "📱",
            technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
            category: "mobile",
            github: "https://github.com/yourusername/task-app",
            demo: "https://your-task-app-demo.com"
        },
        {
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for visualizing complex datasets. Built with Python, D3.js, and featuring machine learning predictions.",
            image: "📊",
            technologies: ["Python", "D3.js", "Flask", "Pandas", "Scikit-learn"],
            category: "data",
            github: "https://github.com/yourusername/data-dashboard",
            demo: "https://your-dashboard-demo.com"
        },
        {
            title: "Weather Forecast App",
            description: "Real-time weather application with geolocation support and 7-day forecasts. Integrates with multiple weather APIs.",
            image: "🌤️",
            technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
            category: "web",
            github: "https://github.com/yourusername/weather-app",
            demo: "https://your-weather-demo.com"
        },
        {
            title: "Fitness Tracker",
            description: "Mobile app for tracking workouts and athletic performance. Features GPS tracking, workout analytics, and social sharing.",
            image: "🏃‍♂️",
            technologies: ["React Native", "GPS API", "Chart.js", "Firebase"],
            category: "mobile",
            github: "https://github.com/yourusername/fitness-tracker",
            demo: "https://your-fitness-demo.com"
        },
        {
            title: "Algorithm Visualizer",
            description: "Educational tool for visualizing sorting and pathfinding algorithms. Interactive animations help understand algorithm complexity.",
            image: "🧮",
            technologies: ["JavaScript", "Canvas API", "CSS Animations"],
            category: "other",
            github: "https://github.com/yourusername/algorithm-visualizer",
            demo: "https://your-algo-demo.com"
        },
        {
            title: "Chat Application",
            description: "Real-time messaging application with rooms, file sharing, and emoji support. Built with Socket.io and React.",
            image: "💬",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            category: "web",
            github: "https://github.com/yourusername/chat-app",
            demo: "https://your-chat-demo.com"
        },
        {
            title: "Machine Learning Model",
            description: "Predictive model for sports performance analysis. Uses historical data to predict race times and training recommendations.",
            image: "🤖",
            technologies: ["Python", "TensorFlow", "Jupyter", "NumPy"],
            category: "data",
            github: "https://github.com/yourusername/ml-sports-model",
            demo: "https://your-ml-demo.com"
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

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (!validateContactForm(data)) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await simulateFormSubmission(data);
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } catch (error) {
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.name.trim()) errors.push('Name is required');
    if (!data.email.trim()) errors.push('Email is required');
    if (!isValidEmail(data.email)) errors.push('Please enter a valid email');
    if (!data.subject.trim()) errors.push('Subject is required');
    if (!data.message.trim()) errors.push('Message is required');
    
    if (errors.length > 0) {
        showNotification(errors.join(', '), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function simulateFormSubmission(data) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted with data:', data);
    
    // Simulate random success/failure for demo
    if (Math.random() > 0.1) {
        return Promise.resolve();
    } else {
        return Promise.reject(new Error('Simulated error'));
    }
}

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
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
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