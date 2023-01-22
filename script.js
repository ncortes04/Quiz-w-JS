var ansBtnEl = document.getElementById('answer-btns')
var nextBtn = document.getElementById('next-btn')
var timer = document.getElementById('timer')
var questionEl = document.getElementById('question')
var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-box')
var count = 0;
var correct = 0;
var timer = 100
var x = setInterval(function() {
  // Display the result in the element with id="demo"
  timer.innerHTML = "1"
  console.log(timer)
  timer--;
  // If the count down is finished, write some text
  if (timer < 0) {
    clearInterval(x);
    timer.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
/* it is important we define these as let variables becuase if not, they cannot be redefined */
var populateAnswers = function(questionNum){
  if(count === questions.length){
    count = 0;
    ansBtnEl.classList.add('hidden')
    nextBtn.classList.add('hidden')
    startBtn.classList.remove('hidden')
    questionEl.innerHTML = 'end'
  }
  count++;
  var questionSelect = questions[questionNum]
  questionEl.innerHTML = questionSelect.question
  const answerArr = ansBtnEl.children
  for (let i = 0; i < answerArr.length; i++){
    answerArr[i].innerHTML = questionSelect.answers[i].text
  }
  console.log((questionSelect.answers[1].text).toString())
}
var next = function(){
  console.log(count, questions.length)
  
  populateAnswers(count)
}
var start = function() {
  startBtn.classList.add('hidden')
  ansBtnEl.classList.remove('hidden')
  nextBtn.classList.remove('hidden')
  questionContainer.classList.remove('hidden')
  populateAnswers(count)
}
nextBtn.addEventListener('click', next)
startBtn.addEventListener('click', start)
var questions = [
  {
    question: 'What tag is used to define the bottom section (footer) of an HTML document?',
    answers: [
      { text: 'footer', correct: true },
      { text: 'button', correct: false },
      { text: 'h1 to h6', correct: false },
      { text: 'td', correct: false }
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