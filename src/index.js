import './css/styles.css';
import {Notiflix} from 'notiflix';
import axios, { Axios } from 'axios';
// import { debounce } from 'lodash.debounce';



const input = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');
const pokemonBox = document.querySelector('.pokemon-box');

input.addEventListener('submit',getPokemon);
searchBtn.addEventListener('click',getPokemon);

function getPokemon(e){
    e.preventDefault()

    const id = input.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) =>response.json()).then((data) =>{
        pokemonBox.innerHTML = 
        `<div class="card">
        <div class="card-img-top">
            <img src="${data.sprites.front_default}" alt="${data.name}">
        </div>
        <div class="card-body">
            <h2 class="card-title">Ім'я: ${data.name}</h2>
            <p class="card-text">Вага: ${data.weight}</p>
            <p class="card-text">Зріст: ${data.height}</p>
            
        </div>
        </div>`;
    })
    .catch((err) =>{
        console.log("Pokemon not found", err);
        
    });
    
}










