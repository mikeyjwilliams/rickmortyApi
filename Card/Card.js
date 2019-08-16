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

  const origin = document.createElement('p');
  origin.textContent = obj.origin.name;
  card.appendChild(origin);

  const location = document.createElement('p');
  location.textContent = obj.location.name;
  card.appendChild(location);

  const status = document.createElement('p');
  status.textContent = obj.status;
  card.appendChild(status);

  const species = document.createElement('p');
  species.textContent = obj.species;
  card.appendChild(species);

  return card;
}

axios
  .get('https://rickandmortyapi.com/api/character/2')
  .then(response => {
    console.log(response.data);

    const morty = response.data;

    const mortyCard = CardCreator(morty);
    console.log(mortyCard);
  })
  .catch(err => {
    console.log(err);
  });
