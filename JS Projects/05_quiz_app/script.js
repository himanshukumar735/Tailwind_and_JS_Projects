
const questionsArray = [
    {
        question: "Capital of India is",
        option: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Delhi", correct: true },
            { text: "Noida", correct: false }
        ]
    },

    {
        question: "Prime Minister of India is",
        option: [
            { text: "Modi", correct: true },
            { text: "Rahul Gandhi", correct: false },
            { text: "Soniya Gandhi", correct: false },
            { text: "Salman Khan", correct: false }
        ]
    },

    {
        question: "Financial capital of India is",
        option: [
            { text: "Mumbai", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Delhi", correct: false },
            { text: "Noida", correct: false }
        ]
    },

    {
        question: "Capital of UP is",
        option: [
            { text: "Mumbai", correct: false },
            { text: "Lucknow", correct: true },
            { text: "Delhi", correct: false },
            { text: "Noida", correct: false }
        ]
    }
]

const questionVar = document.getElementById("question");
const answerVar = document.getElementById("answer-buttons");
const nextVar = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;


function startQuiz(params) {
    currentQuestionIndex = 0;
    score = 0;
    nextVar.innerText = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questionsArray[currentQuestionIndex];
    console.log(`The index of current question is: ${currentQuestionIndex}`);
    questionVar.innerText = currentQuestion.question;

    currentQuestion.option.forEach(option => {
        let myButton = document.createElement("button");
        myButton.innerText = option.text;
        myButton.classList.add("w-full", "border", "p-2", "my-2", "text-left", "text-white");
        answerVar.appendChild(myButton);
        myButton.dataset.correct = option.correct;

        myButton.addEventListener("click", function () {
            nextVar.style.display = "block"
            if (option.correct === true) {
                console.log("You are right")
                myButton.classList.add("bg-green-500")
                score++;
                console.log(`The current score of the user is  ${score}`)
            }
            else {
                console.log("Wrong option choosen");
                myButton.classList.add("bg-red-500");
            }

            Array.from(answerVar.children).forEach(button => {
                button.disabled = true; // This freezes all options

                // Logic Bonus: If you want to show the correct answer even if they chose wrong
                if (button.dataset.correct === "true") {
                    button.classList.add("bg-green-500");
                }
            });
        })

    });
}

function resetState(params) {
    nextVar.style.display = "none";
    answerVar.innerHTML = "";
}

nextVar.addEventListener("click", () => {
    if (currentQuestionIndex < questionsArray.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

function handleNextButton(params) {
    currentQuestionIndex++;
    if (currentQuestionIndex<questionsArray.length) {
        showQuestion()
    } else {
        showScore()
    }
}

function showScore() {
    resetState();
    questionVar.innerHTML = `You scored ${score} out of ${questionsArray.length}`
    console.log(`user scored ${score}`)
    nextVar.innerText = "Play Again"
    nextVar.style.display = "block"; // Reset ke baad button dikhao
}

startQuiz()
