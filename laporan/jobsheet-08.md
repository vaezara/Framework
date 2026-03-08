## <p align = "center">LAPORAN PRAKTIKUM JOBSHEET 8</p>
## <p align = "center">SERVER SIDE RENDERING</p>

<br><br>

<p align="center">
  <img src="../praktikum/my-app-j08/public/img/logo_polinema.png" width="40%">
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
![1](../praktikum/my-app-j08/public/img/1.png)

### Langkah 2 - Implementasi getServerSideProps pada server.tsx
![1](../praktikum/my-app-j08/public/img/2.png)

### Langkah 3 - Refactor Type ( produk type )
![1](../praktikum/my-app-j08/public/img/3.png)

### Langkah 4 - Uji Perbedaan SSR vs CSR

#### Uji 1 - Skeleton
- Halaman CSR (Skeleton muncul)
![1](../praktikum/my-app-j08/public/img/4.gif)
- Halaman SSR (Skeleton tidak muncul)
![1](../praktikum/my-app-j08/public/img/5.gif)

#### Uji 2 - Network Tab
- Halaman CSR (Request API terlihat)
![1](../praktikum/my-app-j08/public/img/6.png)
- Halaman SSR (Request API tidak terlihat)
![1](../praktikum/my-app-j08/public/img/7.png)

#### Uji 3 - Response HTML
- Halaman CSR (Skeleton muncul tapi sudah ada informasi pada jobsheet 7)
![1](../praktikum/my-app-j08/public/img/4.gif)
- Halaman SSR (Skeleton tidak muncul dan sudah ada data produk)
![1](../praktikum/my-app-j08/public/img/5.gif)

## Tugas Praktikum

### Tugas 1
- Halaman `/products` (CSR)
![1](../praktikum/my-app-j08/public/img/4.gif)
- Halaman `/products/server` (SSR)
![1](../praktikum/my-app-j08/public/img/5.gif)

### Tugas 2
- Network tab CSR
![1](../praktikum/my-app-j08/public/img/6.png)
- Network tab SSR
![1](../praktikum/my-app-j08/public/img/7.png)
- View Source CSR
![1](../praktikum/my-app-j08/public/img/8.png)
- View Source SSR
![1](../praktikum/my-app-j08/public/img/9.png)

### Tugas 3
Client Side Rendering (CSR) dan Server Side Rendering (SSR) adalah dua cara yang digunakan untuk menampilkan halaman pada aplikasi web. Perbedaan utama dari keduanya terletak pada tempat proses rendering dilakukan, ada yang di browser pengguna dan ada di server.

Pada CSR, proses menampilkan data dilakukan di sisi browser. Ketika halaman dibuka, server hanya mengirimkan HTML dasar tanpa data. Setelah itu, JavaScript di browser akan mengambil data dari API dan menampilkannya di halaman. Hal ini dapat dilihat pada halaman /produk. Saat halaman direfresh, muncul tampilan skeleton loading terlebih dahulu sebelum data produk muncul. Skeleton ini muncul karena browser masih mengambil data dari API.

Berbeda dengan CSR, pada SSR proses rendering dilakukan di server terlebih dahulu. Server akan mengambil data yang dibutuhkan, kemudian menggabungkannya dengan HTML sebelum dikirim ke browser. Karena itu, saat halaman dibuka data sudah langsung tampil tanpa perlu menunggu proses pengambilan data lagi. Hal ini dapat dilihat pada halaman /produk/server. Ketika halaman direfresh, data produk langsung muncul dan tidak ada skeleton loading.

Perbedaan juga dapat dilihat melalui View Source pada browser. Pada halaman CSR, jika membuka View Source maka HTML yang ditampilkan biasanya hanya berisi struktur dasar halaman tanpa data produk. Hal ini karena data baru dimuat oleh JavaScript setelah halaman selesai dimuat di browser. Sedangkan pada halaman SSR, ketika membuka View Source, HTML yang ditampilkan sudah berisi data produk. Ini terjadi karena server sudah mengambil data dan memasukkannya ke dalam HTML sebelum dikirim ke browser.

Perbedaan lain juga bisa dilihat pada Network Tab di browser. Pada halaman CSR terdapat request tambahan ke API untuk mengambil data produk. Sedangkan pada SSR biasanya hanya ada satu request halaman karena data sudah diambil oleh server sebelum halaman dikirim ke browser.

Dari percobaan ini dapat disimpulkan bahwa CSR dan SSR memiliki cara kerja yang berbeda. CSR membutuhkan waktu tambahan untuk mengambil data di browser sehingga sering menampilkan skeleton loading. Sedangkan SSR dapat menampilkan data lebih cepat karena proses pengambilan data sudah dilakukan di server sebelum halaman dikirim ke pengguna.

## Studi Analisis

1. Mengapa SSR lebih baik untuk SEO?
Jawab : Karena konten sudah tersedia di HTML saat halaman dikirim dari server, sehingga mesin pencari dapat langsung membaca halaman tanpa menunggu JavaScript dijalankan.
2. Kapan sebaiknya menggunakan SSR?
Jawab : Digunakan untuk halaman yang butuh loading cepat dan visibilitas tinggi di mesin pencari, seperti halaman produk, berita, blog, atau landing page.
3. Apa kekurangan SSR dibanding CSR?
Jawab : Beban server lebih besar karena harus merender halaman setiap request, sehingga performa bisa menurun jika traffic tinggi, dan proses development bisa lebih kompleks.
4. Mengapa skeleton tidak muncul pada SSR?
Jawab : Karena data sudah dimasukkan ke HTML di server, sehingga browser langsung menampilkan konten tanpa perlu menunggu fetch data tambahan.