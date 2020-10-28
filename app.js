const container = document.querySelector('.container');

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
        image: pokemon.sprites.other[`official-artwork`].front_default,  // Need bracket notation due to the - (hyphen) in official artwork
        purchaseLink: "https://www.ebay.com/itm/Rare-NM-1999-Pokemon-Pikachu-Card-BLACK-STAR-MOVIE-PROMO-4-WOTC-NEW/174495649957?_trkparms=ispr%3D1&hash=item28a0c050a5:g:aGMAAOSwphhfjcCH&amdata=enc%3AAQAFAAACYBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkSG%252BOFgrj2Yvbvmrj2TAdMzIacVOWtA817YD2FKTpH1tHtEuO67%252F0ixdGQJKRJz1lPWI2xW%252BnAL6v5A%252FL7HJPew8%252FgcWTFw2FsXyyq6lrA2lKCnYKlIaoFg9grHtCS7fLViNVe8FTG3PYM9gpb6mzxe5ZgrJhnohJDCnM2JVa4YMGBarHqRXKqrQ2QUcmbk9%252BkEPQxG6weDx3Ae7fL7h%252FN6%252B%252FCq7aPPrKurhj%252BX7xzCXft3Y9lzhSnyndlHa%252F5Fwy2dbgae0bLctbWzSvgCy%252BiNCaG5JiTFfWvxv1VR4PwDdaTUX%252BEPyOQkRBqw91l4Ha%252FoimwrFnPjeJncfT6CNqquzsry%252BhpC5CFDluhBCi5lRq41uUak7ZhdE45nmbYXQCMhsQm%252Ba5Cubfv%252FMtU%252BbG2dXbjTx6aV4PFeES38tBlu3PPqRvmLOKlt71rpyASUVynsNP0CUbssgRLNCydG7eJfqYJ%252F%252Byqv%252FpBn%252BdPCF0T5hEfzhMdYG0YPha6bcHnN3igH3spDgwlCAr2XD1k6%252F63DCzUC23DUruRXQHepaJdkeLiX7QzxynWwJVS49m2CVxQGqc1RWjzBWw9t51sc79i5RpDWbMBMvm0IyTxKlMbMZPwadH%252FhVvgcvkiamhPu6u63%252BsHZuyeDM2vgxs171NFUwXrIBCAVYk9axTyKHfjHLEZxxzCXWPQlJ%252BlkSsuBmc%252F8Yvl6VzcFqg6W7qTC%252BwbjSZrp%252B81GmmDi2X4CLoNJQ3Li8wKDIFpSlkTubinXt4%7Ccksum%3A17449564995748c0948404ad42bfae1107aa64f64793%7Campid%3APL_CLK%7Cclp%3A2334524"
    }

    const pikachuCard = makePokemonCard(pikachu);
    console.log(pikachu)
})
.catch(error => {
    console.log(error)
})

function makePokemonCard(pokemon) {

    //Create a div element, add a class, add style
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
        //Create an image tag, add class, add source, add alt
        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.setAttribute('src', pokemon.image);
        image.setAttribute('alt', `This is ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`)
            //Append image to the card-div
            card.appendChild(image);

        //Create div, add class
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
            //Create h5 element, add class, add text
            const nameElement = document.createElement('h5');
            nameElement.classList.add('card-title');
            nameElement.textContent = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`;
            //Create p tag, add class, add text
            const heightWeight = document.createElement('p');
            heightWeight.classList.add('card-text');
            heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;

            const move = document.createElement('p');
            move.classList.add('card-text');
            move.textContent = `Move: ${pokemon.move.charAt(0).toUpperCase()}${pokemon.move.slice(1)}`;  

            const ability = document.createElement('p');
            ability.classList.add('card-text');
            ability.textContent = `Ability: ${pokemon.ability.charAt(0).toUpperCase()}${pokemon.ability.slice(1)}`;
            //Create a tag, add 2 classes, add href, add text
            const purchaseLink = document.createElement('a');
            purchaseLink.classList.add('btn', 'btn-primary');
            purchaseLink.setAttribute('href', pokemon.purchaseLink);
            purchaseLink.textContent = `Buy ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} card`;
            //Append to card-body div
            cardBody.appendChild(nameElement);
            cardBody.appendChild(heightWeight);
            cardBody.appendChild(move);
            cardBody.appendChild(ability);
            cardBody.appendChild(purchaseLink);
        //Append card-body to card
        card.appendChild(cardBody);
        //Append card-div to container
        container.appendChild(card);

        return card;

}









{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}