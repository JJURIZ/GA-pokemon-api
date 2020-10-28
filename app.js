fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => {
    if(response.ok) {
        return response.json();
    }
})
.then(pokemon => {
    const pikachu = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[5].move.name,
        image: pokemon.sprites.other[`official-artwork`].front_default  // Need bracket notation due to the - (hyphen) in official artwork
    }
    console.log(pikachu)
})
.catch(error => {
    console.log(error)
})

function makePokemonCard() {

    //Create a div element, add a class, add style
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
        //Create an image tag, add class, add source, add alt
        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.setAttribute('src', pokemon.image);
        image.setAttribute('alt', `This is ${pokemon.name}`)
            //Append image to the card-div
            card.appendChild(image);

        //Create div, add class
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
            //Create h5 element, add class, add text
            const nameElement = document.createElement('h5');
            nameElement.classList.add('card-title');
            nameElement.textContent = pokemon.name;
            //Create p tag, add class, add text
            const heightWeight = document.createElement('p');
            heightWeight.classList.add('card-text');
            heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;

            const move = document.createElement('p');
            move.classList.add('card-text');
            move.textContent = `Ability: ${pokemon.ability}, Move: ${pokemon.move}`;
            //Create a tag, add 2 classes, add href, add text
            const 
            //Append to card-body div
        //Append card-body to card
        //Append card-div to container

}





{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}