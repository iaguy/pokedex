function searchPokemon() {
    const inputElement = document.getElementById("pokemonInput");
    const pokemonName = inputElement.value.toLowerCase();

    if (pokemonName.trim() === "") {
        alert("Please enter a Pokémon name");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            console.error("Error fetching Pokémon data", error);
            alert("Pokemon not found. Please try again.");
        });
}

function displayPokemon(pokemon) {
    const container = document.getElementById("pokemonContainer");
    container.innerHTML = "";

    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;

    const types = document.createElement("p");
    types.textContent = "Types: " + pokemon.types.map(type => type.type.name).join(", ");

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(types);

    container.appendChild(card);
}
