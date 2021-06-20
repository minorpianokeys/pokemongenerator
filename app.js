const button = document.querySelector('button');
const pokemonContainer = document.getElementById('pokemonImg')


pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/"

colors = {
    fire: 'red',
    grass: 'green',
    electric: 'yellow',
    water: 'blue',
    ground: 'brown',
    rock: 'darkbrown',
    fairy: 'pink',
    poison: 'purple',
    bug: 'limegreen',
    dragon: 'orange',
    psychic: 'lavender',
    flying: 'skyblue',
    fighting: 'orange',
    normal: 'grey',
    steel: 'grey',
}

async function getPokemon(num) {
    try {
        const pokeInfo = await axios.get(pokeApiUrl + num)
        createPokemonCard(pokeInfo)
    } catch(err) {
        console.log(err)
    }
}

function createPokemonCard(pokemon) {
    pokeNum = pokemon.data.id
    pname = pokemon.data.species.name
    pokeName = pname.charAt(0).toUpperCase() + pname.slice(1)
    pokeType1 = pokemon.data.types[0].type.name
    console.log(pokeName)
    console.log(pokeType1)

    const pokemonInnerHTML = `
        <h2 id="pokeInfo">#${pokeNum} ${pokeName}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png" alt=${pokeName}>
        <p>Type: <span id="type">${pokeType1}</span></p>
    `

    pokemonContainer.innerHTML = pokemonInnerHTML

    const color = colors[pokeType1]
    const type = document.getElementById('type')
    type.style.color = color
}

button.addEventListener('click', function randomPoke() {
    const pokeNum = Math.floor(Math.random() * 898) + 1
    pokeInfo = getPokemon(pokeNum)
    });