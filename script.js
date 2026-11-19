// ===== Pelajaran 9: JavaScript dasar =====

// 1. Menampilkan pesan di Console (untuk mengecek kode)
console.log("Halo dari script.js!");

// 2. Variabel: tempat menyimpan data
const nama = "Lulu";                 // const = nilainya tidak akan diubah
let jam = new Date().getHours();     // let = nilainya boleh diubah
console.log("Sekarang jam:", jam);

// 3. Percabangan if: memilih berdasarkan kondisi
let waktu;
if (jam < 11) {
    waktu = "Selamat pagi";
} else if (jam < 15) {
    waktu = "Selamat siang";
} else if (jam < 18) {
    waktu = "Selamat sore";
} else {
    waktu = "Selamat malam";
}

// 4. Fungsi: kumpulan perintah yang bisa dipakai berulang
function buatSapaan(salam, pemilik) {
    return salam + "! Selamat datang di website " + pemilik + " 👋";
}

// 5. Mengubah isi halaman (DOM)
const elemenSapaan = document.getElementById("sapaan");
elemenSapaan.textContent = buatSapaan(waktu, nama);
