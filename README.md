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


## Panduan Instalasi
1. Clone repositori ini:
    ```sh
    git clone https://github.com/yourusername/sagara-msib-test.git
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