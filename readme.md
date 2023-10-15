
# Dokumentasi Repositori Backend Express dan MongoDB

Repositori ini adalah backend aplikasi manajemen tugas (to-do list) yang dibangun dengan menggunakan Node.js, Express, dan MongoDB. Repositori ini menyediakan beberapa endpoint CRUD (Create, Read, Update, Delete) untuk mengelola daftar tugas.

## Daftar Isi

- [Instalasi](#instalasi)
- [Menjalankan Server](#menjalankan-server)
- [Endpoint API](#endpoint-api)
  - [GET /todos](#get-todos)
  - [GET /todo/:id](#get-todo-id)
  - [POST /todo](#post-todo)
  - [PUT /todo/:id](#put-todo-id)
  - [DELETE /todo/:id](#delete-todo-id)
- [Contoh Penggunaan](#contoh-penggunaan)
- [Lisensi](#lisensi)

## Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/dyahnrchls/todolist-be.git
   ```

2. Masuk ke direktori repositori:

   ```bash
   cd todolist-be
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

4. Pastikan Anda telah menginstal MongoDB dan konfigurasikan koneksi ke MongoDB dalam file `.env`.

## Menjalankan Server

Untuk menjalankan server, gunakan perintah berikut:

```bash
npm start
```

Server akan berjalan di `http://localhost:3000` secara default. Anda dapat mengonfigurasi port dalam file `.env` jika diperlukan.

## Endpoint API

Berikut adalah daftar endpoint API yang tersedia:

### GET /todos

**Deskripsi:** Endpoint ini digunakan untuk menampilkan seluruh daftar tugas.

**Request:**

- **Metode:** GET
- **URL:** `/todos`

**Response:**

- **Status 200 OK:** Mengembalikan daftar seluruh tugas dalam format JSON.
- **Contoh Respons Sukses:**

  ```json
  [
    {
      "_id": "1",
      "name": "Mengganti lampu yang rusak",
      "status": "active"
    },
    {
      "_id": "2",
      "name": "Membeli bahan makanan",
      "status": "completed"
    }
  ]
  ```

### GET /todo/:id

**Deskripsi:** Endpoint ini digunakan untuk menampilkan satu tugas berdasarkan ID tertentu.

**Request:**

- **Metode:** GET
- **URL:** `/todo/:id`
- **Parameter URL:** `id` (ID tugas yang dicari)

**Response:**

- **Status 200 OK:** Mengembalikan tugas yang sesuai dengan ID dalam format JSON.
- **Status 404 Not Found:** Jika ID tidak ditemukan.

### POST /todo

**Deskripsi:** Endpoint ini digunakan untuk menambahkan tugas baru.

**Request:**

- **Metode:** POST
- **URL:** `/todo`
- **Body Request:** Data tugas yang akan ditambahkan dalam format JSON.
- **Contoh Body Request:**

  ```json
  {
    "task": "Menyelesaikan laporan proyek",
    "completed": false
  }
  ```

**Response:**

- **Status 201 Created:** Jika tugas berhasil ditambahkan.
- **Status 400 Bad Request:** Jika data yang dikirim tidak valid.

### PUT /todo/:id

**Deskripsi:** Endpoint ini digunakan untuk mengubah tugas berdasarkan ID tertentu.

**Request:**

- **Metode:** PUT
- **URL:** `/todo/:id`
- **Parameter URL:** `id` (ID tugas yang akan diubah)
- **Body Request:** Data tugas yang akan diubah dalam format JSON.
- **Contoh Body Request:**

  ```json
  {
    "task": "Menyelesaikan laporan proyek",
    "completed": true
  }
  ```

**Response:**

- **Status 200 OK:** Jika tugas berhasil diubah.
- **Status 404 Not Found:** Jika ID tidak ditemukan.
- **Status 400 Bad Request:** Jika data yang dikirim tidak valid.

### DELETE /todo/:id

**Deskripsi:** Endpoint ini digunakan untuk menghapus tugas berdasarkan ID tertentu.

**Request:**

- **Metode:** DELETE
- **URL:** `/todo/:id`
- **Parameter URL:** `id` (ID tugas yang akan dihapus)

**Response:**

- **Status 204 No Content:** Jika tugas berhasil dihapus.
- **Status 404 Not Found:** Jika ID tidak ditemukan.

## Contoh Penggunaan

Berikut adalah contoh penggunaan endpoint API dengan menggunakan perangkat lunak seperti [Postman](https://www.postman.com/) atau [curl](https://curl.se/):

- Mendapatkan seluruh tugas: `GET http://localhost:3000/todos`
- Mendapatkan tugas berdasarkan ID: `GET http://localhost:3000/todo/:id`
- Menambahkan tugas baru: `POST http://localhost:3000/todo`
- Mengubah tugas berdasarkan ID: `PUT http://localhost:3000/todo/:id`
- Menghapus tugas berdasarkan ID: `DELETE http://localhost:3000/todo/:id`

Pastikan Anda mengganti `:id` dengan ID yang sesuai dalam penggunaan praktis.

## Lisensi

Dokumentasi ini dilisensikan di bawah [Lisensi MIT](LICENSE.md).