## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 6</p>
## <p align = "center">API ROUTES</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j06/public/img/logo_polinema.png" width="40%">
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

### Langkah 1 – Menjalankan Project
![1](../praktikum/my-app-j06/public/img/1.png)

### Langkah 2 – Membuat API Produk
![1](../praktikum/my-app-j06/public/img/2.png)

### Langkah 3 – Fetch Data API di Frontend
![1](../praktikum/my-app-j06/public/img/3.png)

## Integrasi Firebase

### Langkah 5 - Setup Firebase

Hasil set up Firebase
![1](../praktikum/my-app-j06/public/img/4.png)

### Langkah 6 – Install Firebase
![1](../praktikum/my-app-j06/public/img/5.png)

### Langkah 7 – Konfigurasi Environment Variable
![1](../praktikum/my-app-j06/public/img/6.png)

### Langkah 8 – Konfigurasi Firebase
![1](../praktikum/my-app-j06/public/img/7.png)

### Langkah 9 – Ambil Data dari Firestore
![1](../praktikum/my-app-j06/public/img/8.png)

### Langkah 10 – API Mengambil Data Firebase
![1](../praktikum/my-app-j06/public/img/9.png)
![1](../praktikum/my-app-j06/public/img/10.png)

## Tugas Praktikum

### Tugas 1
![1](../praktikum/my-app-j06/public/img/11.png)
![1](../praktikum/my-app-j06/public/img/12.png)

### Tugas 2
![1](../praktikum/my-app-j06/public/img/13.png)
![1](../praktikum/my-app-j06/public/img/14.png)

### Tugas 3
![1](../praktikum/my-app-j06/public/img/15.gif)

## Pertanyaan Evaluasi

### 1. Apa fungsi API Routes pada Next.js?
Jawab : Api routes berfungsi sebagai
1. Mengambil data dari database
2. Mengelola autentikasi
3. Menyimpan atau menghapus data
4. Membuat endpoint seperti ``/api/product``

### 2. Mengapa .env.local tidak boleh di-push ke repository?
Jawab : Karena file ``.env.local`` berisi seperti API key dan secret token, apabila di push maka akan beresiko data bocor, aplikasi bisaa diretas dan database bisa diakses orang lain

### 3. Apa perbedaan data statis dan data dinamis?
Jawab : 
- Data Statis
1. Data tetap
2. Tidak berubah-ubah
3. Biasanya sudah ditentukan saat build
contoh : halaman profil
- Data Dinamis
1. Data bisa berubah
2. Biasanya diambil dari database atau API
contoh : daftar produk

### 4. Mengapa Next.js disebut framework fullstack?
Jawab : Karena dapat menangani frontend dan backend dalam satu project. Next.js dapat digunakan untuk membuat tampilan (React UI), menyediakan API backend, serta mendukung SSR dan SSG. Jadi,  kita bisa membuat website lengkap beserta logika server dan koneksi database tanpa perlu framework terpisah seperti Laravel.