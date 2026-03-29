## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 14</p>
## <p align = "center">IMPLEMENTASI SISTEM REGISTRASI (DATABASE INTEGRATION)</p>

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

### Langkah 1 – Membuat Register View
![1](public/img/1.png)

### Langkah 2 - Membuat API Register
![1](public/img/2.png)

### Langkah 3 - Install bcrypt

- Melakukan install ``npm install bcrypt --force`` dan ``npm install --save-dev @types/bcrypt –force``
![1](public/img/3.png)
- Data register berhasil masuk pada firebase
![1](public/img/4.png)
- Hasil perbaikan apabila user memasukkan data yang sudah terdaftar
![1](public/img/5.png)
- Menambahkan loading pada button
![1](public/img/6.png)

## D. Pengujian

### Uji 1 - Register Baru
- Input email baru
![1](public/img/2.png)
- Hasil tersimpan di firestore dan password ter hash
![1](public/img/4.png)
- Redirect ke login (masih tampilan yang lama)
![1](public/img/7.png)

### Uji 2 - Email Sudah Ada
- Muncul message "email already exists"
![1](public/img/5.png)

### Uji 3 - Method GET
- Muncul message "Method Not Allowed"
![1](public/img/8.png)

## E. Struktur Database (Firestore)

### Struktur Data User

| Field     | Tipe               |
|-----------|--------------------|
| fullName  | string             |
| email     | string             |
| password  | string (hashed)    |
| role      | string             |
| createdAt | timestamp          |

## G. Tugas Praktikum
1. Implementasikan register terhubung database.
![1](public/img/4.png)

2. Tambahkan validasi:
o Email wajib
o Password minimal 6 karakter
![1](public/img/9.png)

3. Tambahkan role default "member".
![1](public/img/10.png)

4. Tampilkan pesan error di UI.
![1](public/img/5.png)

5. Screenshot hasil:
o Register sukses
![1](public/img/2.png)

o Email sudah ada
![1](public/img/5.png)

o Database Firestore
![1](public/img/4.png)