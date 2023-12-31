const requestURL = 'https://raw.githubusercontent.com/celestindev/wdd230/main/lesson09/prophets.json';

fetch(requestURL)
  .then(function(response){
    return response.json();
})
.then(function(jsonObject){
  const prophets = jsonObject['prophets'];

  for( let i =0; i < prophets.length; i++){

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let image = document.createElement('img');

    var altImg = prophets[i].name + ' ' + prophets[i].lastname;

    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    birthDate.textContent = 'Date of Birth: '+ prophets[i].birthdate;
    birthPlace.textContent = 'Place of birth: ' + prophets[i].birthplace;
    image.setAttribute('src', prophets[i].imageurl);

    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(image, image.alt = altImg);

    document.querySelector('div.cards').appendChild(card);

  }

});