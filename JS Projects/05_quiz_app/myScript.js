const question = document.getElementById("question");
const answerButtonsContainer = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

const questionsArray = [
    {
        question: "Capital of India is",
        options: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Delhi", correct: true },
            { text: "Noida", correct: false }
        ]
    },

    {
        question: "Prime Minister of India is",
        options: [
            { text: "Modi", correct: true },
            { text: "Rahul Gandhi", correct: false },
            { text: "Soniya Gandhi", correct: false },
            { text: "Salman Khan", correct: false }
        ]
    },

    {
        question: "Financial capital of India is",
        options: [
            { text: "Mumbai", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Delhi", correct: false },
            { text: "Noida", correct: false }
        ]
    },

    {
        question: "Capital of UP is",
        options: [
            { text: "Mumbai", correct: false },
            { text: "Lucknow", correct: true },
            { text: "Delhi", correct: false },
            { text: "Noida", correct: false }
        ]
    }
];

let currentQuestionNumber = 0;
let score = 0;

function showQuestion() {
    question.innerText = questionsArray[currentQuestionNumber].question;
}

function showAnswer() {
    answerButtonsContainer.innerHTML = "";

    questionsArray[currentQuestionNumber].options.forEach(element => {
        const optionButton = document.createElement("button");

        optionButton.innerText = element.text;

        optionButton.classList.add(
            "w-full",
            "border",
            "border-gray-300",
            "p-2",
            "my-2",
            "text-left",
            "text-white",
            "rounded",
            "cursor-pointer",
            "hover:bg-slate-700"
        );

        answerButtonsContainer.appendChild(optionButton);

        handleAnswerClick(optionButton, element);
    });
}

function handleAnswerClick(optionButton, element) {
    optionButton.addEventListener("click", function () {

        if (element.correct === true) {
            optionButton.classList.add("bg-green-700");
            score++;
        } else {
            optionButton.classList.add("bg-red-700");
        }

        optionButton.classList.remove("hover:bg-slate-700");

        disableAnswerButtons();

        nextBtn.classList.remove("hidden");
    });
}

function disableAnswerButtons() {
    for (let index = 0; index < answerButtonsContainer.children.length; index++) {

        answerButtonsContainer.children[index].disabled = true;

        answerButtonsContainer.children[index].classList.remove("cursor-pointer");

        answerButtonsContainer.children[index].classList.add("cursor-not-allowed");
    }
}

function nextQuestion() {

    answerButtonsContainer.innerHTML = "";

    currentQuestionNumber++;

    if (currentQuestionNumber < questionsArray.length) {

        showQuestion();
        showAnswer();

        nextBtn.classList.add("hidden");

    } else {

        answerButtonsContainer.innerHTML = "";

        question.innerText =
            `Quiz Finished! Your score is ${score}/${questionsArray.length}`;

        nextBtn.innerText = "Restart Quiz";
    }
}

function restartQuiz() {

    currentQuestionNumber = 0;
    score = 0;

    nextBtn.innerText = "Next";
    nextBtn.classList.add("hidden");

    showQuestion();
    showAnswer();
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !nextBtn.classList.contains("hidden")) {

        if (nextBtn.innerText === "Restart Quiz") {
            restartQuiz();
        } else {
            nextQuestion();
        }
    }
});

showQuestion();
showAnswer();
