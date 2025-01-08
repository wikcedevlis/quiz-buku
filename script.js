document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Cek apakah semua pertanyaan sudah dijawab
    let answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        // Tambahkan pertanyaan lainnya dengan cara yang sama
    };

    // Cek apakah ada jawaban yang belum dipilih
    if (!answers.q1) {
        alert("Pilih satu dunia untuk melanjutkan.");
        return;
    }

    let score = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    // Hitung skor berdasarkan jawaban
    Object.keys(answers).forEach(function(question) {
        score[answers[question]]++;
    });

    // Tentukan genre berdasarkan skor
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

    document.getElementById('result').textContent = `Genre buku yang cocok untukmu adalah: ${genre}`;
});
