document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Menghentikan form agar tidak reload halaman

    let selectedOption = document.querySelector('input[name="world"]:checked');
    if (selectedOption) {
        // Menampilkan hasil berdasarkan pilihan pengguna
        alert("Kamu adalah seorang petualang dalam dunia " + selectedOption.value + "!");
    } else {
        alert("Pilih satu dunia untuk melanjutkan.");
    }
});


