fetch('../src/data/unbroken-bonds.json')
.then(response => response.json())
.then(data => {
  displayCards(data);
})
.catch(error => console.error("Failed to load JSON:", error));

function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

function displayCards(cards) {
  const container = document.getElementById('card-container');
  container.innerHTML = '';
  
  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-UB');
    
    cardDiv.innerHTML = `
      <h3>${card.name}</h3>
      <img src="${card.images.small}" alt="${card.name}">
      <p><strong>Type:</strong> ${card.types}</p>
      <p><strong>Rarity:</strong> ${card.rarity}</p>
      <p><strong>Set:</strong> ${card.set.name}</p>
      <p><strong>Low Price:</strong> ${card.prices?.[0]?.normal?.low || "N/A"}</p>
      <p><strong>High Price:</strong> ${card.prices?.[0]?.normal?.high || "N/A"}</p>
      <p><strong>Market Price:</strong> ${card.prices?.[0]?.normal?.market || "N/A"}</p>
  
      <p><strong>Low Price:</strong> ${card.prices?.[1]?.reverseHolofoil?.low || "N/A"}</p>
      <p><strong>High Price:</strong> ${card.prices?.[1]?.reverseHolofoil?.high || "N/A"}</p>
      <p><strong>Market Price:</strong> ${card.prices?.[1]?.reverseHolofoil?.market || "N/A"}</p>
      
      <p><strong>Low Price:</strong> ${card.prices?.[0]?.holofoil?.low || "N/A"}</p>
      <p><strong>High Price:</strong> ${card.prices?.[0]?.holofoil?.high || "N/A"}</p>
      <p><strong>Market Price:</strong> ${card.prices?.[0]?.holofoil?.market || "N/A"}</p>`;
  
    container.appendChild(cardDiv);
  });
}