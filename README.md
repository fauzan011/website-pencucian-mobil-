# 🚗 CarWash Pro - Website Jasa Cuci Mobil Panggilan

Website profesional untuk jasa cuci mobil panggilan dengan desain modern, responsif, dan terintegrasi WhatsApp untuk pemesanan.

## ✨ Fitur Utama

### 📱 User Interface

- **Responsive Design** - Sempurna di mobile, tablet, dan desktop
- **Modern UI/UX** - Desain bersih dengan gradien warna profesional
- **Hamburger Menu** - Menu mobile yang user-friendly
- **Smooth Animations** - Animasi halus untuk pengalaman yang lebih baik

### 🎯 Fitur Fungsional

- ✅ **Hero Section** - Banner menarik dengan call-to-action
- ✅ **Katalog Layanan** - 6 jenis layanan cuci mobil
- ✅ **Paket Harga** - 3 paket dengan fitur berbeda
- ✅ **Keunggulan Kami** - Highlight tentang kualitas layanan
- ✅ **Testimonial** - Review dari pelanggan puas
- ✅ **Tentang Kami** - Info perusahaan & statistik
- ✅ **Form Pemesanan** - Formulir lengkap untuk booking
- ✅ **Kontak & Social Media** - Berbagai cara menghubungi

### 🔧 Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Styling responsif dengan grid & flexbox
- **JavaScript Vanilla** - Fungsionalitas tanpa dependencies
- **Font Awesome** - Icon library lengkap
- **WhatsApp API** - Integrasi untuk order

## 📁 Struktur Folder

```
cuci-mobil/
├── index.html              # File HTML utama
├── assets/
│   ├── css/
│   │   └── style.css      # Styling & responsif
│   └── js/
│       └── script.js       # Fungsionalitas & interaksi
└── README.md              # File dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Buka di Browser

- Drag & drop file `index.html` ke browser, atau
- Double-click `index.html`

### 2. Deploy ke Web Hosting

- Upload semua file ke hosting Anda
- Pastikan struktur folder tetap sama
- Akses melalui domain Anda

### 3. Kustomisasi Data

#### Update Nomor WhatsApp

Di file `script.js`, cari bagian berikut dan update nomor Anda:

```javascript
let whatsappNo = no_hp.replace(/^0/, "62");
// Nomor sudah otomatis diformat dari form
```

#### Update Social Media Links

Di file `index.html`, cari bagian `Kontak` dan update URL:

```html
<a href="https://instagram.com/username_anda" target="_blank">
  <a href="https://facebook.com/page_anda" target="_blank">
    <a href="https://tiktok.com/@username_anda" target="_blank">
      <a href="https://wa.me/6281234567890" target="_blank"></a></a></a
></a>
```

#### Update Informasi Kontak

Di section `Kontak`, update:

```html
<a href="tel:+6281234567890">+62 812 3456 7890</a>
<a href="https://wa.me/6281234567890">Chat di WhatsApp</a>
<p><a href="mailto:info@carwashpro.com">info@carwashpro.com</a></p>
```

## 🎨 Kustomisasi Warna

Edit file `assets/css/style.css` dan ubah CSS variables:

```css
:root {
  --primary-color: #2563eb; /* Warna utama (biru) */
  --secondary-color: #dc2626; /* Warna accent (merah) */
  --accent-color: #f59e0b; /* Warna highlight (orange) */
  --dark-color: #1e293b; /* Warna gelap */
  --light-color: #f1f5f9; /* Warna terang */
}
```

## 📱 Responsif Design

Website ini sudah optimal untuk:

- 📱 **Mobile** (320px ke atas) - Menu hamburger, layout single column
- 📱 **Tablet** (768px ke atas) - Menu normal, grid 2 kolom
- 💻 **Desktop** (1024px ke atas) - Full layout, grid penuh

## 🔄 JavaScript Features

### 1. **Hamburger Menu**

- Toggle menu saat ukuran mobile
- Auto-close saat klik link
- Smooth animation

### 2. **Form Pemesanan**

- Validasi input real-time
- Format nomor WhatsApp otomatis
- Generate pesan WhatsApp dengan format rapi
- Auto-redirect ke WhatsApp

### 3. **Active Navigation**

- Highlight link berdasarkan scroll position
- Smooth scroll behavior

### 4. **Animasi**

- Slide-in animations
- Parallax effect
- Hover effects
- Intersection observer untuk lazy animations

### 5. **Mobile Optimization**

- Touch-friendly buttons
- Responsive typography
- Optimized performance

## 📞 Integrasi WhatsApp

Sistem pemesanan akan:

1. Ambil data dari form (nama, nomor, lokasi, dll)
2. Format menjadi pesan yang rapi
3. Redirect ke WhatsApp dengan pesan terisi otomatis
4. Pelanggan tinggal kirim

### Format Pesan WhatsApp

```
Halo, saya ingin memesan layanan cuci mobil.

DATA PEMESANAN:
Nama: John Doe
Nomor: 081234567890
Lokasi: Jln. Merdeka 123, Jakarta
Tipe Mobil: Mobil Sedang
Paket: Paket Standard - Rp 100.000
Waktu: Jumat, 15 November 2025 14:30
Catatan: Mohon diberi perhatian khusus pada body mobil
```

## ✅ Checklist Sebelum Go Live

- [ ] Update nomor WhatsApp di `script.js`
- [ ] Update social media links di HTML
- [ ] Update informasi kontak (email, telepon)
- [ ] Ganti nama brand "CarWash Pro" dengan brand Anda
- [ ] Update warna sesuai brand identity
- [ ] Test form pemesanan di mobile & desktop
- [ ] Test link WhatsApp
- [ ] Optimasi untuk SEO (jika perlu)
- [ ] Add Google Analytics (opsional)
- [ ] Setup SSL certificate (jika hosting)

## 🎯 Tips untuk Maksimalkan Penjualan

### 1. SEO Optimization

- Update title & meta description
- Tambah keywords relevan
- Submit ke Google Search Console

### 2. Instagram Integration

- Link semua social media
- Post preview website di Instagram Stories
- Gunakan link dengan shortener (bitly, etc)

### 3. Marketing

- Share form link di Instagram bio
- Buat promo khusus di website
- Gunakan countdown timer untuk flash sale

### 4. Engagement

- Respons cepat di WhatsApp
- Follow up pesanan
- Collect testimonials & photos

## 🔐 Keamanan

- Form tidak menyimpan data (langsung ke WhatsApp)
- Tidak ada database yang perlu dikhawatirkan
- Nomor telp diformat untuk keamanan

## 🐛 Troubleshooting

### Menu mobile tidak berfungsi?

- Pastikan file `script.js` ter-link dengan benar
- Buka console (F12) untuk lihat errors

### Form tidak mengirim ke WhatsApp?

- Pastikan nomor diawali dengan 08 atau 62
- Check koneksi internet
- Pastikan WhatsApp installed atau buka di web

### Desain berantakan di mobile?

- Clear browser cache (Ctrl+Shift+Del)
- Reload halaman
- Cek ukuran viewport

## 📈 Advanced Features (Future Updates)

Fitur yang bisa ditambahkan di masa depan:

- [ ] Backend untuk menyimpan pesanan
- [ ] Payment gateway integration
- [ ] Customer portal untuk tracking
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] SMS reminders
- [ ] Rating & review system
- [ ] Appointment scheduling

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

## 📞 Support

Untuk pertanyaan atau bantuan, silakan hubungi melalui:

- 📱 WhatsApp
- 📧 Email
- 💬 Instagram DM

---

**Dibuat dengan ❤️ untuk bisnis Anda**

Semoga website ini membantu meningkatkan penjualan layanan cuci mobil Anda! 🚗✨

_Terakhir diupdate: November 15, 2025_
