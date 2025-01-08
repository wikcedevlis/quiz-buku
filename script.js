function nextQuestion(questionNumber) {
    let selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    
    if (!selectedAnswer) {
        alert("Pilih salah satu jawaban untuk melanjutkan.");
        return;
    }

    // Sembunyikan pertanyaan saat ini
    document.getElementById(`question-${questionNumber}`).style.display = 'none';

    // Tentukan genre berdasarkan jawaban
    let score = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    // Menyimpan jawaban
    let answer = selectedAnswer.value;
    score[answer]++;

    // Jika ada pertanyaan berikutnya, tampilkan
    if (document.getElementById(`question-${questionNumber + 1}`)) {
        document.getElementById(`question-${questionNumber + 1}`).style.display = 'block';
    } else {
        // Jika pertanyaan terakhir, tampilkan hasil
        let genre = '';
        if (score.A > score.B && score.A > score.C && score.A > score.D) {
            genre = 'Fantasi atau Petualangan';
        } else if (score.B > score.A && score.B > score.C && score.B > score.D) {
            genre = 'Misteri atau Thriller';
        } else if (score.C > score.A && score.C > score.B && score.C > score.D) {
            genre = 'Drama atau Romansa';
        } else {
            genre = 'Non-Fiksi atau Sejarah';
        }

        document.getElementById('result').style.display = 'block';
        document.getElementById('result').textContent = `Genre buku yang cocok untukmu adalah: ${genre}`;
    }
}
