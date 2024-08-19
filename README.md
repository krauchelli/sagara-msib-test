# sagara-msib-test

Backend Project-based Test

Deskripsi
Anda diminta untuk mengembangkan backend untuk sistem manajemen inventaris sebuah toko baju. Sistem ini harus dapat menangani pembaruan stok baju, penambahan baju baru, dan pencarian baju berdasarkan warna dan ukuran.

Spesifikasi (WAJIB)
- Sistem harus dapat menangani operasi CRUD untuk baju.
- Setiap baju memiliki atribut warna, ukuran, harga, dan stok.
- Sistem harus dapat mencari baju berdasarkan warna dan ukuran.
- Sistem harus dapat menambahkan stok baju.
- Sistem harus dapat mengurangi stok baju.
- Sistem harus dapat menampilkan semua baju yang tersedia.

Spesifikasi (Optional, mendapat nilai tambahan jika dikerjakan)
- Sistem dapat menampilkan semua baju yang stoknya habis.
- Sistem dapat menampilkan semua baju yang stoknya kurang dari 5.

Tech Stack
Dibebaskan untuk menggunakan tech stack apapun yang menurut Anda cocok untuk menyelesaikan tugas ini. Recommended stack: Node.js, Express.js, MongoDB or Go, Gin/Echo, Gorm, PostgreSQL.

Key points
- Penerapan SOLID Principles menjadi nilai plus.
- Penerapan unit testing menjadi nilai plus.
- Penerapan Depedency Injection menjadi nilai plus.

Deliverables
Silakan fork repository ini dan submit link repository hasil pengerjaan Anda ke https://bit.ly/study-case-backend-developer-msib

## Tech Stack yang digunakan
- Express.js
- PostgreSQL
- Prisma ORM

## Struktur Utama Folder
- [**controllers**](https://github.com/krauchelli/sagara-msib-test/tree/main/controllers)  : Berisi logika yang melakukan handling terhadap request dan response.
- [**prisma**](https://github.com/krauchelli/sagara-msib-test/tree/main/prisma)            : Berisi Skema ORM Prisma dan file migration.
- [**queries**](https://github.com/krauchelli/sagara-msib-test/tree/main/queries)          : Berisi fungsi-fungsi kueri database.
- [**routes**](https://github.com/krauchelli/sagara-msib-test/tree/main/routes)            : Berisi route yang didefinisikan untuk API.
- [**services**](https://github.com/krauchelli/sagara-msib-test/tree/main/services)        : Berisi business logic dan fungsi service yang bertugas sebagai penengah antara controllers dan queries.


## Panduan Instalasi
1. Clone repositori ini:
    ```sh
    git clone https://github.com/krauchelli/sagara-msib-test.git
    cd sagara-msib-test
    ```

2. Install dependencies yang dibutuhkan:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Buat file [`.env`] dengan isi: 
    ```env
    HOST=localhost
    PORT=3000
    DATABASE_URL=[`url database`]
    ```

4. Set up Prisma:
    ```sh
    npx prisma generate
    ```

5. Set up Prisma Migrate: 
    ```sh
    npx prisma migrate dev
    ```

## Menjalankan Aplikasi
```sh
npm run dev
```

## Daftar Endpoint yang digunakan
1. Get All Clothes
    URL: /clothes
    Method: GET
    Response:
   ```json
   [
        {
            "id": 1,
            "name": "Shirt",
            "color": "Red",
            "size": "M",
            "price": 100,
            "quantity": 10
        }
    ]
    ```

3. Get One Clothes Item
    URL: /clothes/:id
    Method: GET
    Response:
   ```json
   [
        {
            "id": 1,
            "name": "Shirt",
            "color": "Red",
            "size": "M",
            "price": 100,
            "quantity": 10
        }
    ]
    ```

5. Create a New Clothes Item
    URL: /clothes
    Method: POST
    Request Body:
   ```json
   [
        {
            "name": "Shirt",
            "color": "Red",
            "size": "M",
            "price": 100,
            "quantity": 10
        }
    ]
    ```

7. Update a Clothes Item
    URL: /clothes/:id
    Method: PUT
    Request Body:
   ```json
   [
        {
            "name": "Shirt",
            "color": "Red",
            "size": "M",
            "price": 100,
            "quantity": 10
        }
    ]
    ```

9. Delete a Clothes Item
    URL: /clothes/:id
    Method: DELETE
    Response: 204 No Content

