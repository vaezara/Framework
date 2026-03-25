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