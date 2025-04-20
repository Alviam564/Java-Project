fetch('../src/data/team-up.json')
  .then(response => response.json())
  .then(data => {
    displayCards(data);
  })
  .catch(error => console.error("Failed to load JSON:", error)
);

function displayCards(cards) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';
  
    cards.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card-TU');
  
      cardDiv.innerHTML = `
        <h3>${card.name}</h3>
        <img src="${card.images.small}" alt="${card.name}">
        <p><strong>Rarity:</strong> ${card.rarity}</p>
        <p><strong>Set:</strong> ${card.set.name}</p>
        <p><strong>
      `;
  
      container.appendChild(cardDiv);
    });
  }
  