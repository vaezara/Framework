## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 8</p>
## <p align = "center">SERVER SIDE RENDERING</p>

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

### Langkah 1 – Setup Halaman SSR
![1](public/img/1.png)

### Langkah 2 - Implementasi getServerSideProps pada server.tsx
![1](public/img/2.png)

### Langkah 3 - Refactor Type ( produk type )
![1](public/img/3.png)

### Langkah 4 - Uji Perbedaan SSR vs CSR

#### Uji 1 - Skeleton
- Halaman CSR (Skeleton muncul)
![1](public/img/4.gif)
- Halaman SSR (Skeleton tidak muncul)
![1](public/img/5.gif)

#### Uji 2 - Network Tab
- Halaman CSR (Request API terlihat)
![1](public/img/6.png)
- Halaman SSR (Request API tidak terlihat)
![1](public/img/7.png)

#### Uji 3 - Response HTML
- Halaman CSR (Skeleton muncul tapi sudah ada informasi pada jobsheet 7)
![1](public/img/4.gif)
- Halaman SSR (Skeleton tidak muncul dan sudah ada data produk)
![1](public/img/5.gif)

## Tugas Praktikum

### Tugas 1
- Halaman `/products` (CSR)
![1](public/img/4.gif)
- Halaman `/products/server` (SSR)
![1](public/img/5.gif)

### Tugas 2
- Network tab CSR
![1](public/img/6.png)
- Network tab SSR
![1](public/img/7.png)
- View Source CSR
![1](public/img/8.png)
- View Source SSR
![1](public/img/9.png)


