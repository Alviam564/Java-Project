import configuration from './configure.js';
import queryBuilder from './queryBuilder.js';

const { API_KEY, BASE_URL } = configuration

const configure = ({API_KEY}) => {
    configuration.API_KEY = API_KEY;
};

export default {
    configure,
    card: queryBuilder('cards'),
    set: queryBuilder('sets'),
    type: queryBuilder('types'),
    subtype: queryBuilder('subtypes'),
    rarity: queryBuilder('rarities'),
    supertype: queryBuilder('supertypes')
}

function fetchFromAPI(endpoint, query = "") {
    const url = `${BASE_URL}/${endpoint}${query ? `?q=${encodeURIComponent(query)}` : ""}`;

    return fetch(url, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })

    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`)
        return response.json()
    })

    .then(data => data.data)
    .catch(err => {
        console.error("Fetch error:", err)
    })
}

fetchFromAPI("cards", 'id:sm9').then(cards => {
    const container = document.querySelector(".SM9")
    container.innerHTML = "";
    cards.forEach(card => {
        container.innerHTML += `
          <h3>${card.name}</h3>
          <img src="${card.images.small}" alt="${card.name}" class="tagteam-card" />
        `;
      });
})
fetchFromAPI("cards", 'id:sm10').then(cards => {
    const container = document.querySelector(".SM10")
    container.innerHTML = "";
    cards.forEach(card => {
        container.innerHTML += `
          <h3>${card.name}</h3>
          <img src="${card.images.small}" alt="${card.name}" class="tagteam-card" />
        `;
      });
})
fetchFromAPI("cards", 'id:sm11').then(cards => {
    const container = document.querySelector(".SM11")
    container.innerHTML = "";
    cards.forEach(card => {
        container.innerHTML += `
          <h3>${card.name}</h3>
          <img src="${card.images.small}" alt="${card.name}" class="tagteam-card" />
        `;
      });
})
fetchFromAPI("cards", 'id:sm12').then(cards => {
    const container = document.querySelector(".SM12")
    container.innerHTML = "";
    cards.forEach(card => {
        container.innerHTML += `
          <h3>${card.name}</h3>
          <img src="${card.images.small}" alt="${card.name}" class="tagteam-card" />
        `;
      });
})

fetchFromAPI("sets", 'name:"Team Up"').then(sets => {
    const container = document.querySelector(".teamup");
    container.innerHTML = "";
    sets.forEach(set => {
        container.innerHTML += `
        <a href="http://127.0.0.1:5500/Pokemon-TCG/pages/set9.html" target="_blank">
            <img class="main-page-logo" src="${set.images.logo}" alt="${set.name}" />
        </a>
        <h3>${set.name}</h3>
        `
    })
})

fetchFromAPI("sets", 'name:"Unbroken Bonds"').then(sets => {
    const container = document.querySelector(".unbrokenbonds");
    container.innerHTML = "";
    sets.forEach(set => {
        container.innerHTML += `
        <a href="http://127.0.0.1:5500/Pokemon-TCG/pages/set10.html" target="_blank">
            <img class="main-page-logo" src="${set.images.logo}" alt="${set.name}" />
        </a>
        <h3>${set.name}</h3>
        `
    })
})

fetchFromAPI("sets", 'name:"Unified Minds"').then(sets => {
    const container = document.querySelector(".unifiedminds");
    container.innerHTML = "";
    sets.forEach(set => {
        container.innerHTML += `
        <a href="http://127.0.0.1:5500/Pokemon-TCG/pages/set11.html" target="_blank">
            <img class="main-page-logo" src="${set.images.logo}" alt="${set.name}" />
        </a>
        <h3>${set.name}</h3>
        `
    })
})

fetchFromAPI("sets", 'name:"Cosmic Eclipse"').then(sets => {
    const container = document.querySelector(".cosmiceclipse");
    container.innerHTML = "";
    sets.forEach(set => {
        container.innerHTML += `
        <a href="http://127.0.0.1:5500/Pokemon-TCG/pages/set12.html" target="_blank">
            <img class="main-page-logo" src="${set.images.logo}" alt="${set.name}"  />
        </a>
        <h3>${set.name}</h3>
        `
    })
})