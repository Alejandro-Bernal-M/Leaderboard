import './styles.css';
import setScore from './modules/setScore.js';
import refreshHTML from './modules/refreshHTML.js';


const form = document.querySelector('.form');
const btnRefresh = document.querySelector('.btn-refresh');
const msg = document.querySelector('.msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  setScore(name.value, parseInt(score.value, 10))
  form.reset();
  refreshHTML();
  msg.innerHTML= 'Score saved';
  setTimeout(() => {
    msg.innerHTML= '';
  }, 4000);
})

btnRefresh.onclick = () => refreshHTML();
window.onload =() => refreshHTML();
