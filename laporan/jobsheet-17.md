## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 16</p>
## <p align = "center">OPTIMIZE</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j17/public/img/logo_polinema.png" width="40%">
</p>

<br><br>

## <p align = "center">Oleh :</p>
## <p align = "center">Nova Eliza Maharani</p>
## <p align = "center">NIM. 2341720252 </p>

<br><br>

## <p align = "center">PROGRAM STUDI D-IV TEKNIK INFORMATIKA</p>
## <p align = "center">JURUSAN TEKNOLOGI INFORMASI</p>
## <p align = "center">POLITEKNIK NEGERI MALANG</p>
## <p align = "center">APRIL 2026</p>

<br><br>

## Praktikum 1 – Image Optimizatio

### Langkah 1 – Optimasi Gambar Lokal (Public Folder) 
![1](../praktikum/my-app-j17/public/img/1.png)

### Langkah 2 - Optimasi Gambar Remote (External URL) 
![1](../praktikum/my-app-j17/public/img/2.png)

## Praktikum 2 – Font Optimization

## Langkah 1 - Menggunakan next/font 
![1](../praktikum/my-app-j17/public/img/3.png)

## Praktikum 3 - Script Optimization

## Langkah 1 - Menggunakan next/script
Ketika halaman di refresh, tulisan myapp akan berkedip
![1](../praktikum/my-app-j17/public/img/4.png)

## Langkah 2 - Strategi Script
| Strategy | Fungsi |
| :--- | :--- |
| **beforeInteractive** | Dimuat sebelum halaman menjadi interaktif (cocok untuk skrip kritis). |
| **afterInteractive** | Dimuat segera setelah halaman menjadi interaktif (default). |
| **lazyOnload** | Dimuat saat waktu luang (idle), setelah semua sumber daya selesai dimuat. |
| **worker** | Dimuat di dalam Web Worker untuk mengurangi beban pada main thread. |

## Praktikum 4 – Optimasi Avatar dengan next/image 
![1](../praktikum/my-app-j17/public/img/5.png)

## Tugas Praktikum

1. Optimasi semua image di project menggunakan next/image
![1](../praktikum/my-app-j17/public/img/6.png)

2. Gunakan minimal 1 font dari next/font
![1](../praktikum/my-app-j17/public/img/7.png)

3. Tambahkan script Google Analytics menggunakan next/
![1](../praktikum/my-app-j17/public/img/8.png)

4. Terapkan dynamic import pada minimal 1 komponen
![1](../praktikum/my-app-j17/public/img/9.png)

5. Dokumentasikan perubahan performa (screenshot Lighthouse)
![1](../praktikum/my-app-j17/public/img/10.png)

## Refleksi dan Diskusi

1. Mengapa <img> biasa tidak optimal?
Jawab : <img> tidak optimal karena tidak memiliki fitur optimasi seperti kompresi, resize, dan lazy loading sehingga dapat memperlambat loading halaman.

2. Apa perbedaan font CDN dan next/font?
Jawab : Font CDN diambil dari server eksternal sehingga membutuhkan request tambahan, sedangkan next/font di-host langsung oleh Next.js sehingga lebih cepat dan stabil.

3. Mengapa script bisa membuat website lambat?
Jawab : Script dapat membuat website lambat karena dijalankan di main thread dan bisa memblokir proses rendering halaman.

4. Kapan harus menggunakan dynamic import?
Jawab : Dynamic import digunakan saat komponen besar, tidak langsung dibutuhkan, atau hanya berjalan di client untuk mengurangi beban awal.

5. Apa dampak bundle size terhadap UX?
Jawab : Bundle size yang besar membuat waktu loading lebih lama sehingga UX menjadi lambat dan kurang responsif.

