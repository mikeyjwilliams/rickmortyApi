function CardCreator(obj) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = obj.image;
  image.alt = obj.name;
  card.appendChild(image);

  const characterName = document.createElement('h2');
  characterName.textContent = obj.name;
  card.appendChild(characterName);
}

axios
  .get('https://rickandmortyapi.com/api/character/2')
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });
