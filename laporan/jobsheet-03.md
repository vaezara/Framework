## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 3</p>
## <p align = "center">LINK NAVIGATION</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j02/public/img/logo_polinema.png" width="40%">
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

### Langkah 1 - Menjalankan Project
![1](../praktikum/my-app-j02/public/img/1.png)

### Langkah 2 – Membuat Catch-All Route
![1](../praktikum/my-app-j02/public/img/2.png)
#### Modifikasi [...slug.tsx]
![1](../praktikum/my-app-j02/public/img/3.png)

### Langkah 3 – Pengujian Catch-All Route

#### Hasil akses URL awal
![1](../praktikum/my-app-j02/public/img/4.png)
#### Modifikasi [...slug.tsx]
![1](../praktikum/my-app-j02/public/img/5.png)
#### Hasil akses URL akhir
![1](../praktikum/my-app-j02/public/img/6.png)
#### Mengembalikan kode awal
![1](../praktikum/my-app-j02/public/img/7.png)

### Langkah 4 – Optional Catch-All Route

#### Menggunakan [...slug].tsx
![1](../praktikum/my-app-j02/public/img/8.png)
#### Modifikasi menjadi [[...slug.tsx]]
![1](../praktikum/my-app-j02/public/img/9.png)

### Langkah 5 – Validasi Parameter
![1](../praktikum/my-app-j02/public/img/10.png)

### Langkah 6 – Membuat Halaman Login & Register
![1](../praktikum/my-app-j02/public/img/11.png)

### Langkah 7 – Navigasi Imperatif (router.push)
![1](../praktikum/my-app-j02/public/img/12.png)
![1](../praktikum/my-app-j02/public/img/13.gif)

### Langkah 8 – Simulasi Redirect (Belum Login)
![1](../praktikum/my-app-j02/public/img/14.gif)

## Tugas Praktikum

### Tugas 1
![1](../praktikum/my-app-j02/public/img/15.png)

### Tugas 2
![1](../praktikum/my-app-j02/public/img/16.gif)

### Tugas 3
![1](../praktikum/my-app-j02/public/img/17.gif)

## Pertanyaan Refleksi
### 1. Apa perbedaan [id].js dan [...slug].js?
- [id].js : untuk route dinamis 1 segment, misal /produk/1 → id = 1.
- [...slug].js : untuk catch-all route, bisa banyak segment, misal /blog/2026/02/23 → slug = ["2026","02","23"].

### 2. Mengapa slug berbentuk array?
Karena catch-all route bisa menangkap banyak path sekaligus. Misal : /category/pakaian/makanan → slug = ["pakaian", "makanan"]. Jadi array memudahkan kita loop dan menampilkan semua segment

### 3. Kapan sebaiknya menggunakan Link dan router.push()?
- Link : saat navigasi klik biasa di halaman untuk pindah halaman
- router.push() : saat pindah halaman secara otomatis lewat kode, misal setelah login jadi user tidak perlu klik apa-apa

### 4. Mengapa navigasi Next.js tidak me-refresh halaman?
Karena Next.js menggunakan Client-Side Routing sehingga halaman dapat load di browser tanpa reload penuh, URL berubah tapi halaman tidak refresh total, hanya konten yang di update saja