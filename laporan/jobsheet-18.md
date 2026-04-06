## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 18</p>
## <p align = "center">UNIT TESTING</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j18/public/img/logo_polinema.png" width="40%">
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

## Praktikum 1 – Setup Jest di Next.js

### Langkah 1 – Install Dependencies
![1](../praktikum/my-app-j18/public/img/1.png)

### Langkah 2 - Buat File Konfigurasi
![1](../praktikum/my-app-j18/public/img/2.png)

### Langkah 3 - Tambahkan script di package.json
![1](../praktikum/my-app-j18/public/img/3.png)

## Praktikum 2 – Struktur Folder Testing
![1](../praktikum/my-app-j18/public/img/4.png)

## Praktikum 3 – Testing Halaman About

### Langkah 1 - Buat File Testing
![1](../praktikum/my-app-j18/public/img/5.png)

### Langkah 2 - Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut :
![1](../praktikum/my-app-j18/public/img/6.png)

### Langkah 3 - Jalankan Testing
![1](../praktikum/my-app-j18/public/img/7.png)

## Praktikum 4 - Coverage Report

- Menjalankan ``npm run test:coverage``
![1](../praktikum/my-app-j18/public/img/8.png)

- Folder /coverage
![1](../praktikum/my-app-j18/public/img/9.png)

- Hasil
![1](../praktikum/my-app-j18/public/img/10.png)

## Praktikum 5 - Konfigurasi Coverage Lengkap

- update ``jest.config.mjs``
![1](../praktikum/my-app-j18/public/img/11.png)

- Menjalankan ``npm run test:coverage``
![1](../praktikum/my-app-j18/public/img/12.png)

- Hasil dari ``index.html``
![1](../praktikum/my-app-j18/public/img/13.png)

## Praktikum 6 - Testing dengan getByTestId

- Hasil menambahkan About Page
![1](../praktikum/my-app-j18/public/img/14.png)

- Hasil menambahkan About (dibuat salah)
![1](../praktikum/my-app-j18/public/img/15.png)

## Praktikum 7 – Testing Page dengan Router (Mocking)

- Hasil testing halaman produk
![1](../praktikum/my-app-j18/public/img/16.png)

## Praktikum 8 - Menangani Indefined Data

- Hasil menjalankan npm run test:coverage akan error
![1](../praktikum/my-app-j18/public/img/17.png)

## Analisis Coverage

Jika dilihat aplikasi yang dibuat masih 5% jadi perlu banyak perbaikan sebelum proses deploy.
![1](../praktikum/my-app-j18/public/img/18.png)

## Tugas Praktikum

1. Buat unit test untuk:
o Halaman Product
o 1 Komponen
- Hasil unit test halaman produk dan about
![1](../praktikum/my-app-j18/public/img/19.png)
![1](../praktikum/my-app-j18/public/img/20.png)

2. Gunakan minimal:
o 1 Snapshot test
o 1 toBe()
o 1 getByTestId()
- Hasil menggunakannya pada halaman produk dan about
![1](../praktikum/my-app-j18/public/img/21.png)
![1](../praktikum/my-app-j18/public/img/22.png)

3. Buat coverage minimal 50%
![1](../praktikum/my-app-j18/public/img/23.png)

4. Lakukan mocking untuk router
![1](../praktikum/my-app-j18/public/img/24.png)

5. Dokumentasikan hasil coverage
![1](../praktikum/my-app-j18/public/img/19.png)
![1](../praktikum/my-app-j18/public/img/20.png)

## Diskusi dan Refleksi

1. Mengapa unit testing penting sebelum production?
Jawab : Unit testing penting sebelum production karena memastikan setiap bagian kode bekerja sesuai harapan dan mengurangi risiko bug.

2. Mengapa branch coverage sulit mencapai 100%?
Jawab : Branch coverage sulit mencapai 100% karena beberapa kondisi atau error handling sulit direplikasi dalam test.

3. Apa itu mocking?
Jawab : Mocking adalah membuat versi tiruan dari fungsi atau modul agar test bisa dijalankan tanpa tergantung lingkungan asli.

4. Kapan snapshot test digunakan?
Jawab : Snapshot test digunakan untuk memeriksa apakah tampilan UI tetap konsisten setelah perubahan kode.

5. Apakah semua file harus dites?
Jawab : Tidak semua file harus dites, hanya fokus pada kode yang kritikal, kompleks, atau berisiko menimbulkan error.