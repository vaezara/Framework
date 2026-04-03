## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 15</p>
## <p align = "center">IMPLEMENTASI LOGIN DATABASE & MULTI-ROLE</p>

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

## C. Langkah Praktikum

### Langkah 1 – Custom Login Page
Ketika tombol sign in di klik maka akan langsung diarahkan ke halaman login
![1](public/img/1.png)

### Langkah 2 - Handle Login di Frontend
Tampilan login sudah sesuai dengan halaman registrasi
![1](public/img/2.png)

### Langkah 3 – Authorize di NextAuth (Database Login)
![1](public/img/3.png)

### Langkah 4 – Tambahkan Role ke Token
- Hasil login akun
![1](public/img/4.png)
- Terdapat error
![1](public/img/5.png)
- Hasil setelah perbaikan
![1](public/img/6.png)

### Langkah 5 - Callback URL Logic
![1](public/img/7.png)

### Langkah 6 – Membuat halaman Admin dan authoriz
- Hasil membuka halaman produk pada role user
![1](public/img/8.png)
- Hasil membuka halaman admin pada role user (kembali ke home)
![1](public/img/9.png)
- Mengubah role di firebase
![1](public/img/10.png)
- Hasil membuka halaman admin dengan role admin
![1](public/img/11.png)

## D. Pengujian

### Uji 1 – Login Valid
Input:
• Email benar
• Password benar
Hasil:
• Login berhasil
• Redirect sesuai callbackUrl
![1](public/img/4.png)

### Uji 2 – Password Salah
Input:
• Email benar
• Password salah
Hasil:
• Error message tampil
• Tidak login
![1](public/img/12.png)

### Uji 3 – Akses Admin sebagai User
Login sebagai:
• role: user
Akses:
/admin
Hasil:
• Redirect ke home
![1](public/img/9.png)

### Uji 4 – Akses Admin sebagai Admin
Login sebagai:
• role: admin
Akses:
/admin
Hasil:
• Bisa masuk halaman admin
![1](public/img/11.png)

## E. Struktur Database Users

Collection: users
-------------------------------|
| Field     |  Tipe            |
-------------------------------|
| email     |  string          |
| password  |  string (hashed) |
| role      |  string          |
| fullName  |  string          |
--------------------------------

## F. Perbandingan Sistem

| Fitur      | Sebelum    | Sekarang        |
|------------|------------|-----------------|
| Login      | Hardcoded  | Database        |
| Password   | Plaintext  | Hashed          |
| Role       | Tidak ada  | Ada             |
| Redirect   | Manual     | Callback URL    |
| Middleware | Basic      | Role-based      |

## G. Tugas Praktikum

1. Implementasikan login database.
![1](public/img/2.png)
![1](public/img/4.png)

2. Tambahkan role pada user.
![1](public/img/13.png)

3. Buat halaman:
- /profile
![1](public/img/14.png)

- /admin
![1](public/img/11.png)

4. Proteksi /admin hanya untuk admin.
![1](public/img/15.png)

5. Implementasikan callback URL
![1](public/img/7.png)