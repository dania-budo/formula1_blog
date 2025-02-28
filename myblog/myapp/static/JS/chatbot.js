let questions = [
    {
        question: "Who won the 2021 Formula 1 World Championship?",
        options: {
            a: "Max Verstappen",
            b: "Lewis Hamilton",
            c: "Valtteri Bottas"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Max Verstappen won the 2021 championship.",
        incorrectResponse: "Incorrect! The correct answer is Max Verstappen."
    },
    {
        question: "Which team won the 2021 Formula 1 Constructors' Championship?",
        options: {
            a: "Mercedes-AMG Petronas Formula One Team",
            b: "Red Bull Racing",
            c: "Scuderia Ferrari"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Mercedes-AMG Petronas Formula One Team won the 2021 Constructors' Championship.",
        incorrectResponse: "Incorrect! The correct answer is Mercedes-AMG Petronas Formula One Team."
    },
    {
        question: "Who holds the record for the most Formula 1 World Championships?",
        options: {
            a: "Lewis Hamilton",
            b: "Michael Schumacher",
            c: "Ayrton Senna"
        },
        correctAnswer: "b",
        correctResponse: "Correct! Michael Schumacher holds the record with seven World Championships.",
        incorrectResponse: "Incorrect! The correct answer is Michael Schumacher."
    },
    {
        question: "Which Grand Prix is known as the 'Jewel in the Crown' of Formula 1?",
        options: {
            a: "Monaco Grand Prix",
            b: "Singapore Grand Prix",
            c: "Italian Grand Prix"
        },
        correctAnswer: "a",
        correctResponse: "Correct! The Monaco Grand Prix is often referred to as the 'Jewel in the Crown' of Formula 1.",
        incorrectResponse: "Incorrect! The correct answer is Monaco Grand Prix."
    },
    {
        question: "What is the official safety car of Formula 1?",
        options: {
            a: "Mercedes-AMG GT R",
            b: "Audi R8",
            c: "BMW M4"
        },
        correctAnswer: "a",
        correctResponse: "Correct! The official safety car of Formula 1 is the Mercedes-AMG GT R.",
        incorrectResponse: "Incorrect! The correct answer is Mercedes-AMG GT R."
    },
    {
        question: "Which driver is known as 'The Iceman'?",
        options: {
            a: "Kimi Räikkönen",
            b: "Fernando Alonso",
            c: "Sebastian Vettel"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Kimi Räikkönen is known as 'The Iceman'.",
        incorrectResponse: "Incorrect! The correct answer is Kimi Räikkönen."
    },
    {
        question: "Which race is known as the 'Home of British Motorsport'?",
        options: {
            a: "Monaco Grand Prix",
            b: "British Grand Prix",
            c: "German Grand Prix"
        },
        correctAnswer: "b",
        correctResponse: "Correct! The British Grand Prix is known as the 'Home of British Motorsport'.",
        incorrectResponse: "Incorrect! The correct answer is British Grand Prix."
    },
    {
        question: "Which Formula 1 circuit is known for its 'Eau Rouge' corner?",
        options: {
            a: "Monza",
            b: "Spa-Francorchamps",
            c: "Silverstone"
        },
        correctAnswer: "b",
        correctResponse: "Correct! The Spa-Francorchamps circuit is known for its 'Eau Rouge' corner.",
        incorrectResponse: "Incorrect! The correct answer is Spa-Francorchamps."
    },
    {
        question: "Which team won the most Constructors' Championships in the 2000s?",
        options: {
            a: "Ferrari",
            b: "Mercedes",
            c: "Red Bull Racing"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Ferrari won the most Constructors' Championships in the 2000s.",
        incorrectResponse: "Incorrect! The correct answer is Ferrari."
    }
];



let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join(' ');
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    
    botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.question} ${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userResponse = userInput.value.toLowerCase();
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    
    if (userResponse !== 'a' && userResponse !== 'b' && userResponse !== 'c') {
        userMessage.innerHTML = `<strong>Chatbot:</strong> Please enter a valid option (a, b, or c).`;
        chatContainer.appendChild(userMessage);
        userInput.value = ""; // Clear the input field
        return; // Exit the function
    }
    
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = "<strong>Chatbot:</strong> ";

    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        let finalMessage = document.createElement("div");
        finalMessage.classList.add("message");
        finalMessage.innerHTML = "<strong>Chatbot:</strong> You have completed the Formula 1 quiz.";
        chatContainer.appendChild(finalMessage);
        chatForm.style.display = "none"; // Hide the input form
    }

    userInput.value = "";
});
