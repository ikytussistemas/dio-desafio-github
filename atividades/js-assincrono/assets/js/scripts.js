const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat')
const catimg = document.getElementById('cat')

const getCats = async () => {
  const data = await fetch(BASE_URL)
  .then((res) => res.json())
  .catch((e) => console.log(e.message));
  return data.webpurl;  
}

const loadimg = async () => {
  catimg['src'] = await getCats();
}

catBtn.addEventListener('click', loadimg);

loadimg();