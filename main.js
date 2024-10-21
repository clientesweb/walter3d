// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Project filtering
    const projectGrid = document.getElementById('project-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const projects = [
        { category: 'residencial', image: 'project1.jpg', title: 'Casa Moderna' },
        { category: 'comercial', image: 'project2.jpg', title: 'Oficina Corporativa' },
        { category: 'interior', image: 'project3.jpg', title: 'Diseño de Sala' },
        { category: 'residencial', image: 'project4.jpg', title: 'Villa de Lujo' },
        { category: 'comercial', image: 'project5.jpg', title: 'Centro Comercial' },
        { category: 'interior', image: 'project6.jpg', title: 'Cocina Minimalista' },
    ];

    function renderProjects(category = 'all') {
        projectGrid.innerHTML = '';
        projects.forEach(project => {
            if (category === 'all' || project.category === category) {
                const projectElement = document.createElement('div');
                projectElement.className = 'relative overflow-hidden rounded-lg shadow-lg group';
                projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <h3 class="text-white text-xl font-semibold">${project.title}</h3>
                    </div>
                `;
                projectGrid.appendChild(projectElement);
            }
        });
    }

    renderProjects();

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProjects(button.getAttribute('data-filter'));
        });
    });

    // Testimonial slider
    const testimonials = [
        { text: "Walter Garro transformó nuestra casa en un hogar de ensueño. Su atención al detalle es incomparable.", author: "María González" },
        { text: "Increíble visión y profesionalismo. Nuestro proyecto comercial superó todas las expectativas.", author: "Carlos Rodríguez" },
        { text: "El diseño de interiores que Walter creó para nosotros es simplemente espectacular.", author: "Ana Martínez" },
    ];

    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialContent = testimonialSlider.querySelector('.flex');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');

    let currentTestimonial = 0;

    function renderTestimonials() {
        testimonialContent.innerHTML = '';
        testimonials.forEach((testimonial, index) => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'w-full flex-shrink-0 text-center px-4';
            testimonialElement.innerHTML = `
                <p class="text-lg italic mb-4">"${testimonial.text}"</p>
                <p class="font-semibold">- ${testimonial.author}</p>
            `;
            testimonialContent.appendChild(testimonialElement);
        });
    }

    renderTestimonials();

    function showTestimonial(index) {
        testimonialContent.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Instagram feed (simulated)
    const instagramFeed = document.getElementById('instagram-feed');
    const instagramPosts = [
        'instagram1.jpg', 'instagram2.jpg', 'instagram3.jpg', 'instagram4.jpg',
        'instagram5.jpg', 'instagram6.jpg', 'instagram7.jpg', 'instagram8.jpg'
    ];

    instagramPosts.forEach(post => {
        const postElement = document.createElement('a');
        postElement.href = '#';
        postElement.className = 'relative overflow-hidden group';
        postElement.innerHTML = `
            <img src="${post}" alt="Instagram post" class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i class="fab fa-instagram text-white text-3xl"></i>
            </div>
        `;
        instagramFeed.appendChild(postElement);
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            isValid = false;
            name.classList.add('border-red-500');
        } else {
            name.classList.remove('border-red-500');
        }

        if (email.value.trim() === '' || !isValidEmail(email.value)) {
            isValid = false;
            email.classList.add('border-red-500');
        } else {
            email.classList.remove('border-red-500');
        }

        if (phone.value.trim() === '' || !isValidPhone(phone.value)) {
            isValid = false;
            phone.classList.add('border-red-500');
        } else {
            phone.classList.remove('border-red-500');
        }

        if (message.value.trim() === '') {
            isValid = false;
            message.classList.add('border-red-500');
        } else {
            message.classList.remove('border-red-500');
        }

        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Formulario enviado con éxito!');
            contactForm.reset();
        }
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPhone(phone) {
        const re = /^\+?[\d\s-]{10,}$/;
        return re.test(phone);
    }

    // Scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                el.classList.add('animate-fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});
