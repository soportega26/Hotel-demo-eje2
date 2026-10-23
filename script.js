// =========================================================
// JAVASCRIPT PRINCIPAL AMHSA MARINA LUXURY
// =========================================================

// 1. Control Centralizado de Vistas (SPA)
function showView(viewId) {
    // Ocultar todas las vistas
    const views = document.querySelectorAll('.page-view');
    views.forEach(v => v.style.display = 'none');

    // Mostrar la vista seleccionada
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Si se activa la galería, controlar la reproducción de videos
    if (viewId === 'view-galeria') {
        const isCasaActive = document.getElementById('btn-gal-casa')?.classList.contains('active');
        if (isCasaActive) {
            switchGalleryTab('casa-marina');
        } else {
            switchGalleryTab('select-adults');
        }
    } else {
        // Pausar ambos videos si se sale de la galería
        const videoCasa = document.getElementById('video-casa-marina');
        const videoSelect = document.getElementById('video-select-adults');
        if (videoCasa) videoCasa.pause();
        if (videoSelect) videoSelect.pause();
    }
}

// 2. Control de Pestañas de Habitaciones
function switchRoomTab(tabName) {
    const tabCasa = document.getElementById('room-tab-casa-marina');
    const tabSelect = document.getElementById('room-tab-select-adults');
    const btnCasa = document.getElementById('btn-room-casa');
    const btnSelect = document.getElementById('btn-room-select');

    if (tabName === 'casa-marina') {
        if (tabCasa) tabCasa.style.display = 'grid';
        if (tabSelect) tabSelect.style.display = 'none';
        if (btnCasa) btnCasa.classList.add('active');
        if (btnSelect) btnSelect.classList.remove('active');
    } else {
        if (tabCasa) tabCasa.style.display = 'none';
        if (tabSelect) tabSelect.style.display = 'grid';
        if (btnCasa) btnCasa.classList.remove('active');
        if (btnSelect) btnSelect.classList.add('active');
    }
}

// 3. Control de Pestañas de Galería y Videos Autoplay
function switchGalleryTab(tabName) {
    const tabCasa = document.getElementById('gallery-tab-casa-marina');
    const tabSelect = document.getElementById('gallery-tab-select-adults');
    const btnCasa = document.getElementById('btn-gal-casa');
    const btnSelect = document.getElementById('btn-gal-select');

    const videoCasa = document.getElementById('video-casa-marina');
    const videoSelect = document.getElementById('video-select-adults');

    if (tabName === 'casa-marina') {
        if (tabCasa) tabCasa.style.display = 'block';
        if (tabSelect) tabSelect.style.display = 'none';
        if (btnCasa) btnCasa.classList.add('active');
        if (btnSelect) btnSelect.classList.remove('active');

        if (videoCasa) {
            videoCasa.play().catch(err => console.log("Autoplay silencioso:", err));
        }
        if (videoSelect) {
            videoSelect.pause();
        }
    } else {
        if (tabCasa) tabCasa.style.display = 'none';
        if (tabSelect) tabSelect.style.display = 'block';
        if (btnCasa) btnCasa.classList.remove('active');
        if (btnSelect) btnSelect.classList.add('active');

        if (videoSelect) {
            videoSelect.play().catch(err => console.log("Autoplay silencioso:", err));
        }
        if (videoCasa) {
            videoCasa.pause();
        }
    }
}

// 4. Funciones del Lightbox (Visualizador en Pantalla Completa)
function openLightbox(imageSrc, captionText) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        if (caption) caption.innerText = captionText || '';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    showView('view-inicio');
});