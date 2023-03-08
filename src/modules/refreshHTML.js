import getScore from './getScore.js';
import constructHTML from './constructHTML.js';

const scoreHolder = document.querySelectorAll('.li-scores');

export default () => {
  for (let i = 0; i < scoreHolder.length; i += 1) {
    getScore().then((res) => {
      constructHTML(res[i], scoreHolder[i]);
    });
  }
};