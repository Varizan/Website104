# Website Angkatan — Panduan Kontribusi

## 1. Yang harus disiapkan

Sebelum mulai, pastikan sudah punya:

* Akun GitHub
* Git
* VS Code
* Akses/collaborator ke repository ini

Download Git:
https://git-scm.com/

---

# 2. Pertama kali mengambil project

Kalau belum pernah mengambil repository ini ke laptop:

1. Buka repository GitHub.
2. Klik **Code**.
3. Pilih **HTTPS**.
4. Copy URL repository.
5. Buka VS Code.
6. Tekan `Ctrl + Shift + P`.
7. Cari **Git: Clone**.
8. Paste URL repository.
9. Pilih folder untuk menyimpan project.
10. Klik **Open** setelah proses selesai.

Setelah itu project sudah ada di laptop kalian.

---

# 3. Sebelum mulai ngoding

**SELALU lakukan ini sebelum mulai bekerja.**

Buka terminal VS Code:

```bash
git checkout main
git pull
```

Ini bertujuan supaya project di laptop kalian sudah mengikuti versi terbaru di GitHub.

---

# 4. Buat branch sendiri

Jangan bekerja langsung di `main`.

Buat branch sesuai pekerjaan yang sedang dilakukan.

Contoh:

```bash
git checkout -b galeri
```

atau:

```bash
git checkout -b halaman-profil
```

atau:

```bash
git checkout -b fix-navbar
```

Gunakan nama branch yang jelas dan berhubungan dengan pekerjaan.

Contoh yang bagus:

```text
galeri
homepage
yearbook
profil-kelas
fix-navbar
responsive-mobile
```
# 5. Mulai mengerjakan

Setelah branch dibuat, silakan edit file seperti biasa menggunakan VS Code.

Contoh:

```text
index.html
style.css
script.js
pages/
images/
```

Kerjakan **bagian yang sudah dibagikan kepada kalian**.

Jangan mengubah bagian orang lain tanpa koordinasi.

---

# 6. Setelah selesai mengerjakan

Simpan semua file terlebih dahulu.

Kemudian buka terminal:

```bash
git status
```

Periksa file apa saja yang berubah.

Jika sudah benar:

```bash
git add .
```

Kemudian buat commit:

```bash
git commit -m "Membuat halaman galeri"
```

Gunakan pesan commit yang menjelaskan apa yang kalian lakukan.

Contoh:

```text
Membuat halaman galeri
Menambahkan navbar
Memperbaiki tampilan mobile
Menambahkan foto kelas
Memperbaiki bug yearbook
```
INI WAJIB YAA

Jangan menggunakan commit message seperti:

```text
update
test
coba
hehe
fix
```

---

# 7. Push ke GitHub

Setelah commit:

```bash
git push -u origin NAMA-BRANCH
```

Contoh:

```bash
git push -u origin galeri
```

Kalau branch tersebut sudah pernah di-push sebelumnya, cukup:

```bash
git push
```

---

# 8. Membuat Pull Request

Setelah melakukan push, buka repository di GitHub.

Biasanya akan muncul tombol:

**Compare & pull request**

Klik tombol tersebut.

Pastikan:

```text
base: main
compare: branch-kalian
```

Contoh:

```text
base: main
compare: galeri
```

Kemudian klik:

**Create pull request**

Tulis secara singkat apa yang kalian kerjakan.

Contoh:

```text
Membuat halaman galeri untuk website angkatan.

- Menambahkan layout galeri
- Menambahkan foto
- Membuat responsive design
```

Setelah itu tunggu sampai pull request diperiksa.

---

# 9. Jangan langsung Merge Pull Request

Pull Request harus diperiksa terlebih dahulu.

Kalau kalian bukan orang yang bertugas melakukan merge, **jangan merge sendiri**.

Tunggu sampai orang yang bertanggung jawab mengatakan bahwa perubahan sudah aman untuk digabungkan.

---

# 10. Setelah Pull Request di-Merge

Setelah branch kalian berhasil di-merge ke `main`, update project lokal:

```bash
git checkout main
git pull
```

Sekarang `main` di laptop kalian sudah mengikuti versi terbaru.

---

# 11. Kalau mau mengerjakan sesuatu lagi

Disarankan membuat branch baru.

Contoh:

```bash
git checkout main
git pull
git checkout -b yearbook
```

Kemudian kerjakan seperti biasa.

---

# 12. Kalau muncul "conflict"

Jangan panik.

Git Conflict berarti ada dua orang yang mengubah bagian yang sama dan Git tidak tahu perubahan mana yang harus dipakai.

Contohnya:

```text
<<<<<<< HEAD
kode versi kamu
=======
kode versi teman
>>>>>>> main
```

Buka file tersebut dan tentukan kode mana yang benar.

Setelah conflict diselesaikan:

```bash
git add .
git commit -m "Menyelesaikan merge conflict"
```

Jika tidak yakin bagaimana menyelesaikannya, **jangan asal hapus kode**. Tanyakan kepada anggota yang mengerjakan bagian tersebut.

---

# 13. Perintah Git yang paling sering digunakan

### Melihat status

```bash
git status
```

### Mengambil perubahan terbaru

```bash
git pull
```

### Melihat branch

```bash
git branch
```

### Membuat branch baru

```bash
git checkout -b nama-branch
```

### Berpindah branch

```bash
git checkout nama-branch
```

### Menyiapkan perubahan

```bash
git add .
```

### Membuat commit

```bash
git commit -m "Pesan commit"
```

### Mengirim perubahan ke GitHub

```bash
git push
```

---

# 14. Workflow singkat

Kalau sudah terbiasa, cukup ingat alur ini:

```text
1. git checkout main
2. git pull
3. git checkout -b nama-pekerjaan
4. NGODING
5. git add .
6. git commit -m "apa yang dikerjakan"
7. git push -u origin nama-pekerjaan
8. Buat Pull Request di GitHub
9. Tunggu review
10. Merge ke main
```

---

# 15. Aturan Tim

### WAJIB

* Selalu gunakan branch sendiri.
* Selalu `git pull` sebelum mulai bekerja.
* Gunakan commit message yang jelas.
* Periksa perubahan sebelum melakukan push.
* Buat Pull Request untuk memasukkan perubahan ke `main`.
* Beri tahu anggota lain jika mengubah file yang sedang mereka kerjakan.

### JANGAN

* Jangan push langsung ke `main`.
* Jangan menghapus file orang lain tanpa izin.
* Jangan mengubah pekerjaan orang lain tanpa koordinasi.
* Jangan melakukan force push (`git push --force`) ke `main`.
* Jangan memasukkan password, API key, token, atau data rahasia ke repository.

---

# 16. Kalau Git Error

JANGAN langsung panik dan jangan asal mengetik perintah dari internet.

Copy pesan error-nya dan kirim ke grup.

Contoh:

```text
Git error:

[PASTE ERROR DI SINI]

Branch:
galeri

Yang baru saja saya lakukan:
git push
```

Dengan begitu anggota lain bisa membantu tanpa harus menebak-nebak masalahnya.

---

# TL;DR

Kalau lupa semuanya, ingat ini:

```bash
git checkout main
git pull
git checkout -b nama-pekerjaan

# NGODING

git add .
git commit -m "Jelaskan pekerjaan"
git push -u origin nama-pekerjaan
```

Setelah itu buka GitHub → **Pull Request** → tunggu review → **Merge**.

**Selamat ngoding dan jangan rusak `main`.**
