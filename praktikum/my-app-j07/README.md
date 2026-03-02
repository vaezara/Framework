## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 7</p>
## <p align = "center">CLIENT SIDE RENDERING</p>

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

### Langkah 1 – Setup Data Produk
![1](public/img/1.png)

### Langkah  2 – Implementasi CSR dengan useEffect
![1](public/img/2.png)
![1](public/img/3.png)

### Langkah 3 – Implementasi Skeleton Loading
- Animasi Skeleton
![1](public/img/4.gif)
- Skeleton dan informasi
![1](public/img/5.gif)

### Langkah 5 – Implementasi SWR
![1](public/img/6.gif)

#### Perbandingan
- use Effect manual :
1. Update data : handle sendiri
2. Caching : tidak ada
3. Kode : panjang
4. Error / retry : manual
5. Install library : tidak
- SWR : 
1. Update data : otomatis update
2. Caching : ada otomatis
3. Kode : pendek dan rapi
4. Error / retry : bisa otomatis
5. Install library : perlu SWR

Kesimpulan : useEffect itu manual semua, kita pegang kendali penuh. Sedangkan SWR lebih otomatis, data dikelola sendiri dan kode bisa lebih sederhana.

## Tugas Praktikum

### Tugas 1
1. Jelaskan perbedaan:
- Client Side Rendering (CSR): Halaman dirender di browser. Loading awal lebih lambat, SEO kurang, tapi interaktifitas tinggi.
- Server Side Rendering (SSR): Halaman dirender di server setiap request. Loading cepat, SEO bagus, tapi server lebih sibuk.
- Static Site Generation (SSG): Halaman dirender sekali saat build. Loading sangat cepat, SEO optimal, tapi kurang cocok untuk konten yang sering berubah.