## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 19</p>
## <p align = "center">DEPLOY VERCEL</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j19/public/img/logo_polinema.png" width="40%">
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

## Praktikum 1 – Membuat Repository GitHub
![1](../praktikum/my-app-j19/public/img/1.png)

## Praktikum 2 – Deployment ke Vercel
![1](../praktikum/my-app-j19/public/img/2.png)

Hasil 
![1](../praktikum/my-app-j19/public/img/3.png)

## Praktikum 3 – Menambahkan Environment Variable di Verce
Hasil setelah redeploy
![1](../praktikum/my-app-j19/public/img/4.png)

## Praktikum 4 – Konfigurasi Google OAuth Productio
Setting Authorized origins dan URL
![1](../praktikum/my-app-j19/public/img/5.png)

Hasil redeploy
![1](../praktikum/my-app-j19/public/img/6.png)

## Praktikum 5 - Pengujian Setelah Deployment

• /
![1](../praktikum/my-app-j19/public/img/8.png)

• /about
![1](../praktikum/my-app-j19/public/img/9.png)

• /product
![1](../praktikum/my-app-j19/public/img/10.png)

• /profile
![1](../praktikum/my-app-j19/public/img/7.png)

• Login Google
![1](../praktikum/my-app-j19/public/img/13.png)
![1](../praktikum/my-app-j19/public/img/12.png)

• Login credential biasa
![1](../praktikum/my-app-j19/public/img/11.png)
![1](../praktikum/my-app-j19/public/img/8.png)

## Tugas Praktikum
1. Deploy project Next.js ke 
![1](../praktikum/my-app-j19/public/img/6.png)

2. Pastikan API tidak menggunakan localhost

3. Konfigurasikan Google OAuth production
![1](../praktikum/my-app-j19/public/img/5.png)

4. Lakukan minimal 1 redeploy
![1](../praktikum/my-app-j19/public/img/6.png)

5. Dokumentasikan:

o Screenshot dashboard Vercel
![1](../praktikum/my-app-j19/public/img/8.png)

o URL hasil deployment
``https://testing-praktikum-pbf-lagi.vercel.app/``

o Screenshot login Google berhasil
![1](../praktikum/my-app-j19/public/img/13.png)
![1](../praktikum/my-app-j19/public/img/12.png)

## Refleksi dan Diskusi

1. Mengapa localhost tidak boleh digunakan di production?
Jawab : Karena localhost hanya bisa diakses secara lokal, tidak bisa diakses publik. production harus pakai domain/public IP.

2. Mengapa SSG bisa gagal saat build?
Jawab : Karena SSG membutuhkan data saat build, jika API/data tidak tersedia (misal localhost), build akan gagal.

3. Apa perbedaan SSR dan SSG saat deployment?
- SSR: halaman dibangun saat request → selalu up-to-date.
- SSG: halaman dibangun saat build → cepat tapi statis.

4. Mengapa perlu redeploy setelah menambahkan environment?
Jawab : Karena perubahan environment variabel baru akan diterapkan hanya saat build/deploy.

5. Apa fungsi redirect URI pada OAuth?
Jawab : Untuk menentukan alamat tujuan setelah login berhasil agar token dikirim ke aplikasi yang benar.