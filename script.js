let currentQuestion = 1;

function nextQuestion(questionNumber) {
    const current = document.getElementById(`question-${questionNumber}`);
    const next = document.getElementById(`question-${questionNumber + 1}`);
    if (!current.querySelector('input[type="radio"]:checked')) {
        alert("Please select an answer before proceeding.");
        return;
    }
    current.style.display = "none";
    next.style.display = "block";
    currentQuestion++;
}

function calculateResult() {
    const answers = [];
    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            answers.push(selectedAnswer.value);
        }
    }

    if (answers.length < 10) {
        alert("Please answer all questions.");
        return;
    }

    let genre = determineGenre(answers);
    alert(`Your recommended genre is: ${genre}`);
}

function determineGenre(answers) {
    let score = {A: 0, B: 0, C: 0, D: 0};
    
    answers.forEach(answer => {
        score[answer]++;
    });

    let maxScore = Math.max(score.A, score.B, score.C, score.D);
    if (score.A === maxScore) return "Fantasy/Adventure";
    if (score.B === maxScore) return "Mystery/Thriller";
    if (score.C === maxScore) return "Drama/Romance";
    if (score.D === maxScore) return "Non-fiction/Knowledge";
}
