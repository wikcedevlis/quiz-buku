function submitQuiz() {
    var form = document.getElementById('quizForm');
    var result = document.getElementById('result');
    var answers = form.querySelectorAll('input[type="radio"]:checked');
    
    if (answers.length < 1) {
        result.innerHTML = 'Silakan jawab semua pertanyaan!';
        return;
    }

    var score = 0;
    answers.forEach(function(answer) {
        if (answer.value === 'A') {
            score += 1;
        } else if (answer.value === 'B') {
            score += 2;
        } else if (answer.value === 'C') {
            score += 3;
        } else {
            score += 4;
        }
    });

    var finalResult = '';
    if (score <= 4) {
        finalResult = 'Kamu adalah seorang petualang dalam dunia fantasi!';
    } else if (score <= 6) {
        finalResult = 'Kamu seorang detektif misterius yang penuh rahasia!';
    } else if (score <= 8) {
        finalResult = 'Kamu adalah romantis sejati yang percaya pada cinta abadi!';
    } else {
        finalResult = 'Kamu adalah pengamat sejarah yang bijaksana!';
    }

    result.innerHTML = finalResult;
}
