
const dataTulang = [
    {
        nama: "Tulang Tengkorak",
        latin: "Cranium",
        letak: "Bagian kepala",
        fungsi: "Melindungi otak dan membentuk struktur kepala."
    },
    {
        nama: "Tulang Selangka",
        latin: "Clavicula",
        letak: "Bagian bahu",
        fungsi: "Menghubungkan gelang bahu dengan rangka aksial."
    },
    {
        nama: "Tulang Belikat",
        latin: "Scapula",
        letak: "Bagian belakang bahu",
        fungsi: "Tempat perlekatan otot dan bagian dari gelang bahu."
    },
    {
        nama: "Tulang Dada",
        latin: "Sternum",
        letak: "Bagian tengah dada",
        fungsi: "Menjadi tempat melekatnya tulang rusuk sejati."
    },
    {
        nama: "Tulang Rusuk",
        latin: "Costae",
        letak: "Bagian dada",
        fungsi: "Melindungi organ di dalam rongga dada."
    },
    {
        nama: "Tulang Lengan Atas",
        latin: "Humerus",
        letak: "Antara bahu dan siku",
        fungsi: "Membantu pergerakan lengan atas."
    },
    {
        nama: "Tulang Pengumpil",
        latin: "Radius",
        letak: "Lengan bawah, sisi ibu jari",
        fungsi: "Membantu gerakan pergelangan dan rotasi lengan bawah."
    },
    {
        nama: "Tulang Hasta",
        latin: "Ulna",
        letak: "Lengan bawah, sisi kelingking",
        fungsi: "Membentuk bagian penting dari persendian siku."
    },
    {
        nama: "Tulang Paha",
        latin: "Femur",
        letak: "Paha",
        fungsi: "Menopang berat tubuh dan membantu berjalan."
    },
    {
        nama: "Tulang Kering",
        latin: "Tibia",
        letak: "Tungkai bawah bagian depan dan medial",
        fungsi: "Menopang sebagian besar berat tubuh pada tungkai bawah."
    },
    {
        nama: "Tulang Betis",
        latin: "Fibula",
        letak: "Tungkai bawah bagian lateral",
        fungsi: "Menstabilkan tungkai bawah dan pergelangan kaki."
    }
];

const daftar = document.getElementById("daftarTulang");

dataTulang.forEach((tulang, index) => {
    const tombol = document.createElement("button");
    tombol.textContent = tulang.nama;

    tombol.addEventListener("click", () => {
        tampilkanTulang(index);
    });

    daftar.appendChild(tombol);
});

function tampilkanTulang(index) {
    const tulang = dataTulang[index];

    document.getElementById("namaTulang").textContent =
        tulang.nama;

    document.getElementById("latin").textContent =
        tulang.latin;

    document.getElementById("letak").textContent =
        tulang.letak;

    document.getElementById("fungsi").textContent =
        tulang.fungsi;
}

// KUIS BIOLOGI
const soal = [
    {
        tanya: "Tulang yang terdapat pada lengan atas disebut?",
        pilihan: ["Femur", "Humerus", "Tibia", "Radius"],
        benar: "Humerus"
    },
    {
        tanya: "Nama Latin tulang paha adalah?",
        pilihan: ["Femur", "Fibula", "Ulna", "Scapula"],
        benar: "Femur"
    },
    {
        tanya: "Tulang pengumpil disebut?",
        pilihan: ["Ulna", "Radius", "Sternum", "Tibia"],
        benar: "Radius"
    },
    {
        tanya: "Tulang kering disebut?",
        pilihan: ["Fibula", "Humerus", "Tibia", "Femur"],
        benar: "Tibia"
    }
];

let nomor = 0;

function tampilkanSoal() {
    const pertanyaan = soal[nomor];

    document.getElementById("pertanyaan").textContent =
        pertanyaan.tanya;

    document.getElementById("hasil").textContent = "";

    const pilihan = document.getElementById("pilihan");
    pilihan.innerHTML = "";

    pertanyaan.pilihan.forEach(jawaban => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;

        tombol.onclick = () => {
            const hasil = document.getElementById("hasil");

            if (jawaban === pertanyaan.benar) {
                hasil.textContent = "Benar! Jawaban Anda tepat.";
                hasil.style.color = "green";
            } else {
                hasil.textContent =
                    "Belum tepat. Jawaban yang benar: " +
                    pertanyaan.benar;
                hasil.style.color = "red";
            }

            pilihan.querySelectorAll("button").forEach(b => {
                b.disabled = true;
            });
        };

        pilihan.appendChild(tombol);
    });
}

function soalBerikutnya() {
    nomor = (nomor + 1) % soal.length;
    tampilkanSoal();
}

tampilkanSoal();
