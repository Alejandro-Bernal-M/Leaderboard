export default (obj, elem) => {
  if (obj === undefined) {
    elem.innerHTML = 'No Score';
  } else {
    elem.innerHTML = `<span>Name: ${obj.user}</span><span>Score: ${obj.score} </span>`;
  }
};
