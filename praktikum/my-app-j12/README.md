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
