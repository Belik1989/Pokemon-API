import './css/styles.css';
import Notiflix from 'notiflix';
import axios, { Axios } from 'axios';
// import { debounce } from 'lodash.debounce';



const input = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');
const gallery = document.querySelector('.pokemon-info');
// console.log(input);
// console.log(searchBtn);
// console.log(gallery);
let pokedex = {};
let searchValue = "";

input.addEventListener('submit',onPokemonSearch());
searchBtn.addEventListener('click',onPokemonSearch);

    
async function onPokemonSearch(){
    const searchValue = input.value.trim()
    const results = await getPokemon(searchValue);
    let pokemon.id = searchValue;
    gallery.insertAdjacentHTML('beforeend',createPokemonCard());
    
};

function createPokemonCard(){
    return    `<div class="card">
    <div class="card-img-top">
        <img src="" alt="${pokedex.name}">
    </div>
    <div class="card-body">
        <h2 class="card-title">Ім'я: ${pokedex.name}</h2>
        <p class="card-text">Вага: ${pokedex.weight}</p>
        <p class="card-text">Зріст: ${pokedex.height}</p>
        
        <p class="card-text">Опис: ${pokedex.desc}</p>
        
    </div>
    </div>`
    
}


async function getPokemon(searchValue){
    const url = "https://pokeapi.co/api/v2/pokemon/${searchValue}/";

    const res = await axios.get(url);
    const pokemon = await res.data;
    console.log(pokemon);
    let pokemonId = searchValue;
    let pokemonName = pokemon["name"];
    let pokemonWeight = pokemon["weight"];
    let pokemonHeight = pokemon["height"];
    let pokemonImg = pokemon["sprites"]["front_shiny"];

    const r = await axios.get(pokemon["species"]["url"]);
    let pokemonDesc = await r.data;
    console.log(pokemonDesc);
    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"];
    pokedex = {
        "name" : pokemonName, 
        "img" : pokemonImg,
        "desc" : pokemonDesc, 
        "weight" : pokemonWeight,
        "height" : pokemonHeight
    };
}





