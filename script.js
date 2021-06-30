const container = document.querySelector('#container');

//URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' 

for(let i = 1; i<=151; i++){
  const div = document.createElement('div');
  div.classList.add('pokemon');
  const sp = document.createElement('span');
  sp.innerText = `#${i}`;
  const newImg = document.createElement('img');
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.appendChild(div);
  div.appendChild(newImg);
  div.appendChild(sp); 
}