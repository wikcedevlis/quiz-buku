document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let selectedOption = document.querySelector('input[name="world"]:checked');
    if (selectedOption) {
        alert("Kamu adalah seorang petualang dalam dunia " + selectedOption.value + "!");
    } else {
        alert("Pilih satu dunia untuk melanjutkan.");
    }
});

