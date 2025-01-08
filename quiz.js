let currentQuestion = 1;

function nextQuestion(questionNumber) {
    const current = document.getElementById(`question-${questionNumber}`);
    const next = document.getElementById(`question-${questionNumber + 1}`);
    
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

function calculateResult() {
    let result = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    // Menghitung jumlah jawaban untuk setiap pilihan
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            result[selected.value]++;
        }
    }

    // Menentukan genre berdasarkan hasil
    let genre = '';
    if (result.A >= result.B && result.A >= result.C && result.A >= result.D) {
        genre = 'Fantasi';
    } else if (result.B >= result.A && result.B >= result.C && result.B >= result.D) {
        genre = 'Thriller/Detektif';
    } else if (result.C >= result.A && result.C >= result.B && result.C >= result.D) {
        genre = 'Drama/Romansa';
    } else {
        genre = 'Non-fiksi/Biografi';
    }

    // Menampilkan hasil
    const resultText = `Genre buku yang cocok untukmu: ${genre}`;
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('result').style.display = 'block';
    document.getElementById('quiz-form').style.display = 'none';
}
