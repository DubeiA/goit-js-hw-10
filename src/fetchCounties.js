export default function findName(country) {
   
    const urlCountry = `https://restcountries.com/v3.1/name/${country}`
    
    return fetch(urlCountry).then(response => response.json());
    
}