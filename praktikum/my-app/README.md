# JOBSHEET 1

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