const button = document.querySelectorAll('#button');
const parent = document.querySelector('.content');

button.forEach(but => {
  but.addEventListener('click', () => {
   
    parent.classList.toggle('display');

  })
})
