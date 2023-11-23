const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit-btn');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeButton = document.querySelector('.close');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'Какое блюдо является традиционно итальянским?',
    options: [' Суши', 'Пицца', 'Лазанья', 'Роллы'],
    correctAnswer: 'Лазанья'
  },
  {
    question: 'Какой из этих ингредиентов является основным в классическом французском бульоне?',
    options: ['Помидоры', 'Курица', 'Говядина', 'Лосось'],
    correctAnswer: 'Курица'
  },
  {
    question: 'Какой национальности является блюдо "суши"?',
    options: ['Итальянская', 'Китайская', 'Японская', 'Мексиканская'],
    correctAnswer: 'Японская'
  },
  {
    question: 'Какое блюдо славится своим разнообразием начинок и теста, и часто ассоциируется с итальянской кухней?',
    options: ['Тортельини', 'Эмпанада', 'Самоса', 'Блинчики'],
    correctAnswer: 'Тортельини'
  },
  {
    question: 'Какой вид мяса используется в традиционном блюде "бефстроганов"?',
    options: ['Свинина', 'Курица', 'Говядина', 'Баранина'],
    correctAnswer: 'Говядина'
  },
  {
    question: 'Что из перечисленного является традиционным японским соусом для подкисления риса в суши?',
    options: ['Соевый соус', 'Терияки', 'Сладкий чили', 'Гуакамоле'],
    correctAnswer: 'Соевый соус'
  },
  {
    question: 'Какое блюдо является традиционным испанским рисовым блюдом?',
    options: ['Паэлья', 'Суши', 'Карри', 'Фрикассе'],
    correctAnswer: 'Паэлья'
  },
  {
    question: 'Какой вид сыра используется в основном для приготовления итальянского блюда лазаньи?',
    options: ['Чеддер', 'Моцарелла', 'Пармезан', 'Фета'],
    correctAnswer: 'Пармезан'
  },
  {
    question: 'Какое блюдо представляет собой круглую лепёшку из теста, запечённую в духовке и часто подаётся с соусом?',
    options: ['Хачапури', 'Фокачча', 'Пирог', 'Пицца'],
    correctAnswer: 'Фокачча'
  },
  {
    question: 'Какое блюдо представляет собой картофель, нарезанный тонкими ломтями и жаренный в большом количестве масла?',
    options: ['Хачапури', 'Фри', 'Чипсы', 'Картошка по-деревенски'],
    correctAnswer: 'Картошка по-деревенски'
  }
];

function startQuiz() {
  startButton.style.display = 'none';
  submitButton.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options.map((option, index) => `
            <label>
                <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                ${option}
            </label><br>
        `).join('')}
    `;
}

function submitQuiz() {
  const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);

  if (selectedOption) {
    if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  } else {
    alert('Выберите ответ до отправки');
  }
}

function showResult() {
  modalText.textContent = `Правильно: ${score} из ${questions.length}`;
  modal.style.display = 'flex';
  submitButton.style.display = 'none';
}

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitQuiz);
closeButton.addEventListener('click', () => modal.style.display = 'none');

// Add button animations to quiz buttons
const quizButtons = document.querySelectorAll('.btn-goto');

function handleMouseOver() {
  this.style.color = 'white';
  this.style.fontSize = "25px";
  this.style.width = "55%";
}

function handleMouseOut() {
  this.style.color = 'black';
  this.style.fontSize = "20px";
  this.style.width = "45%";
}

quizButtons.forEach(function (button) {
  button.addEventListener('mouseover', handleMouseOver);
  button.addEventListener('mouseout', handleMouseOut);
});
