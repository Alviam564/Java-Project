fetch('../src/data/unbroken-bonds.json')
  .then(response => response.json())
  .then(data => {
    displayCards(data);
  })
  .catch(error => console.error("Failed to load JSON:", error));
