const quizData = [
    {
        question: "I ___ to the park yesterday.",
        a: "go",
        b: "went",
        c: "goes",
        correct: "b",
    },
    {
        question: "Sarah ___ in London for five years.",
        a: "lives",
        b: "lived",
        c: "live",
        correct: "a",
    },
    {
        question: "Could you please ___ me the salt?",
        a: "pass",
        b: "passes",
        c: "passing",
        correct: "a",
    },
    {
        question: "I don't like coffee, but I ___ tea.",
        a: "likes",
        b: "like",
        c: "liked",
        correct: "b",
    },
    {
        question: "She ___ her homework every day.",
        a: "do",
        b: "did",
        c: "does",
        correct: "c",
    },
    {
        question: "___ is your name?",
        a: "What",
        b: "When",
        c: "Where",
        correct: "a",
    },
    {
        question: "They ___ to the party last night.",
        a: "didn't come",
        b: "didn't came",
        c: "don't come",
        correct: "ba",
    },
    {
        question: "We ___ dinner when the phone rang.",
        a: "were having",
        b: "are having",
        c: "have",
        correct: "a",
    },
    {
        question: "My brother ___ a doctor.",
        a: "is",
        b: "am",
        c: "are",
        correct: "a",
    },
    {
        question: "___ any milk in the fridge?",
        a: "Is there",
        b: "Are there",
        c: "There is",
        correct: "a",
    },
    {
        question: "I like to play ___ guitar.",
        a: "a",
        b: "an",
        c: "the",
        correct: "a",
    },
    {
        question: "They ___ to the beach every summer.",
        a: "goes",
        b: "go",
        c: "went",
        correct: "b",
    },
    {
        question: "___ you ever been to Paris?",
        a: "Did",
        b: "Have",
        c: "Are",
        correct: "b",
    },
    {
        question: "She ___ a book when I saw her.",
        a: "read",
        b: "reads",
        c: "was reading",
        correct: "c",
    },
    {
        question: "I'm tired. I ___ for a long time.",
        a: "have been driving",
        b: "has been driving",
        c: "had been driving",
        correct: "a",
    },
    {
        question: "We ___ to the cinema tomorrow.",
        a: "will go",
        b: "goes",
        c: "going",
        correct: "a",
    },
    {
        question: "What time ___ the concert start?",
        a: "do",
        b: "does",
        c: "did",
        correct: "b",
    },
    {
        question: "She ___ a good cook.",
        a: "is",
        b: "am",
        c: "are",
        correct: "a",
    },
    {
        question: "I ___ studying English since last year.",
        a: "have been",
        b: "has been",
        c: "had been",
        correct: "a",
    },
    {
        question: "I'm sorry, but I ___ your name.",
        a: "don't remember",
        b: "doesn't remember",
        c: "didn't remember",
        correct: "a",
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
