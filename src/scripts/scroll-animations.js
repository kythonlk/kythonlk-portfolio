// Scroll animations and utilities
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    // Initialize intersection observer for scroll animations
    this.setupIntersectionObserver();
    
    // Setup smooth scroll for anchor links
    this.setupSmoothScrolling();
    
    // Add scroll progress indicator
    this.setupScrollProgress();
  }

  setupIntersectionObserver() {
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add staggered animations for child elements
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, this.observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('[class*="animate-"], .section-spacing').forEach((el) => {
      observer.observe(el);
    });
  }

  setupSmoothScrolling() {
    // Handle anchor link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  setupScrollProgress() {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.className = 'fixed top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 z-50 transition-all duration-300';
    document.body.appendChild(progressBar);

    // Update progress on scroll
    let ticking = false;
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      progressBar.style.width = `${Math.min(progress, 100)}%`;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    });
  }
}

// Parallax effects for hero section
class ParallaxEffects {
  constructor() {
    this.init();
  }

  init() {
    // Simple parallax for hero background elements
    const parallaxElements = document.querySelectorAll('.parallax-element');
    if (parallaxElements.length === 0) return;

    let ticking = false;
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach((element) => {
        element.style.transform = `translate3d(0, ${rate}px, 0)`;
      });

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }
}

// Initialize when DOM is ready
function initScrollAnimations() {
  new ScrollAnimations();
  new ParallaxEffects();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ScrollAnimations, ParallaxEffects, initScrollAnimations };
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}

// Also initialize on Astro page load
document.addEventListener('astro:page-load', initScrollAnimations);