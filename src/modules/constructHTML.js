export default (obj, elem) => {
  if (obj === undefined) {
    elem.innerHTML = 'No Score';
  } else {
    elem.innerHTML = `Name: ${obj.user},  Score: ${obj.score} `;
  }
};
