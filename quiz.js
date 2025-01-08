let currentQuestion = 1;

function nextQuestion(questionNumber) {
    const current = document.getElementById(`question-${questionNumber}`);
    const next = document.getElementById(`question-${questionNumber + 1}`);
    console.log(`Menampilkan pertanyaan ${questionNumber}`);
    
    // Pastikan sudah memilih jawaban
    if (!current.querySelector('input[type="radio"]:checked')) {
        alert("Please select an answer before proceeding.");
        return;
    }

    // Menyembunyikan pertanyaan saat ini dan menampilkan pertanyaan berikutnya
    current.style.display = "none";
    if (next) { 
        next.style.display = "block";
    }

    currentQuestion++;
}
