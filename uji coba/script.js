// Anda bisa menambahkan interaktivitas JavaScript di sini jika diperlukan
// Contoh: Animasi atau efek interaktif

document.addEventListener('DOMContentLoaded', function() {
    // Contoh: Menambahkan efek scroll halus
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});