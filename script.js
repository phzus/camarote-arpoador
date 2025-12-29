document.addEventListener('DOMContentLoaded', () => {
    console.log('Camarote Arpoador iniciado');

    // Force Video Autoplay (especially for iOS)
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.play().catch(error => {
            console.log("Autoplay blocked or failed:", error);
        });
    }

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

    // Initialize Artist Swiper (continuous linear movement)
    const swiper = new Swiper('.artist-swiper', {
        slidesPerView: 1.5,
        centeredSlides: false,
        spaceBetween: 20,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                 slidesPerView: 3,
                 spaceBetween: 30,
            },
            1024: {
                 slidesPerView: 5,
                 spaceBetween: 40,
            }
        }
    });

    // Initialize History Swiper (continuous linear movement)
    const historySwiper = new Swiper('.history-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
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

// Video Mute Toggle Function
function toggleMute() {
    const video = document.getElementById('heroVideo');
    const unmuteIcon = document.getElementById('unmuteIcon');

    if (video) {
        video.muted = !video.muted;

        if (video.muted) {
            // Muted icon (speaker with X)
            unmuteIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
            `;
        } else {
            // Unmuted icon (speaker with sound waves)
            unmuteIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            `;
        }
    }
}

