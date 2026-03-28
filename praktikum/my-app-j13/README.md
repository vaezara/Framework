## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 13</p>
## <p align = "center">SISTEM AUTENTIKASI & PROTEKSI ROUTE</p>

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

### Langkah 1 – Install NextAuth
![1](public/img/1.png)

### Langkah 2 – Konfigurasi API Auth
![1](public/img/2.png)

### Langkah 3 – Tambahkan Secret
![1](public/img/3.png)

### Langkah 4 - Tambahkan SessionProvider
![1](public/img/4.png)

### Langkah 5 - Tambahkan Tombol Login & Logout

1. Hasil menjalankan ``http://localhost:3000/``
![1](public/img/5.png)

2. Hasil ketika button sign in di klik dan diisi data
![1](public/img/6.png)

3. Klik sign in maka akan berhasil login dan muncul session
![1](public/img/7.png)

4. Hasil menjalankan setelah penambahan untuk kode menangkap data session
![1](public/img/8.gif)

## D. Menambahkan Data Tambahan (Full Name)
![1](public/img/9.gif)

## E. Proteksi Halaman Profile
- Tampilan halaman profile
![1](public/img/10.png)
- Hasil setelah menambahkan middleware authorization
Jika belum melakukan sign in maka tidak akan bisa mengakses halaman profile
![1](public/img/11.gif)

## F. Pengujian

### Uji 1 - Belum Login
- Hasil redirect ke home
![1](public/img/12.gif)

### Uji 2 - Sudah Login
- Hasil bisa akses profile
![1](public/img/13.gif)

### Uji 3 - Logout
- Hasil redirect ke home
![1](public/img/14.gif)

## G. Alur Login NextAuth

```
User klik Sign In
↓
NextAuth menampilkan form credentials (email & password)
↓
Fungsi authorize() dijalankan
↓
JWT (JSON Web Token) dibuat
↓
Session disimpan oleh NextAuth
↓
Frontend mengakses session dengan useSession()
```

## H. Tugas Praktikum

1. Hasil tampilan login
![1](public/img/6.png)

2. Hasil tampilan session
![1](public/img/15.png)

3. Hasil redirect middleware
![1](public/img/11.gif)

## I. Pertanyaan Analisis

1. Mengapa session menggunakan JWT?
- Jawab : Karena JWT tidak perlu disimpan di server. Data user sudah ada di dalam token, jadi lebih cepat dan praktis

2. Apa perbedaan authorize() dan callback jwt()?
- Jawab : 
  - authorize() : untuk cek login (email & password benar atau tidak)
  - jwt() : untuk menyimpan data user ke dalam token

3. Mengapa middleware perlu getToken()?
- Jawab : Karena middleware tidak bisa pakai useSession(), jadi harus pakai getToken() untuk cek user sudah login atau belum

4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan?
- Jawab : Token jadi tidak aman dan bisa disalahgunakan, serta bisa menyebabkan error pada login.

5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini? 
- Jawab : 
  - Autentikasi : cek siapa user (login)
  - Otorisasi : cek hak akses user (boleh masuk atau tidak)