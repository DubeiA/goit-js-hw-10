import './css/styles.css';
var debounce = require('lodash.debounce');


const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
   
};

// const newFetchCounties = new NewFetchCounties();


refs.input.addEventListener('input', debounce(onSearch), 300);


function onSearch(event) {
  

    const searchCountry = refs.input.value;
    

    findName(searchCountry)
        // .then(country => {
        //     console.log(country);
        // })
        .then(renderPosts)
        .catch(notFindError);
    
    
   
    
}

function findName(country) {
   

    const urlCountry = `https://restcountries.com/v2/name/${country}`
    
    return fetch(urlCountry).then(response => response.json());
    
}

   function renderPosts(country) {
  const markup = country
    .map(({ flags, name, nativeName, capital, population, languages}) => {
      return `<div class="country">
  <div class="country__head">
    <img class="country__flag" src="${flags.svg}" alt="${name}">
    <h1 class="country__title">${nativeName}</h1>
  </div>
   <ul class="country__list">
    <li class="country__item">${capital}</li>
    <li class="country__item">${population}</li>
    
    <li class="country__item">${languages}</li>
   
   </ul>
</div> `;
    })
    .join("");
  refs.countryInfo.innerHTML = markup;
}

    function notFindError(error) {
        alert('Впишіть існуючу країну');
    }


