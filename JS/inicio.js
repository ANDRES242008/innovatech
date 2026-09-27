/**
 * inicio.js — Carruseles y galerías de la página de inicio.
 * (Búsqueda, carrito y menú ahora viven en buscador.js, carrito.js y layout.js)
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const debounce = (fn, wait = 120) => {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
      };
    };

    (function initMainSlider() {
      const sliderTrack = document.querySelector('.slider-track');
      if (!sliderTrack) return;
      const sliderSlides = Array.from(sliderTrack.children || []);
      const sliderDots = Array.from(document.querySelectorAll('.carousel-dot'));
      const prevBtn = document.querySelector('.prev-slide');
      const nextBtn = document.querySelector('.next-slide');
      let currentIndex = 0;

      function updateDots() {
        if (!sliderDots || sliderDots.length === 0) return;
        sliderDots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
      }

      function updateSlidePosition() {
        if (sliderSlides.length === 0) return;
        const slideWidth = sliderSlides[0].getBoundingClientRect().width || sliderTrack.clientWidth;
        sliderTrack.style.transition = 'transform 0.5s ease';
        sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        updateDots();
      }

      sliderDots.forEach((dot, index) => dot.addEventListener('click', () => { currentIndex = index; updateSlidePosition(); }));
      if (prevBtn) prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateSlidePosition(); } });
      if (nextBtn) nextBtn.addEventListener('click', () => { if (currentIndex < sliderSlides.length - 1) { currentIndex++; updateSlidePosition(); } });

      window.addEventListener('resize', debounce(updateSlidePosition, 150));
      updateSlidePosition();
    })();

    (function initSwiper() {
      if (!window.Swiper) return;
      try {
        window.mySwiper = new Swiper('.mySwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 2500, disableOnInteraction: false },
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          breakpoints: { 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 } }
        });
      } catch (e) { console.warn('Swiper init failed', e); }
    })();

    (function initBlueCarousel() {
      const blueTrack = document.querySelector('.blue-carousel__track');
      const blueSlides = blueTrack ? Array.from(blueTrack.children) : [];
      const dotsContainer = document.querySelector('.blue-carousel__dots');
      if (!blueTrack || !dotsContainer || blueSlides.length === 0) return;

      let currentPage = 0;
      let slidesPerPage = 1;
      let pageCount = 1;
      let autoplayId = null;

      function calcPages() {
        const w = window.innerWidth;
        if (w < 600) slidesPerPage = 1;
        else if (w < 1024) slidesPerPage = 2;
        else slidesPerPage = 4;
        pageCount = Math.max(1, Math.ceil(blueSlides.length / slidesPerPage));
      }

      function buildDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
          const btn = document.createElement('button');
          btn.className = 'blue-carousel__dot';
          btn.setAttribute('role', 'tab');
          btn.setAttribute('aria-label', `Página ${i + 1}`);
          btn.dataset.index = i;
          if (i === currentPage) btn.classList.add('active');
          dotsContainer.appendChild(btn);
        }
      }

      function updateActiveDot() {
        dotsContainer.querySelectorAll('.blue-carousel__dot').forEach((d, i) => d.classList.toggle('active', i === currentPage));
      }

      function goToPage(i) {
        currentPage = (i + pageCount) % pageCount;
        const moveX = currentPage * (blueTrack.clientWidth / pageCount);
        blueTrack.style.transition = 'transform 0.5s ease';
        blueTrack.style.transform = `translateX(-${moveX}px)`;
        updateActiveDot();
      }

      function startAutoplay() { stopAutoplay(); autoplayId = setInterval(() => goToPage(currentPage + 1), 4000); }
      function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }

      dotsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.blue-carousel__dot');
        if (!btn) return;
        stopAutoplay();
        goToPage(parseInt(btn.dataset.index, 10));
        startAutoplay();
      });

      window.addEventListener('resize', debounce(() => { stopAutoplay(); calcPages(); buildDots(); goToPage(currentPage); startAutoplay(); }, 150));

      calcPages();
      buildDots();
      goToPage(0);
      startAutoplay();
    })();

     (function initInfiniteSlider() {
      const tracks = document.querySelector('.slider-tracks');
      if (!tracks) return;
      const slidesOriginal = Array.from(tracks.children);
      if (slidesOriginal.length === 0) return;

      slidesOriginal.forEach(slide => tracks.appendChild(slide.cloneNode(true)));
      const slides = Array.from(tracks.children);
      let currentIndex2 = 0;
      const totalSlides2 = slidesOriginal.length;
      let autoplay2 = null;

      function getSlideWidth() { 
        return slides[0] ? slides[0].getBoundingClientRect().width : tracks.clientWidth; 
      }

      function updateSlidePosition2(transition = true) {
        tracks.style.transition = transition ? 'transform 0.5s ease' : 'none';
        const w = getSlideWidth();
        tracks.style.transform = `translateX(-${w * currentIndex2}px)`;
        updateDotsUI();
      }

      function updateDotsUI() {
        const dots2 = document.querySelectorAll('.carousel-dot');
        if (!dots2 || dots2.length === 0) return;
        dots2.forEach(d => d.classList.remove('active'));
        const idx = currentIndex2 % totalSlides2;
        if (dots2[idx]) dots2[idx].classList.add('active');
      }

      function moveToNext2() {
        currentIndex2++;
        updateSlidePosition2();
        if (currentIndex2 >= totalSlides2) {
          setTimeout(() => { 
            updateSlidePosition2(false); 
            currentIndex2 = 0; 
          }, 520);
        }
      }

      function moveToPrev2() {
        if (currentIndex2 === 0) {
          updateSlidePosition2(false);
          currentIndex2 = totalSlides2;
          setTimeout(() => { 
            currentIndex2--; 
            updateSlidePosition2(); 
          }, 20);
        } else { 
          currentIndex2--; 
          updateSlidePosition2(); 
        }
      }

      const prevBtn2 = document.querySelector('.prev-slide');
      const nextBtn2 = document.querySelector('.next-slide');

      if (nextBtn2) nextBtn2.addEventListener('click', () => { 
        moveToNext2(); 
        resetAutoplay(); 
      });
      
      if (prevBtn2) prevBtn2.addEventListener('click', () => { 
        moveToPrev2(); 
        resetAutoplay(); 
      });
      
      document.querySelectorAll('.carousel-dot').forEach((dot, i) => 
        dot.addEventListener('click', () => { 
          currentIndex2 = i; 
          updateSlidePosition2(); 
          resetAutoplay(); 
        })
      );

      function startAutoplay2() { 
        stopAutoplay2(); 
        autoplay2 = setInterval(moveToNext2, 3000); 
      }
      
      function stopAutoplay2() { 
        if (autoplay2) { 
          clearInterval(autoplay2); 
          autoplay2 = null; 
        } 
      }
      
      function resetAutoplay() { 
        stopAutoplay2(); 
        startAutoplay2(); 
      }

      window.addEventListener('resize', debounce(() => { 
        updateSlidePosition2(false); 
      }, 150));
      
      updateSlidePosition2();
      startAutoplay2();
    })();

   (function initCollections() {

    // Función para manejar la previsualización al pasar el ratón (hover)
    function handleThumbnailHover(thumb, collection) {
        // 1. Crear el elemento de previsualización (el popover)
        let preview = collection.querySelector('.preview-popover');
        if (!preview) {
            preview = document.createElement('div');
            preview.className = 'preview-popover';
            collection.appendChild(preview);
        }

        // 2. Mostrar la previsualización al pasar el ratón (mouseenter)
        thumb.addEventListener('mouseenter', (e) => {
            const imgSrc = thumb.getAttribute('src');
            const imgAlt = thumb.getAttribute('alt');

            // Actualiza el contenido del popover con la imagen más grande
            preview.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
            
            // Posiciona el popover (aparece justo encima/al lado de la miniatura)
            // Se usa getBoundingClientRect para obtener la posición exacta
            const rect = thumb.getBoundingClientRect();
            const collectionRect = collection.getBoundingClientRect();
            
            // Posicionamiento relativo a la sección de la colección
            preview.style.left = `${rect.left - collectionRect.left - 50}px`; // Ajuste horizontal
            preview.style.top = `${rect.top - collectionRect.top - 200}px`;  // Mueve la previsualización hacia arriba
            
            preview.classList.add('is-visible');
        });

        // 3. Ocultar la previsualización al salir del ratón (mouseleave)
        thumb.addEventListener('mouseleave', () => {
            preview.classList.remove('is-visible');
        });

        // Ocultar también si el ratón sale del popover
        preview.addEventListener('mouseleave', () => {
             preview.classList.remove('is-visible');
        });
    }

    // --- Lógica de inicialización original ---
    document.querySelectorAll('.collection').forEach(collection => {
        const mainImage = collection.querySelector('.main-image');
        const mainProductLink = collection.querySelector('.main-product-link a');
        const thumbnails = collection.querySelectorAll('.thumbnails img');
        let caption = collection.querySelector('.caption');

        if (!mainImage || !thumbnails.length) return;

        // ... [El código para crear el caption si no existe es el mismo] ...

        thumbnails.forEach(thumb => {
            // AÑADIDO: Llama a la nueva función de previsualización
            handleThumbnailHover(thumb, collection); 

            // Lógica de click (la funcionalidad de la vez anterior)
            thumb.addEventListener('click', () => {
                const newSrc = thumb.getAttribute('src');
                const newLink = thumb.closest('a') ? thumb.closest('a').getAttribute('href') : null;

                // Restablecer y establecer la clase activa
                thumbnails.forEach(t => t.classList.remove('is-active'));
                thumb.classList.add('is-active');

                // Actualizar la Imagen Principal y el Enlace Principal
                mainImage.setAttribute('src', newSrc);
                if (mainProductLink && newLink) {
                    mainProductLink.setAttribute('href', newLink);
                }

                // Actualizar la Descripción y aplicar la transición
                const newAlt = thumb.getAttribute('alt');
                if (newAlt) {
                     // ... [Lógica de descripción basada en ALT] ...
                    caption.textContent = `Vista previa: ${newAlt}`; 
                } else {
                    caption.textContent = 'Selecciona una imagen para ver detalles.';
                }
                
                mainImage.classList.add('fade-in');
                setTimeout(() => {
                    mainImage.classList.remove('fade-in');
                }, 300);
            });
        });

        if (thumbnails.length > 0) {
             thumbnails[0].classList.add('is-active');
        }
    });
})();

  });
})();
