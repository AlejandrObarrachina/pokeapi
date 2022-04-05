function consultaPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let pokemon = document.getElementById("element");

            pokemon.innerHTML = `
         <div class="card">
            <h2 class="title"> NAME </h2>
            <p class="name">${data.name}<p>
            <h2 class="title"> TYPE </h2>
            <p>${data.types[0].type.name}<p>
            <h2 class="title"> ABILITIES </h2>
            <ul>
                <li>${data.abilities[0].ability.name} </li>
                <li>${data.abilities[1].ability.name} </li>
            </ul>
            <img src= '${data.sprites.front_default}'/>
        </div>`;
        })
        .catch((error) => console.log(error));
}

// let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
