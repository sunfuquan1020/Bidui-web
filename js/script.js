// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const currentLang = localStorage.getItem('language') || 'zh';

    // Set initial language
    setLanguage(currentLang);

    // Language toggle event listener
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = this.getAttribute('data-lang');
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            setLanguage(newLang);
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after clicking
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Basic form validation
            if (validateForm(data)) {
                // Here you would typically send the data to a server
                alert(getLocalizedMessage('Form submitted successfully! We will contact you soon.', '表单提交成功！我们将尽快与您联系。'));
                this.reset();
            }
        });
    }

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize animations on scroll
    initScrollAnimations();

    // Partners slider pause on hover
    const partnersSlider = document.querySelector('.partners-slider');
    if (partnersSlider) {
        partnersSlider.addEventListener('mouseenter', function() {
            document.querySelector('.partners-track').style.animationPlayState = 'paused';
        });

        partnersSlider.addEventListener('mouseleave', function() {
            document.querySelector('.partners-track').style.animationPlayState = 'running';
        });
    }
});

function setLanguage(lang) {
    // Store language preference
    localStorage.setItem('language', lang);

    // Update toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.setAttribute('data-lang', lang);
        langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    }

    // Update document language
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-zh], [data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'OPTION') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Hide company name in English mode
    const logoH1 = document.querySelector('.logo h1');
    if (logoH1) {
        if (lang === 'en') {
            logoH1.style.display = 'none';
        } else {
            logoH1.style.display = 'block';
        }
    }

    // Update page title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const titleZh = titleElement.getAttribute('data-zh');
        const titleEn = titleElement.getAttribute('data-en');
        if (lang === 'zh' && titleZh) {
            titleElement.textContent = titleZh;
        } else if (lang === 'en' && titleEn) {
            titleElement.textContent = titleEn;
        }
    }

    // Update meta description if exists
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        const descZh = metaDesc.getAttribute('data-zh');
        const descEn = metaDesc.getAttribute('data-en');
        if (lang === 'zh' && descZh) {
            metaDesc.setAttribute('content', descZh);
        } else if (lang === 'en' && descEn) {
            metaDesc.setAttribute('content', descEn);
        }
    }
}

function getLocalizedMessage(enMsg, zhMsg) {
    const lang = localStorage.getItem('language') || 'zh';
    return lang === 'zh' ? zhMsg : enMsg;
}

function validateForm(data) {
    // Basic validation
    if (!data.name || data.name.trim().length < 2) {
        alert(getLocalizedMessage('Please enter a valid name.', '请输入有效的姓名。'));
        return false;
    }

    if (!data.email || !isValidEmail(data.email)) {
        alert(getLocalizedMessage('Please enter a valid email address.', '请输入有效的邮箱地址。'));
        return false;
    }

    if (!data.message || data.message.trim().length < 10) {
        alert(getLocalizedMessage('Please enter a message with at least 10 characters.', '请输入至少10个字符的消息。'));
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .application-card, .news-item, .value-item, .stat-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Add loading animation class
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const currentLang = localStorage.getItem('language') || 'zh';
    setLanguage(currentLang);
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Alt + L to toggle language
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.click();
        }
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Error handling for missing images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'images/placeholder.png'; // Fallback image
        e.target.alt = 'Image not available';
    }
}, true);

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered');
        //     })
        //     .catch(function(error) {
        //         console.log('SW registration failed');
        //     });
    });
}

// Analytics tracking (placeholder)
function trackEvent(eventName, parameters) {
    // Here you would integrate with analytics service like Google Analytics
    console.log('Event tracked:', eventName, parameters);
}

// Track page views
trackEvent('page_view', {
    page: window.location.pathname,
    language: localStorage.getItem('language') || 'zh'
});

// Track language changes
document.addEventListener('click', function(e) {
    if (e.target.id === 'lang-toggle') {
        trackEvent('language_toggle', {
            from: e.target.getAttribute('data-lang'),
            to: e.target.getAttribute('data-lang') === 'zh' ? 'en' : 'zh'
        });
    }
});
