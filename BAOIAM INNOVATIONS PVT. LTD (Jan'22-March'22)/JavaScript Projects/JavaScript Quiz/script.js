const questions = [
    {
      question: "1. What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
        { text: "Berlin", correct: false },
      ],
    },
    {
      question: "2. What is the tallest mountain in the world?",
      answers: [
        { text: "Mount Everest", correct: true },
        { text: "Mount Kilimanjaro", correct: false },
        { text: "Mount Denali", correct: false },
        { text: "Mount Fuji", correct: false },
      ],
    },
    {
      question: "3. What is the capital of Japan?",
      answers: [
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Bangkok", correct: false },
      ],
    },
    {
        question: "4. What is the after 5?",
        answers: [
          { text: "6", correct: true },
          { text: "Mount Kilimanjaro", correct: false },
          { text: "Mount Denali", correct: false },
          { text: "Mount Fuji", correct: false },
        ],
      },
  ];
  
  const questionContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit-button");
  
  let currentQuestionIndex = 0;
  let timeLeft = 5; // Set the initial time for each question to 10 seconds
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <h2>${currentQuestion.question}</h2>
      ${currentQuestion.answers
        .map(
          (answer) =>
            `<button class="answer-button">${answer.text}</button>`
        )
        .join("")}
      <div id="time-left">Time left: ${timeLeft} seconds</div>
    `;
  
    // Set up the timer for this question
    const timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById(
        "time-left"
      ).innerHTML = `Time left: ${timeLeft} seconds`;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        currentQuestionIndex++;
        timeLeft = 5; // 
        displayQuestion();
      }
    }, 1000);
  
    // Add event listeners to the answer buttons
    const answerButtons = document.getElementsByClassName("answer-button");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].addEventListener("click", () => {
        clearInterval(timerInterval);
        if (currentQuestion.answers[i].correct) {
          alert("Correct!");
        } else {
          alert("Incorrect.");
        }
        currentQuestionIndex++;
        timeLeft = 5; // 
        displayQuestion();
      });
    }
  }
  
  displayQuestion();
  
  submitButton.addEventListener("click", () => {
    // Code to submit the quiz
  });
 // Keep track of the current question index
  document.getElementById("skip-button").addEventListener("click", skipQuestion);
  
function skipQuestion() {
  // Code to skip the current question and move on to the next question
  currentQuestionIndex++; // Move on to the next question
  displayQuestion(currentQuestionIndex); // Display the next question
}

 
function myFunction() {
    if (confirm("Do you want to go to the new page?")) {
      window.location = "blank.html";
    }
  }