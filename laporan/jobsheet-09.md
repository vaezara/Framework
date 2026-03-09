## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 9</p>
## <p align = "center">STATIC SITE GENERATION</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j09/public/img/logo_polinema.png" width="40%">
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
![1](../praktikum/my-app-j09/public/img/1.png)

### Langkah 3 - Build Production Mode
- Build berhasil
![1](../praktikum/my-app-j09/public/img/2.png)
- Hasil `npm run start`
![1](../praktikum/my-app-j09/public/img/3.png)

### Langkah 4 - Pengujian Perubahan Data

#### Uji 1 - Tambah Data di Database
1. Menambahkan data di firebase
![1](../praktikum/my-app-j09/public/img/4.png)
2. Hasil tiap halaman
- CSR (data bertambah)
![1](../praktikum/my-app-j09/public/img/5.png)
- SSR (data bertambah)
![1](../praktikum/my-app-j09/public/img/6.png)
- SSG (data tidak berubah)
![1](../praktikum/my-app-j09/public/img/7.png)

#### Uji 2 - Build Ulang
1. Menjalankan ulang
- `npm run build`
![1](../praktikum/my-app-j09/public/img/8.png)
- `npm run start`
![1](../praktikum/my-app-j09/public/img/9.png)
2. Hasil halaman static
![1](../praktikum/my-app-j09/public/img/10.png)

## Tugas Praktikum

### Tugas 1
1. Halaman CSR
![1](../praktikum/my-app-j09/public/img/5.png)
2. Halaman SSR
![1](../praktikum/my-app-j09/public/img/6.png)
3. Halaman SSG
![1](../praktikum/my-app-j09/public/img/10.png)

### Tugas 2

1. Tambah Data
![1](../praktikum/my-app-j09/public/img/11.png)
- CSR
![1](../praktikum/my-app-j09/public/img/12.png)
- SSR
![1](../praktikum/my-app-j09/public/img/13.png)
- SSG
![1](../praktikum/my-app-j09/public/img/14.png)
- SSG setelah build ulang
![1](../praktikum/my-app-j09/public/img/15.png)

2. Hapus Data
![1](../praktikum/my-app-j09/public/img/16.png)
- CSR
![1](../praktikum/my-app-j09/public/img/5.png)
- SSR
![1](../praktikum/my-app-j09/public/img/6.png)
- SSG
![1](../praktikum/my-app-j09/public/img/15.png)
- SSG setelah build ulang
![1](../praktikum/my-app-j09/public/img/14.png)

Dari hasil diatas, ketika kita melakukan tambah dan hapus data, pada CSR dan SSR halaman akan otomatis terupdate. Berbeda dengan SSG yang harus build ulang dan menjalankannya lagi

### Tugas 3

Laporan Analisis Praktikum: CSR, SSR, dan SSG

Dalam praktikum ini, saya belajar tentang pre-rendering pada Next.js, yaitu cara membuat halaman web yang sudah berisi HTML sebelum dikirim ke browser. Tujuannya agar halaman bisa lebih cepat tampil dan ramah untuk mesin pencari (SEO). Terdapat tiga metode utama: Client-Side Rendering (CSR), Server-Side Rendering (SSR), dan Static Site Generation (SSG). Ketiga metode ini berbeda pada waktu pengambilan data dan cara halaman dibuat, sehingga mempengaruhi performa dan bagaimana data baru muncul.

1. Analisis CSR (Client-Side Rendering)

Metode CSR mengambil data di browser setelah halaman dimuat. Artinya, saat membuka halaman, browser menjalankan JavaScript untuk mengambil data dari database. Dari percobaan, halaman `/produk` yang menggunakan CSR menampilkan data terbaru secara langsung setiap kali ada perubahan di Firebase. Misalnya, ketika menambahkan produk baru, produk tersebut langsung terlihat tanpa harus membangun ulang aplikasi. Kelebihan CSR adalah mampu menampilkan data dinamis secara real-time dan cocok untuk aplikasi interaktif seperti dashboard. Kekurangannya, halaman awal kadang lambat muncul karena HTML masih kosong, sehingga perlu skeleton loading agar pengguna tidak melihat halaman kosong.

2. Analisis SSR (Server-Side Rendering)

Pada SSR, data diambil dan HTML dibuat di server setiap kali ada permintaan dari pengguna. Halaman yang dikirim ke browser sudah lengkap dengan data terbaru. Dalam percobaan, halaman `/produk/server` langsung menampilkan produk baru saat database diperbarui dan halaman di-refresh. Kelebihan SSR adalah data selalu up-to-date dan SEO lebih baik karena HTML sudah lengkap. Namun, setiap permintaan memerlukan proses di server, sehingga jika banyak pengguna mengakses sekaligus, server bisa berat.

3. Analisis SSG (Static Site Generation)

Berbeda dengan CSR dan SSR, SSG membuat HTML saat proses build aplikasi. Halaman statis ini disimpan dan dikirim ke browser langsung. Dari percobaan, halaman `/produk/static` tidak menampilkan produk baru yang ditambahkan di database sampai dilakukan build ulang dengan perintah npm run build dan npm run start. Kelebihan SSG adalah halaman sangat cepat karena sudah statis, cocok untuk landing page atau konten yang jarang berubah. Kekurangannya adalah data tidak real-time, sehingga setiap perubahan harus melakukan build ulang agar terlihat di halaman.

Perbandingan dan Kesimpulan

Berdasarkan percobaan, perbedaan utama ketiga metode adalah:

CSR : Data baru muncul langsung di browser, cocok untuk aplikasi interaktif.

SSR : Data baru muncul tiap request ke server, lebih SEO-friendly, tapi beban server lebih tinggi.

SSG : Data baru muncul hanya setelah build ulang, halaman sangat cepat, cocok untuk konten statis.

Kesimpulannya, pemilihan metode tergantung kebutuhan aplikasi. Untuk data yang sering berubah, CSR atau SSR lebih tepat. Untuk konten jarang berubah dan butuh kecepatan tinggi, SSG lebih cocok

## Studi Analisis
1. Mengapa SSG tidak menampilkan data terbaru?

Jawab : SSG (Static Site Generation) membuat halaman statis saat build time. Artinya HTML dan data sudah “dikunci” saat aplikasi dibangun. Jika ada data baru di database setelah build, halaman tidak otomatis berubah karena file HTML statis sudah dibuat. Agar data baru terlihat, aplikasi harus dibuild ulang.

2. Mengapa SSG lebih cepat?

Jawab : SSG lebih cepat karena halaman sudah dalam bentuk HTML statis. Browser langsung menerima halaman lengkap tanpa menunggu server atau JavaScript untuk mengambil data. Tidak ada proses rendering di server atau client saat request, sehingga waktu load halaman sangat singkat.

3. Kapan SSG tidak cocok digunakan?

Jawab : SSG tidak cocok untuk halaman yang sering berubah atau membutuhkan data real-time, misalnya dashboard, berita terbaru, atau fitur chat. Karena setiap update data harus dilakukan build ulang, SSG tidak efisien untuk konten yang cepat berubah.

4. Mengapa e-commerce tidak cocok menggunakan SSG murni?

Jawab : E-commerce biasanya memiliki data yang sering berubah, seperti stok produk, harga, atau promo. Jika menggunakan SSG murni, halaman produk akan menampilkan data lama sampai dilakukan build ulang. Hal ini bisa menyebabkan informasi yang ditampilkan tidak akurat, sehingga tidak cocok untuk e-commerce tanpa tambahan metode dinamis seperti CSR atau SSR.

5. Apa perbedaan build mode dan development mode?
Jawab : 

- Development mode (npm run dev) : Digunakan saat membuat dan mengembangkan aplikasi. Hot reload aktif sehingga perubahan kode langsung terlihat.
- Build mode (npm run build + npm run start) : Digunakan untuk produksi. Next.js membuat halaman statis (SSG) atau memproses SSR. Apabila terdapat perubahan data atau kode membutuhkan build ulang agar terlihat perubahannya.