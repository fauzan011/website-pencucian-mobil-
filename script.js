// ============================================
// Hamburger Menu Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// Smooth Scroll untuk tombol
// ============================================
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============================================
// Active Navigation Link saat scroll
// ============================================
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// ============================================
// Form Pemesanan
// ============================================
const formPesan = document.getElementById('formPesan');

formPesan.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai form
    const nama = document.getElementById('nama').value;
    const no_hp = document.getElementById('no_hp').value;
    const lokasi = document.getElementById('lokasi').value;
    const tipe_mobil = document.getElementById('tipe_mobil').value;
    const paket = document.getElementById('paket').value;
    const waktu = document.getElementById('waktu').value;
    const catatan = document.getElementById('catatan').value;
    
    // Validasi nomor HP
    if (!no_hp.startsWith('0') || no_hp.length < 10) {
        alert('Nomor WhatsApp tidak valid. Gunakan format 08xx...');
        return;
    }
    
    // Format nomor untuk WhatsApp (Indonesia)
    let whatsappNo = no_hp.replace(/^0/, '62');
    
    // Buat pesan WhatsApp
    let pesan = `
Halo, saya ingin memesan layanan cuci mobil.

*DATA PEMESANAN:*
Nama: ${nama}
Nomor: ${no_hp}
Lokasi: ${lokasi}
Tipe Mobil: ${tipe_mobil}
Paket: ${paket}
Waktu: ${formatTanggal(waktu)}
${catatan ? `Catatan: ${catatan}` : ''}

Terima kasih!
    `.trim();
    
    // Encode pesan untuk URL
    const pesan_encoded = encodeURIComponent(pesan);
    const whatsappUrl = `https://wa.me/${whatsappNo}?text=${pesan_encoded}`;
    
    // Buka WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    formPesan.reset();
    alert('Pesanan Anda akan dikirim ke WhatsApp!');
});

// ============================================
// Fungsi untuk format tanggal
// ============================================
function formatTanggal(datetimeLocal) {
    if (!datetimeLocal) return 'Tidak ditentukan';
    
    const date = new Date(datetimeLocal);
    
    const opsi = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleDateString('id-ID', opsi);
}

// ============================================
// Fungsi untuk buka form dengan paket terpilih
// ============================================
function bukaPesan(paketNama) {
    // Set nilai paket
    document.getElementById('paket').value = paketNama;
    
    // Scroll ke form
    scrollToSection('#pesan');
    
    // Focus pada field pertama
    document.getElementById('nama').focus();
}

// ============================================
// Animasi saat elemen masuk viewport
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe semua card setelah halaman loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation untuk semua card
    document.querySelectorAll('.layanan-card, .paket-card, .keunggulan-item, .testimonial-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideInUp 0.6s ease forwards`;
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ============================================
// Responsive Mobile Menu
// ============================================
function handleResponsive() {
    const width = window.innerWidth;
    
    if (width > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResponsive);

// ============================================
// Tambahkan CSS keyframe untuk animasi
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Smooth scroll untuk seluruh halaman
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Tutup mobile menu jika terbuka
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ============================================
// Form validation real-time
// ============================================
document.getElementById('no_hp').addEventListener('input', function(e) {
    // Hanya angka yang diperbolehkan
    this.value = this.value.replace(/[^0-9]/g, '');
});

// ============================================
// Set minimal tanggal ke hari ini
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const inputWaktu = document.getElementById('waktu');
    
    // Set minimal date ke sekarang
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    inputWaktu.min = now.toISOString().slice(0, 16);
});

// ============================================
// Parallax effect untuk hero
// ============================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ============================================
// Auto-update cart count (jika ada cart feature)
// ============================================
function updateCartCount() {
    const count = localStorage.getItem('cartCount') || 0;
    const cartElement = document.querySelector('.cart-count');
    if (cartElement) {
        cartElement.textContent = count;
    }
}

// Call on page load
updateCartCount();

// ============================================
// Countdown timer untuk penawaran
// ============================================
function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = new Date(targetDate).getTime() - now;
        
        if (timeLeft < 0) {
            countdownElement.innerHTML = "Penawaran berakhir";
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Uncomment untuk menggunakan countdown
// startCountdown('2025-12-31');

// ============================================
// Analytics tracking (opsional)
// ============================================
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Bisa diintegrasikan dengan Google Analytics
}

// Track form submission
formPesan.addEventListener('submit', function() {
    trackEvent('form_submission', {
        timestamp: new Date(),
        source: 'pesan_section'
    });
});

// ============================================
// Mobile-specific optimizations
// ============================================
if (window.innerWidth <= 768) {
    // Disable certain animations on mobile for performance
    document.documentElement.style.scrollBehavior = 'auto';
}

// ============================================
// Load page animations
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease';
});
