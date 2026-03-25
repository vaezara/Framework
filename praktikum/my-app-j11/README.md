## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 11</p>
## <p align = "center">INCREMENTAL STATIC REGENERATION</p>

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

## C. Implementasi ISR Otomatis

### Langkah 1 – Tambahkan revalidate
![1](public/img/1.png)

### Langkah 2 - Pengujian ISR
1. Hasil build
![1](public/img/2.png)
2. Hasil menambahkan data pada firebase
![1](public/img/3.png)
3. Hasil refresh
![1](public/img/4.png)

## D. On-Demand Revalidation 

### Langkah 1 - Buat API revalidate
![1](public/img/5.png)

### Langkah 2 - Tambahkan Parameter Data
![1](public/img/6.png)

### Langkah 3 – Tambahkan Token Security
![1](public/img/7.png)

## E. Pengujian Manual Revalidation

- Hasil jika benar
![1](public/img/8.png)

- Hasil jika salah
![1](public/img/9.png)

## F. Perbandingan SSG vs ISR
---------------------------------------------------------------
| Aspek            | SSG                | ISR                 |
|------------------|--------------------|---------------------|
| Update Data      | Harus build ulang  | Otomatis/Trigger    |
| Cache            | Static permanen    | Static+Refrseh      |
| Cocok untuk      | Konten tetap       | Konten semi-dinamis |
---------------------------------------------------------------

## G. Tugas Praktikum

1. Tambahkan lagi produk pada firebase
![1](public/img/10.png)

2. Implementasikan ISR dengan revalidate: 10.
![1](public/img/11.png)

3. Tambahkan endpoint On-Demand Revalidation.
![1](public/img/11.png)

4. Tambahkan validasi token.
![1](public/img/12.png)

5. Uji dengan:

- Token benar
![1](public/img/13.png)

- Token salah
![1](public/img/14.png)

- Tanpa token
![1](public/img/15.png)