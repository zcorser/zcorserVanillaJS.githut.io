
document.querySelector('#click-me').addEventListener('click', () => {
  document.querySelectorAll('h1').forEach((h1) => h1.innerHTML = 'You clicked that button!!!');
  document.querySelector('body').style.backgroundColor = 'red' ;
  document.querySelectorAll('div.hidden').forEach((div) => {
    div.style.display = 'block';
  });
});

