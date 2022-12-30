let searchValue = "";
input.addEventListener('submit',showStat);

const axios = require("axios");
const api_url = "https://covid-193.p.rapidapi.com/countries";
const options = {
method: 'GET',
url: 'https://covid-193.p.rapidapi.com/countries',
headers: {
    'X-RapidAPI-Key': 'b53f4803demsh354328b3224643ap10b6b4jsna45adcec75bf',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

async function showStat(searchValue){
    
    const c = country;
    for(let c of response.data){
        let stat =
        `
    <div class="country-statistic">
    <h1 class="country-name">Name:</h1>
    <ul class="cases">
    <li class="cases-item">New:${c.cases.new}</li>
    <li class="cases-item">Active:${c.cases.active}</li>
    <li class="cases-item">Critical:${c.cases.critical}</li>
    <li class="cases-item">Recovered:${c.cases.recoverd}</li>
    <li class="cases-item">Total:${c.cases.total}</li>
    </ul>
    <p>Date:${c.day}</p>
    <p>Time:${c.time}</p>
    </div>`;
    };
    gallery.innerHTML=stat;
    
}