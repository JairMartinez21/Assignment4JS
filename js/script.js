fetch("cars.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    displayCars(data);
  })
  .catch((error) =>
    console.error("There has been a problem with your fetch operation:", error)
  );

/**
 * Display car details on the page
 * @param {Array} cars - array of car objects from JSON
 */
function displayCars(cars) {
  const container = document.getElementById("car-container");
  cars.forEach((car) => {
    // Create a card for each car
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    // Build the inner HTML for the card
    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.brand} ${car.model}">
      <div class="car-details">
        <h2>${car.brand} ${car.model} (${car.year})</h2>
        <p class="price">${car.price}</p>
        <p><strong>HP:</strong> ${car.hp} &nbsp;&nbsp; <strong>Torque:</strong> ${car.torque}</p>
      </div>
    `;
    container.appendChild(carCard);
  });
}
