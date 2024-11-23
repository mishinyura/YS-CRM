const main = () => {
    const quiz = new Quiz()
    quiz.mainSelect.addEventListener('change', quiz.createSubcat)
    if (quiz.subSelect) {
        quiz.subSelect.addEventListener('change', quiz.createQuiz)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main()
})

