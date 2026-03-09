## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 9</p>
## <p align = "center">STATIC SITE GENERATION</p>

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

### Langkah 1 – Setup Halaman Static
![1](public/img/1.png)

### Langkah 3 - Build Production Mode
- Build berhasil
![1](public/img/2.png)
- Hasil `npm run start`
![1](public/img/3.png)

### Langkah 4 - Pengujian Perubahan Data

#### Uji 1 - Tambah Data di Database
1. Menambahkan data di firebase
![1](public/img/4.png)
2. Hasil tiap halaman
- CSR (data bertambah)
![1](public/img/5.png)
- SSR (data bertambah)
![1](public/img/6.png)
- SSG (data tidak berubah)
![1](public/img/7.png)

#### Uji 2 - Build Ulang
1. Menjalankan ulang
- `npm run build`
![1](public/img/8.png)
- `npm run start`
![1](public/img/9.png)
2. Hasil halaman static
![1](public/img/10.png)

## Tugas Praktikum

### Tugas 1
1. Halaman CSR
![1](public/img/5.png)
2. Halaman SSR
![1](public/img/6.png)
3. Halaman SSG
![1](public/img/10.png)

### Tugas 2

1. Tambah Data
![1](public/img/11.png)
- CSR
![1](public/img/12.png)
- SSR
![1](public/img/13.png)
- SSG
![1](public/img/14.png)
- SSG setelah build ulang
![1](public/img/15.png)

2. Hapus Data
![1](public/img/16.png)
- CSR
![1](public/img/5.png)
- SSR
![1](public/img/6.png)
- SSG
![1](public/img/15.png)
- SSG setelah build ulang
![1](public/img/14.png)

Dari hasil diatas, ketika kita melakukan tambah dan hapus data, pada CSR dan SSR halaman akan otomatis terupdate. Berbeda dengan SSG yang harus build ulang dan menjalankannya lagi

