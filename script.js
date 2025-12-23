document.addEventListener('DOMContentLoaded', () => {
    console.log('Camarote Arpoador iniciado');

    // Countdown Logic
    const targetDate = new Date('February 13, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Event started
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Update DOM
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // Initialize Swiper
    const swiper = new Swiper('.artist-swiper', {
        slidesPerView: 1.5, /* Mobile: 1 centered + partials */
        centeredSlides: false, /* Disabled centering to treat all equal */
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                 slidesPerView: 3,
                 spaceBetween: 30,
            },
            1024: {
                 slidesPerView: 5, /* Desktop: Verified 5 items as requested */
                 spaceBetween: 40,
            }
        }
    });

    // Initialize History Swiper
    const historySwiper = new Swiper('.history-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                 slidesPerView: 3,
                 spaceBetween: 30,
            },
            1024: {
                 slidesPerView: 5,
                 spaceBetween: 30,
            }
        }
    });
});

// Menu Toggle Function (global for onclick attribute)
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.querySelector('.menu-overlay');

    if (menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        // Scroll is now allowed even when menu is open
    }
}
