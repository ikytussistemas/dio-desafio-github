const btnToggle = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

btnToggle.addEventListener('click', ()=>{
  changeClasses();
  changeTexts();
})

const changeClasses = ()=> {
  btnToggle.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  h1.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}

const changeTexts = () => {
  (body.classList.contains('dark-mode'))
    ? [btnToggle.innerHTML = 'Ligth Mode', h1.innerHTML = 'Dark Mode ON']  
    : [btnToggle.innerHTML = 'Dark Mode', h1.innerHTML = 'Light Mode ON']
}