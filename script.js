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


// ===== Pelajaran 10: Event =====

// --- Fitur 1: Tombol mode gelap ---
const tombolTema = document.getElementById("tombol-tema");

tombolTema.addEventListener("click", function () {
    // Pasang class "gelap" di <body> kalau belum ada, lepas kalau sudah ada
    document.body.classList.toggle("gelap");

    // Ganti tulisan tombol sesuai mode yang sedang aktif
    if (document.body.classList.contains("gelap")) {
        tombolTema.textContent = "☀️ Mode Terang";
    } else {
        tombolTema.textContent = "🌙 Mode Gelap";
    }
});

// --- Fitur 2: Form kontak ---
const formKontak = document.getElementById("form-kontak");
const pesanTerimaKasih = document.getElementById("pesan-terima-kasih");

formKontak.addEventListener("submit", function (event) {
    // Cegah halaman reload (perilaku bawaan form saat dikirim)
    event.preventDefault();

    // Ambil isi kolom yang diketik pengunjung
    const namaPengirim = document.getElementById("nama").value;
    const keperluan = document.getElementById("keperluan").value;

    // Tampilkan pesan terima kasih
    pesanTerimaKasih.textContent =
        "Terima kasih, " + namaPengirim + "! Pesanmu tentang \"" + keperluan + "\" sudah diterima.";

    // Kosongkan form lagi
    formKontak.reset();
});
