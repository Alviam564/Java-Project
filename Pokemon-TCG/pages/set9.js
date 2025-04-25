let cardsData = []

fetch('../src/data/team-up.json')
  .then(response => response.json())
  .then(data => {
    displayCards(data);
    cardsData = data;
    createBackgroundCards()
  }
)
.catch(error => console.error("Failed to load JSON:", error));

function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

function createBackgroundCards() {
  const container = document.querySelector(".background-cards");

  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = getRandomCardImage()

    card.appendChild(img)
    container.appendChild(card)

    setInterval(() => {
      img.src = getRandomCardImage()
    }, 6000);
  }
}

function getRandomCardImage() {
  if(!Array.isArray(cardsData) || cardsData.length === 0) {
    return "../src/assets/Pokémon_Trading_Card_Game_logo.svg.png"
  }
  const randomIndex = Math.floor(Math.random() * cardsData.length)
  return cardsData[randomIndex].images.large;
}

function getFormattedPrices(pricesArr) {
  const priceTypes = ["normal", "reverseHolofoil", "holofoil"]
  const labels = {
    normal : "Normal",
    reverseHolofoil: "Reverse Holofoil",
    holofoil: "Holofoil"
  };

  let cardtypes = ""

  for (const priceGroup of pricesArr) {
    for (const type of priceTypes) {
      if (priceGroup[type]) {
        const low = priceGroup[type].low ?? "N/A";
        const high = priceGroup[type].high ?? "N/A";
        cardtypes += `
        <p><strong>${labels[type]} Low:</strong> ${low}</p>
        <p><strong>${labels[type]} High:</strong> ${high}</p>
        `;
      }
    }
  }

  return cardtypes
}

function displayCards(cards) {
  const container = document.getElementById('card-container');
  container.innerHTML = '';
  
  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-TU');
    
    cardDiv.innerHTML = `
    <h3>${card.name}</h3>
    <img src="${card.images.small}" alt="${card.name}">
      <p><strong>Type:</strong> ${card.types}</p>
      <p><strong>Rarity:</strong> ${card.rarity}</p>
      <p><strong>Set:</strong> ${card.set.name}</p>
      ${getFormattedPrices(card.prices)}
    `;
    container.appendChild(cardDiv);
    }
  );
}
