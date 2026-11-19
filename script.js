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

// --- Fitur 1: Tombol mode gelap (Pelajaran 11: sekarang diingat browser) ---
const tombolTema = document.getElementById("tombol-tema");

// Fungsi untuk memasang mode gelap (true) atau mode terang (false)
function pasangTema(gelap) {
    if (gelap) {
        document.body.classList.add("gelap");
        tombolTema.textContent = "☀️ Mode Terang";
    } else {
        document.body.classList.remove("gelap");
        tombolTema.textContent = "🌙 Mode Gelap";
    }
}

// Saat halaman dibuka: cek pilihan yang tersimpan sebelumnya
const temaTersimpan = localStorage.getItem("tema");
pasangTema(temaTersimpan === "gelap");

// Saat tombol diklik: balik mode, lalu simpan pilihannya
tombolTema.addEventListener("click", function () {
    const sedangGelap = document.body.classList.contains("gelap");
    pasangTema(!sedangGelap);

    if (!sedangGelap) {
        localStorage.setItem("tema", "gelap");
    } else {
        localStorage.setItem("tema", "terang");
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


// ===== Pelajaran 11: Array dan perulangan =====

// Array: satu variabel berisi banyak data, ditulis dalam kurung siku [ ]
const daftarHobi = [
    "Membaca buku",
    "Menulis cerita",
    "Berjalan-jalan di alam",
    "Belajar coding"
];

// .length = jumlah isi array
console.log("Jumlah hobi:", daftarHobi.length);
console.log("Hobi pertama:", daftarHobi[0]);   // urutan dimulai dari 0

// Perulangan for: mengulang perintah untuk setiap isi array
for (let i = 0; i < daftarHobi.length; i++) {
    console.log("Hobi ke-" + (i + 1) + ": " + daftarHobi[i]);
}

// forEach: cara lain mengulang isi array, lalu membuat <li> untuk setiap hobi
const elemenDaftarHobi = document.getElementById("daftar-hobi");

daftarHobi.forEach(function (hobi) {
    const li = document.createElement("li");   // buat elemen <li> baru
    li.textContent = hobi;                     // isi teksnya
    elemenDaftarHobi.appendChild(li);          // masukkan ke dalam <ul>
});

// Tampilkan jumlah hobi di halaman
document.getElementById("jumlah-hobi").textContent =
    "Saya punya " + daftarHobi.length + " hobi:";


// ===== Pelajaran 12: Object dan fetch API =====

// Object: satu variabel berisi beberapa data yang masing-masing punya nama
const profil = {
    nama: "Lulu",
    status: "pelajar",
    target: "Laravel",
    jumlahHobi: daftarHobi.length
};

console.log(profil);                 // seluruh isi object
console.log(profil.nama);            // ambil satu data dengan titik: "Lulu"
console.log("Target belajar " + profil.nama + ": " + profil.target);

// fetch: mengambil data dari server lain lewat internet
const teksFakta = document.getElementById("teks-fakta");
const tombolFakta = document.getElementById("tombol-fakta");

async function ambilFaktaKucing() {
    teksFakta.textContent = "Memuat fakta kucing...";
    tombolFakta.disabled = true;     // matikan tombol selama menunggu

    try {
        const respons = await fetch("https://catfact.ninja/fact");
        const data = await respons.json();   // ubah jawaban server jadi object
        console.log("Data dari server:", data);

        teksFakta.textContent = data.fact;
    } catch (error) {
        console.log("Gagal mengambil data:", error);
        teksFakta.textContent = "Maaf, fakta kucing gagal dimuat. Cek koneksi internet lalu coba lagi.";
    }

    tombolFakta.disabled = false;    // nyalakan tombol lagi
}

ambilFaktaKucing();                                      // ambil satu fakta saat halaman dibuka
tombolFakta.addEventListener("click", ambilFaktaKucing); // ambil fakta baru saat tombol diklik
