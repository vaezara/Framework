## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 12</p>
## <p align = "center">MIDDLEWARE & ROUTE PROTECTION</p>

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

## C. Langkah Praktikum

### Langkah 1 – Membuat Middleware
![1](public/img/1.png)

### Langkah 2 - Struktur Dasar Middleware
![1](public/img/2.png)

### Langkah 3 – Redirect Sederhana 
![1](public/img/3.png)

### Langkah 4 – Batasi Route Tertentu 
![1](public/img/4.png)

### Langkah 5 – Simulasi Sistem Login 
![1](public/img/5.gif)

## D. Pengujian

### Uji 1 – isLogin = false
![1](public/img/5.gif)

### Uji 2 – isLogin = true
![1](public/img/6.gif)

### Uji 3 – Tambahkan Multiple Route 
![1](public/img/7.gif)

## E. Perbandingan Middleware vs useEffect
------------------------------------------------------------------- 
| Aspek              | useEffect           | Middleware           |
|--------------------|---------------------|----------------------|
| Redirect timing    | Setelah render      | Sebelum render       |
| Glitch             | Ada                 | Tidak                |
| Security           | Lemah               | Lebih aman           |
| Skalabilitas       | Harus tiap halaman  | Sekali di middleware |
-------------------------------------------------------------------

## F. Tugas Praktikum

1. Buat halaman 

- /products
![1](public/img/8.png)
- /about
![1](public/img/9.png)
- /login
![1](public/img/10.png)

2. Implementasikan Middleware

- Redirect ke /login jika belum login.
- Izinkan akses jika login true.
![1](public/img/11.png)
![1](public/img/10.png)

3. Tambahkan proteksi hanya untuk route tertentu.
![1](public/img/12.png)

4. Dokumentasikan:
- Screenshot sebelum dan sesudah redirect.
- Sebelum 
![1](public/img/10.png)
- Sesudah
![1](public/img/8.png)
- Perbandingan dengan useEffect.
- useEffect
1. Redirect terjadi setelah komponen tampil
2. User bisa melihat halaman sebentar (glitch)
3. Lebih mudah tapi kurang aman
- Middleware / proteksi awal
1. Redirect terjadi sebelum halaman ditampilkan
2. Tidak ada flicker/glitch
3. Lebih profesional dan aman

## G. Pertanyaan Analisis

1. Mengapa middleware lebih aman dibanding useEffect?

Jawab : Middleware dijalankan sebelum halaman dirender, sehingga user yang belum login tidak pernah melihat konten halaman. Sedangkan useEffect baru dijalankan setelah komponen tampil, sehingga halaman sempat terlihat, walaupun akhirnya redirect terjadi. Jadi middleware lebih aman karena konten tidak terekspos.

2. Mengapa middleware tidak menimbulkan glitch?

Jawab : Karena redirect terjadi sebelum browser menampilkan halaman, user langsung diarahkan ke halaman yang sesuai. Dengan useEffect, halaman pertama kali dirender lalu baru redirect, sehingga ada flicker/glitch sementara konten asli terlihat.

3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?

Jawab : 
- User baru atau pengunjung tidak bisa mengakses halaman publik (misal halaman About, Login, Register).
- Bisa menimbulkan loop redirect jika halaman login juga diproteksi.
- Membuat aplikasi kurang user-friendly karena semua konten terkunci.

4. Kapan middleware tidak diperlukan?

Jawab : 
- Jika halaman bersifat publik / bebas diakses (contoh: About, Landing Page, Blog).
- Jika hanya menggunakan login sederhana untuk latihan atau project kecil.

5. Apa perbedaan middleware dan API route?

Jawab :
| Aspek          | Middleware                              | API Route                             |
| -------------- | --------------------------------------- | ------------------------------------- |
| Tujuan         | Intercept request / redirect / proteksi | Menyediakan data / logic server-side  |
| Waktu eksekusi | Sebelum halaman dirender                | Saat request ke endpoint API          |
| Return konten  | Bisa redirect atau modifikasi response  | Mengembalikan JSON / data / status    |
| Contoh         | Proteksi halaman login                  | GET `/api/produk` -> ambil data produk |
