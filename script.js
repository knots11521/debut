        AOS.init({
            once: true
        });

        // Back to top
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Lightbox gallery
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');

        function openLightbox(img) {
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
        }

        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('flex');
            lightbox.classList.add('hidden');
        });