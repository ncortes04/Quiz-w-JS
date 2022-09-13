var ansBtnEl = document.getElementById('answer-btns')
var nextBtn = document.getElementById('next-btn')
var questionEl = document.getElementById('question')
var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-box')

/* it is important we define these as let variables becuase if not, they cannot be redefined */
let randoQuestions, currentQuestion
/* event.target calls whatever we clicked on */
function selectedAnswer(event) {
  var selectedButton = event.target
  /* correct varible created to check the correct varibale in questions array */
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  /* loops thought other buttons and sets class, it must be converted to an array to use the for each loop */
  Array.from(ansBtnEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  /* checks if we have more questions and if we are on the last question we restart the quiz and removes the hidden class */
  if (randoQuestions.length > currentQuestion + 1) {
    nextBtn.classList.remove('hidden')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hidden')
  }
}

/* this function is ran when you press start which runs the reset question command and the show question command, It is important that the reset is ran before the show or an error will occur */
function setNextQuestion() {
  resetQuestion()
  showQuestion(randoQuestions[currentQuestion])
}

function showQuestion(question) {
  /* question.questions refers to the created question variable and accesses the question variable within that array */
  questionEl.innerText = question.question
  /* for each calls this function for each element in the array and gives each button text to be the answer varible*/
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    /* adds the button class */
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectedAnswer)
    ansBtnEl.appendChild(button)
  })
}
function startGame() {
  startBtn.classList.add('hidden')
  /* This sort functions randomly and we subtract .5 that makes it less than zero or above 0 50 percent of the time*/
  randoQuestions = questions.sort(() => Math.random() - .5)
currentQuestion = 0
questionContainer.classList.remove('hidden')
setNextQuestion()
}
/* this makes it so the previous answers are hidden when you press the next button and whenyou press next it is then hidden when promted with the next question and answers */
function resetQuestion() {
  restetStatus(document.body)
  nextBtn.classList.add('hidden')
  /* loops through the elements and if there is a child we remove it*/
  while (ansBtnEl.firstChild) {
    ansBtnEl.removeChild(ansBtnEl.firstChild)
  }
}

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
  currentQuestion++
  setNextQuestion()
})
/* this is the start button function of the game that manipulates the hidden element and sorts the questions*/
/* grabs an element and checks if this element is correct but first we must reset its status */
function setStatusClass(element, correct) {
  restetStatus(element)
  /* checks of the answer is true and if it is; it is given the correct clas which changes teh background. Since a ture/false statmetn can only be true or false we can just say else since it cannot be anything else. The incorrect class makes the background red */
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('incorrect')
  }
}

function restetStatus(element) {
  element.classList.remove('correct')
  element.classList.remove('incorrect')
}

/* This variable contains an array with objects that are used to show questions and define answer */
var questions = [
  {
    question: 'What tag is used to define the bottom section (footer) of an HTML document?',
    answers: [
      { text: '<footer>', correct: true },
      { text: '<button>', correct: false },
      { text: '<h1> to <h6>', correct: false },
      { text: '<td>', correct: false },
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Cascade Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Cascading Status Sheets', correct: false },
      { text: 'Coloring Style Sheets', correct: false }
    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyper Mark Language', correct: false },
      { text: 'Hypertext Markup Language', correct: true },
      { text: 'Hypertext Markup Language', correct: false },
      { text: 'Hypertext Mark Language', correct: false }
    ]
  },
  {
    question: 'whats 9 + 10?',
    answers: [
      { text: '21', correct: false },
      { text: '19', correct: true },
      { text: '1', correct: false },
      { text: '2', correct: false }
    ]
  }
]