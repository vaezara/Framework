## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 1</p>
## <p align = "center">Setup Project Next.js menggunakan Pages Router</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app/public/img/logo_polinema.png" width="40%">
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

### Langkah 1 – Pengecekan Lingkungan

#### node -v dan npm -v
![1](../praktikum/my-app/public/img/1-1.jpg)
#### git -v
![2](../praktikum/my-app/public/img/1-2.jpg)

### Langkah 2 – Membuat Project Next.js

#### Membuat direktori baru dan masuk ke direktori kerja
![3](../praktikum/my-app/public/img/1-3.jpg)
#### Menjalankan perintah
![4](../praktikum/my-app/public/img/1-4.jpg)

### Langkah 3 – Menjalankan Server Development

#### Masuk ke folder project
![5](../praktikum/my-app/public/img/1-5.jpg)
#### Menjalankan aplikasi dengan npm run dev
![6](../praktikum/my-app/public/img/1-6.jpg)
#### Buka browser dan akses: http://localhost:3000
![7](../praktikum/my-app/public/img/1-7.jpg)


### Langkah 4 – Mengenal Struktur Folder

#### pages/ → tempat routing halaman
![8](../praktikum/my-app/public/img/1-8.png)
#### public/ → aset statis
![9](../praktikum/my-app/public/img/1-9.png)
#### styles/ → file CSS
![10](../praktikum/my-app/public/img/1-10.png)
#### package.json → konfigurasi project
![11](../praktikum/my-app/public/img/1-11.png)
#### gitIgnore -> file konfigurasi di Git
![12](../praktikum/my-app/public/img/1-12.png)

### Langkah 5 – Modifikasi Halaman Utama
![13](../praktikum/my-app/public/img/1-13.png)
![14](../praktikum/my-app/public/img/1-14.png)

### Langkah 6 – Modifikasi API
![15](../praktikum/my-app/public/img/1-15.png)
![16](../praktikum/my-app/public/img/1-16.png)

### Langkah 7 – Modifikasi Background
![17](../praktikum/my-app/public/img/1-17.png)
![18](../praktikum/my-app/public/img/1-18.png)

## Tugas Praktikum
### Tugas 1
![19](../praktikum/my-app/public/img/1-19.png)
![20](../praktikum/my-app/public/img/1-20.png)
## Tugas 2
![21](../praktikum/my-app/public/img/1-21.png)
![22](../praktikum/my-app/public/img/1-22.gif)

## Pertanyaan Refleksi

### 1. Mengapa Pages Router disebut sebagai routing berbasis file?
Karena kita tidak perlu mendefinisikan rute secara manual dan tiap file yang ada pada folder pages/ akan otomatis menjadi rute web. Contohnya 
- pages/index.tsx menjadi (/)
- pages/about.tsx menjadi /about

### 2.  Apa perbedaan Next.js dengan React standar (CRA)?
Next.js berbeda dengan Reaxt Standar karena Next.js menyediakan routing otomatis berbasis file di folder pages/, mendukung CSR, SSR, dan SSG, serta memiliki fitur built-in seperti API routes dan optimasi gambar, sementara CRA hanya mendukung client-side rendering dan memerlukan library tambahan untuk routing dan optimasi, serta membutuhkan konfigurasi ekstra saat deployment

### 3. Apa fungsi perintah npm run dev?
Untuk memulai server pengembangan yang secara otomatis memuat ulang apabila terdapat perubahan

### 4. Apa perbedaan npm run dev dan run build?
- npm run dev : untuk menjalankan server pengembangan atau melalukan debugging, digunakan ketika sedang coding di komputer
- bpm run build : untuk membangun aplikasi Next.js yang siap diproduksi atau deploy, digunakan saat aplikasi sudah selesai dan siap diunggah ke server