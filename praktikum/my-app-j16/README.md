## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 16</p>
## <p align = "center">IMPLEMENTASI LOGIN GOOGLE PROVIDER DENGAN NEXTAUTH.JS + FIREBASE</p>

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
## <p align = "center">APRIL 2026</p>

<br><br>

## B. Konfigurasi Google OAuth

### Langkah 1 – Masuk ke Google Cloud Console
![1](public/img/1.png)

### Langkah 2 – Buat Project Baru
![1](public/img/2.png)

### Langkah 3 – Konfigurasi OAuth Consent Screen
![1](public/img/3.png)

### Langkah 4 – Buat OAuth Credentials
![1](public/img/4.png)

## C. Tambahkan Environment Variables 
![1](public/img/5.png)

## D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
![1](public/img/6.png)

## E. Tambahkan Button Login Google 
![1](public/img/7.png)
![1](public/img/8.png)

## G. Simpan Data Google ke Database 
![1](public/img/9.png)

## H. Pengujian

- **Login Google pertama kali** → Data tersimpan di Firestore  
![1](public/img/9.png)

- **Login Google kedua kali** → Data diupdate  
![1](public/img/10.png)

- **User role member akses /admin** → Redirect  
![1](public/img/11.png)

- **User role admin akses /admin** → Bisa masuk
![1](public/img/12.png)

- **Avatar tampil** → Ya
![1](public/img/8.png)

## I. Analisis & Diskusi

1. Apa perbedaan login credential dan login Google?
Jawab :
- Login credential: user memasukkan email & password sendiri, diverifikasi melalui database.
- Login Google: user masuk menggunakan akun Google, verifikasi dilakukan oleh Google, password tidak diperlukan di aplikasi.

2. Mengapa data Google tetap perlu disimpan ke database?
Jawab : Agar aplikasi punya kontrol penuh atas user, bisa menyimpan role, preferensi, atau data tambahan, dan memudahkan manajemen user di sistem sendiri.

3. Apa fungsi JWT callback?
Jawab : JWT callback digunakan untuk menambahkan atau memodifikasi informasi dalam token sebelum disimpan, seperti email, role, fullname, atau avatar.

4. Mengapa perlu multi-role?
Jawab : Multi-role memungkinkan aplikasi mengatur hak akses berbeda untuk user, misalnya admin bisa akses halaman admin, user biasa hanya halaman publik.

5. Apa risiko jika tidak menyimpan user ke database?
Jawab : Tidak bisa menyimpan role atau data tambahan, kontrol akses terbatas dan bisa menimbulkan kesulitan manajemen user.

## J. Tugas Mandiri

1. Tambahkan role editor
![1](public/img/13.png)

2. Buat halaman khusus editor
![1](public/img/14.png)

3. Tambahkan provider GitHub
![1](public/img/15.png)
![1](public/img/16.png)
![1](public/img/17.png)

4. Refactor service agar reusable
![1](public/img/18.png)
![1](public/img/19.png)

5. Gunakan next/image untuk optimasi avatar
![1](public/img/20.png)