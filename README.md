## Aplikasi Catatan

Aplikasi ini adalah RESTful API sederhana menggunakan Express.js yang berfungsi untuk mengelola catatan (notes). Pengguna dapat melihat, menambahkan, memperbarui, dan menghapus catatan. Setiap catatan terdiri dari id, judul, dan body.

### Deskripsi Aplikasi
Aplikasi ini mensimulasikan sistem pencatatan yang berguna untuk:
- Menyimpan daftar tugas atau to-do list
- Menyusun jadwal kegiatan
- Mencatat hal-hal penting

Data disimpan dalam array JavaScript di memori, tanpa menggunakan database.

### Cara Menjalankan Aplikasi
1. Klon repositori atau salin kode ke folder lokal
2. Pastikan Node.js sudah terinstal
3. Install dependencies

   ```bash
   npm install
   ```
4. Install express

   ```bash
   npm init -y
   npm install express
   ```
5. Jalankan Server
  
   ```bash
   node index.js
   ```
   
6. Jalankan Aplikasi dengan menguji route di Postman.

   **GET** - Menampilkan data catatan
   ![image](https://github.com/user-attachments/assets/c7df5905-31cb-4e8d-8d9a-52f18014d918)

   **POST** - Menambah data catatan
   ![image](https://github.com/user-attachments/assets/0288d55e-7fa4-4d2b-a67d-75bf1d61ab27)

   **PUT** - Mengubah data catatan (data dengan id 1)
   ![image](https://github.com/user-attachments/assets/94dc7915-cf7d-43e3-8526-36f997c75691)

   **DELETE** - Menghapus data catatan (data dengan id 2)
   ![image](https://github.com/user-attachments/assets/286ae64a-8b1e-4316-9f15-0c030d9744f4)

7. Penanganan error

   **ID Tidak Ditemukan**
   ![image](https://github.com/user-attachments/assets/b14c0bec-b700-4c6c-8b23-41f43b2ccdee)

   **Field yang harus diisi** - (mengosongkan field judul)
   ![image](https://github.com/user-attachments/assets/eae71402-d6c1-4dde-b44f-9a1ecb6003e0)

### Daftar Rute API
1. **GET**  *http:localhost:3000/notes* (untuk menampilkan data)
2. **POST**  *http:localhost:3000/add-notes* (untuk membuat data baru)
3. **PUT**  *http:localhost:3000/update-notes/:id* (untuk mengupdate data)
4. **DELETE**  *http:localhost:3000/delete-notes/:id* (untuk menghapus data)

### Catatan
- Semua catatan disimpan sementara di memori (akan hilang setelah server dimatikan).
- Validasi dilakukan agar setiap catatan memiliki judul dan body.
- Log rute akan tersimpan di terminal
  ![image](https://github.com/user-attachments/assets/e5caf2ab-73ec-4094-b889-9ef10d8b6a1d)


