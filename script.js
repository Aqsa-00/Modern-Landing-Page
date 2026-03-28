
document.addEventListener('DOMContentLoaded', () => {
    const hambuger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');

    hambuger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hambuger.classList.toggle('active');
    });

     // Close mobile menu when link is clicked
     document.querySelectorAll('.nav-links a').forEach(link =>{
        link.addEventListener('click', () =>{
            hambuger.classList.remove('active');
            navLinks.classList.remove('active');
        });
     });

      // Sticky Navbar
      window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('scrolled');
        }
        else{
            navbar.classList.remove('scrolled');
        }
      });

       // Testimonial Slider
       let currentSlide = 0;
       
       function showSlide(index){
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        if (slides[index] && dots[index]) {
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
       }
       dots.forEach((dot, index) =>{
        dot.addEventListener('click', () => {
            currentSlide =index;
            showSlide(currentSlide);
        });
       });
    
     // Auto slide
    if (slides.length > 0) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }   


    // Initialize ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '40px',
            duration: 1000,
            delay: 200,
            reset: true, // true lets animations re-trigger when scrolling back
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });

        // Apply specific reveal configurations
        sr.reveal('.hero-content', { origin: 'left', distance: '60px' });
        sr.reveal('.hero-media', { origin: 'right', distance: '60px', delay: 400 });
        sr.reveal('.section-header', { origin: 'bottom' });

        // Staggered reveals for cards
        sr.reveal('.feature-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.pricing-card', { origin: 'bottom', interval: 200 });

        // Other elements
        sr.reveal('.testimonial-container', { origin: 'bottom', scale: 0.9 });
        sr.reveal('.cta-banner .container', { origin: 'bottom', distance: '30px' });
    }
});