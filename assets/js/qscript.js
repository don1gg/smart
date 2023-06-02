const quizData = [
  {
      question: "January, February, __",
      a: "March",
      b: "May",
      c: "October",
      correct: "a",
  },
  {
      question: "30",
      a: "ten",
      b: "sixty",
      c: "thirty",
      correct: "c",
  },
  {
      question: "Do Max and Jerry like fishing?",
      a: "Yes, he does",
      b: "Yes, they do",
      c: "No, he doesn't",
      correct: "b",
  },
  {
      question: "Dad __ playing basketball",
      a: "likes",
      b: "like",
      c: "we",
      correct: "a",
  },
  {
      question: "I,ve got a __",
      a: "kite",
      b: "cube",
      c: "face",
      correct: "a",
  },
  {
      question: "Ellie gets up early __",
      a: "finnaly",
      b: "then",
      c: "every day",
      correct: "c",
  },
  {
      question: "Where ___ from?",
      a: "you",
      b: "are you",
      c: "i'm",
      correct: "b",
  },
  {
      question: "We __ from a cup",
      a: "play",
      b: "draw",
      c: "drink",
      correct: "c",
  },
  {
      question: "We're in the __",
      a: "car",
      b: "shark",
      c: "park",
      correct: "a",
  },
  {
      question: "I'm in a __",
      a: "small",
      b: "all",
      c: "mall",
      correct: "c",
  },
  {
      question: "I __ a shower every day",
      a: "catch",
      b: "go",
      c: "have",
      correct: "c",
  },
  {
      question: "What's __ name?",
      a: "she",
      b: "your",
      c: "he",
      correct: "b",
  },
  {
      question: "This __ my brother Mike.",
      a: "is",
      b: "has",
      c: "are",
      correct: "a",
  },
  {
      question: "Marry gave me __ apple yesterday.",
      a: "and",
      b: "a",
      c: "an",
      correct: "c",
  },
  {
      question: "What color is a crocodile?",
      a: "i am green",
      b: "it is green",
      c: "it is grey",
      correct: "b",
  },
  {
      question: "__ chocolate",
      a: "You like",
      b: "Does you like",
      c: "Do you like",
      correct: "c",
  },
  {
      question: "My __ car is red.",
      a: "father",
      b: "father's",
      c: "fathers'",
      correct: "b",
  },
  {
      question: "Tigers are __ than elephants.",
      a: "slower",
      b: "more fast",
      c: "faster",
      correct: "c",
  },
  {
      question: "Ann __ at home yesterday",
      a: "is",
      b: "were",
      c: "was",
      correct: "c",
  },
  {
      question: "Today is the __ day of spring.",
      a: "secondth",
      b: "second",
      c: "two",
      correct: "b",
  },
  
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');
const questionNumberEl = document.getElementById('question-number');
const totalQuestionsEl = document.getElementById('total-questions');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;

  questionNumberEl.textContent = currentQuiz + 1;
  totalQuestionsEl.textContent = quizData.length;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      displayResult();
    }
  }
});

function displayResult() {
  let level;
  if (score >= 20) {
    level = 'Intermediate';
  } else if (score >= 17) {
    level = 'Pre-intermediate';
  } else if (score >= 13) {
    level = 'Elementary';
  } else if (score >= 1) {
    level = 'Beginner';
  } else {
    level = 'No level achieved';
  }

  quiz.innerHTML = `
    <h2>Your level: ${level}</h2>
    <button onclick="location.reload()">Reload</button>
    <button><a href="index.html">Вернутся на главную меню</a></button>
  `;
}
