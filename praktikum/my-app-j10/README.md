## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 10</p>
## <p align = "center">DYNAMIC ROUTING</p>

<br><br>

<p align="center">
  <img src="public/img/logo_polinema.png" width="40%">
</p>

<br><br>

## <p align = "center">Oleh :</p>
## <p align = "center">Nova Eliza Maharani</p>
## <p align = "center">NIM. 2341720252 </p>

<br><br>

## <p align = "center">PROGRAM STUDI D-IV TEKNIK INFORMATIKA</p>
## <p align = "center">JURUSAN TEKNOLOGI INFORMASI</p>
## <p align = "center">POLITEKNIK NEGERI MALANG</p>
## <p align = "center">MARET 2026</p>

<br><br>

## Hasil Praktikum

### Langkah 1 – Membuat Dynamic Routing
![1](public/img/1.png)

### Langkah 2 - Implementasi CSR (Client Rendering) 

- Hasil cek API produk
![1](public/img/2.png)

- Hasil Detail Produk ketika di klik
![1](public/img/3.gif)

- Judul Detail Produk sudah ditengah
![1](public/img/4.png)

### Langkah 3 - Implementasi SSR
![1](public/img/5.gif)

### Langkah 4 - Implementasi Static Site Generation (Dynamic SSG) 
![1](public/img/6.png)
![1](public/img/7.png)

## Pengujian

### Uji 1 - CSR
Ada request API di network tab setelah detail produk di refresh
![1](public/img/8.png)

### Uji 2 - SSR
Ketika detail produk di refresh tidak ada request API
![1](public/img/9.png)

### Uji 3 - SSG

1. Hasil menjalankan `npm run build` dan `npm run start`
![1](public/img/10.png)
![1](public/img/11.png)

2. Menambahkan produk baru di database
![1](public/img/12.png)

3. Halaman detail produk baru tidak muncul
![1](public/img/13.png)

4. Hasil menjalankan ulang `npm run build` dan `npm run start`. Produk yang baru ditambahkan muncul
![1](public/img/14.png)
![1](public/img/15.png)

## Tugas Praktikum      

#### Tugas 1

1. CSR
2. SSR
3. SSG

Sudah diimplementasikan pada `DetailProduk/index.tsx`, dokumentasi akan saya jabarkan di tugas 3

#### Tugas 2
-------------------------------------------------------------------
| Aspek            | CSR       | SSR          | SSG               |
|------------------|-----------|--------------|-------------------|
| Loading          | Ada       | Cepat        | Cepat             |
| Build Required   | Tidak     | Tidak        | Ya                |
| SEO              | Kurang    | Optimal      | Optimal           |
| Perubahan Data   | Real-time | Tiap request | Harus rebuild     |
-------------------------------------------------------------------

#### Tugas 3

1. CSR
![1](public/img/16.gif)

2. SSR
![1](public/img/17.gif)

3. SSG
![1](public/img/18.gif)

## F. Pertanyaan Analisis

1. Mengapa getStaticPaths wajib pada dynamic SSG?

Jawab : karena Next.js perlu tahu daftar path dinamis yang harus dibangun saat build time, sehingga halaman dynamic seperti /products/[id] bisa di-generate statis.

2. Mengapa CSR membutuhkan loading state?

Jawab : karena data diambil di browser saat runtime. apabila tanpa loading state, pengguna melihat layar kosong saat data belum selesai dimuat.

3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?

Jawab : karena konten di-generate statis saat build, jadi perubahan data baru tidak otomatis muncul di halaman yang sudah dibangun.

4. Mana metode terbaik untuk halaman detail e-commerce?

Jawab : Untuk halaman detail e-commerce, metode terbaik biasanya SSR (Server-Side Rendering) atau SSG dengan fallback/ISR, tergantung kebutuhan:
- SSR: Bagus kalau data sering berubah atau ada stok/price real-time, karena setiap request selalu dapat data terbaru.
- SSG + ISR: Bagus kalau mayoritas produk jarang berubah, tapi tetap ingin menampilkan produk baru tanpa build ulang penuh.
- CSR: Kurang ideal untuk SEO karena konten muncul setelah browser load; cocok untuk fitur interaktif tambahan, bukan halaman utama produk.

5. Apa risiko menggunakan SSG untuk produk yang sering berubah?

Jawab : informasi bisa kadaluarsa atau tidak akurat sampai halaman di-build ulang, menyebabkan pengalaman pengguna kurang up-to-date.