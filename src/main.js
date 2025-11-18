import './sass/main.scss';

const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const statsBoard = document.getElementById('stats');

const backgroundColors = [
  'hsl(15, 100%, 70%)',
  'hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)',
  'hsl(145, 58%, 55%)',
  'hsl(264, 64%, 52%)',
  'hsl(43, 84%, 65%)',
];

// console.log(dailyBtn, weeklyBtn, montlyBtn, statsBoard);

function generateCards(data, timeframe = 'daily') {
  statsBoard.innerHTML = '';

  data.forEach((item, index) => {
    const card = document.createElement('article');
    card.classList.add('card');
    // card.style.background = backgroundColors[index];
    card.style.background = 'hsl(235, 46%, 20%)';
    // use extensions ES6 String HTML
    card.innerHTML = /* html */ `
    <div class="card__header">
      <h3>${item.title}</h3>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" />
      </svg>
    </div>
    <div class="card__body">
      <p>${item.timeframes[timeframe].current}hrs</p>
      <p>Last week: ${item.timeframes[timeframe].previous}hrs</p>
      </div>  `;

    statsBoard.append(card);
  });
}

function getData() {
  fetch('/data.json')
    .then((response) => {
      if (!response.ok) throw new Error('HTTP error:' + response.status);
      return response.json();
    })
    .then((data) => {
      generateCards(data);

      dailyBtn.addEventListener('click', () => {
        setActiveButton(dailyBtn);
        generateCards(data, 'daily');
      });

      weeklyBtn.addEventListener('click', () => {
        setActiveButton(weeklyBtn);
        generateCards(data, 'weekly');
      });

      monthlyBtn.addEventListener('click', () => {
        setActiveButton(monthlyBtn);
        generateCards(data, 'monthly');
      });
    })
    .catch((error) => console.log(error));
}

function setActiveButton(activeBtn) {
  [dailyBtn, weeklyBtn, monthlyBtn].forEach((btn) =>
    btn.classList.remove('active')
  );
  activeBtn.classList.add('active');
}

getData();
