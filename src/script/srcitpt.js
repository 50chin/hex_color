const sectionNode = document.querySelector('.section');
const btnNode = document.querySelector('.btn');

let dataHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function randomColor(dataHex) {
  let strColor = '#';
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.ceil(Math.random() * 16 - 1);
    strColor += dataHex[randomNum];
  }
  return strColor;
}

// console.log(randomColor(dataHex));

function inversionСolor() {
  const strColor = randomColor(dataHex);
  let r = parseInt(strColor.slice(1, 3), 16);
  let g = parseInt(strColor.slice(3, 5), 16);
  let b = parseInt(strColor.slice(5, 7), 16);
  r = (255 - r).toString(16).padStart(2, '0');
  g = (255 - g).toString(16).padStart(2, '0');
  b = (255 - b).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

const createCard = () => {
  const randomColorValue = randomColor(dataHex);
  const inversionСolorValue = inversionСolor();
  const card = document.querySelector('body');
  card.innerHTML = ` <div class="container" style=background:${inversionСolorValue}>
  <h1 class = "title" style="color:${randomColorValue}">${randomColorValue}</h1>
    </div>`;
  return card;
};

const renderCards = () => {
  document.body.innerHTML = '';
  const card = createCard();
  document.body.append(card);
};

document.body.addEventListener('click', () => {
  renderCards();
});
