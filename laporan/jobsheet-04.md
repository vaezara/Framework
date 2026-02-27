## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 4</p>
## <p align = "center">STYLING PADA NEXT.JS</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j04/public/img/logo_polinema.png" width="40%">
</p>

<br><br>

## <p align = "center">Oleh :</p>
## <p align = "center">Nova Eliza Maharani</p>
## <p align = "center">NIM. 2341720252 </p>

<br><br>

## <p align = "center">PROGRAM STUDI D-IV TEKNIK INFORMATIKA</p>
## <p align = "center">JURUSAN TEKNOLOGI INFORMASI</p>
## <p align = "center">POLITEKNIK NEGERI MALANG</p>
## <p align = "center">FEBRUARI 2026</p>

<br><br>

## Hasil Praktikum

### Langkah 1 - Global CSS
#### a. File Global
![1](../praktikum/my-app-j04/public/img/1.png)
#### b. Import Global CSS
![1](../praktikum/my-app-j04/public/img/2.png)

### Langkah 2 -  CSS Module (Local Scope)
#### a. Struktur Komponen Navbar
![1](../praktikum/my-app-j04/public/img/3.png)
#### b. File CSS Module
- Modifikasi global.css
![1](../praktikum/my-app-j04/public/img/4.png)
- Modifikasi navbar.module.css
![1](../praktikum/my-app-j04/public/img/5.png)
#### c. Pemanggilan di Komponen
- Modifikasi navbar/index.tsx
![1](../praktikum/my-app-j04/public/img/6.png)
- Jalankan browser
![1](../praktikum/my-app-j04/public/img/7.png)

### Langkah 3 - Styling untuk Pages (CSS Module)
#### a. Contoh Login Page
- Membuat auth/login.module.css
![1](../praktikum/my-app-j04/public/img/8.png)
- Modifikasi login.module.css
![1](../praktikum/my-app-j04/public/img/9.png)
- Modifikasi login.tsx
![1](../praktikum/my-app-j04/public/img/10.png)
- Jalankan browser
![1](../praktikum/my-app-j04/public/img/11.png)

### Langkah 4 - Conditional Rendering Navbar (Tanpa Navbar di Login)
![1](../praktikum/my-app-j04/public/img/12.png)

### Langkah 5 - Refactoring Struktur Project (Best Practice)
### a. Struktur Awal (Kurang Rapi)
![1](../praktikum/my-app-j04/public/img/13.png)
### b. Struktur Refactor (Disarankan)
![1](../praktikum/my-app-j04/public/img/14.png)

### Langkah 6 - Inline Styling (CSS-in-JS)
![1](../praktikum/my-app-j04/public/img/15.png)

### Langkah 7 - Kombinasi Global CSS + CSS Module
![1](../praktikum/my-app-j04/public/img/16.png)

### Langkah 8 - SCSS (SASS)
#### a. Install SASS
![1](../praktikum/my-app-j04/public/img/17.png)
#### b. Global Variable
![1]../praktikum/my-app-j04/(public/img/18.png)
#### c. Gunakan di Module
![1](../praktikum/my-app-j04/public/img/19.png)

### Langkah 9 - Tailwind CSS
#### a. Install
![1](../praktikum/my-app-j04/public/img/20.png)
#### b. Konfigurasi tailwind.config.js
![1](../praktikum/my-app-j04/public/img/21.png)
#### c. Import di Global CSS
![1](../praktikum/my-app-j04/public/img/22.png)
#### d. Contoh Penggunaan
![1](../praktikum/my-app-j04/public/img/23.png)

## Tugas Praktikum
### Tugas 1
![1](../praktikum/my-app-j04/public/img/24.png)
### Tugas 2
![1](../praktikum/my-app-j04/public/img/25.png)
### Tugas 3
![1](../praktikum/my-app-j04/public/img/26.png)
#### Tailwind utility classes yang dipakai
- p-8 : padding 8 di semua sisi
- bg-gray-100 : background abu muda untuk section
- rounded-lg : border-radius besar
- shadow-md : memberi bayangan pada section
- text-2xl : ukuran font judul
- font-bold : teks tebal
- mb-4 : margin bawah 4 (spasi antar judul & list)
- text-center : judul di tengah
- text-blue-600 : warna teks judul
- grid grid-cols-2 gap-4 : menata list produk dalam grid 2 kolom dengan jarak 4
- bg-white p-4 rounded hover:bg-blue-50 transition → style tiap item produk

## Pertanyaan Refleksi
### 1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?
Jawab : CSS Module digunakan ketika kita ingin membatasi scope style hanya untuk satu komponen tertentu, sehingga style tidak akan memengaruhi komponen lain
### 2. Apa kelemahan inline styling?
Jawab : Inline styling, misal: ``<div style={{ color: "red" }}>`` memiliki beberapa kelemahan seperti kita harus menulis ulang di setiap elemen yang ingin ditambahkan dan kode jadi berantakan jika banyak penggunaan style
### 3. Mengapa SCSS cocok untuk project skala besar?
Jawab : 
1. Memudahkan pengelolaan warna, ukuran font, dan parameter desain lainnya di seluruh proyek
2. Struktur kode lebih rapi
3. Memungkinkan penggunaan kembali potongan kode CSS sehingga efisien.
### 4. Apa keunggulan Tailwind dibanding CSS tradisional?
Jawab : 
1. Langsung menggunakan class utility tanpa membuat file CSS baru.
2. Konsistensi styling seperti ukuran margin, padding, dan font
3. Mendukung prefix seperti sm:, md:, lg: untuk desain responsif.

