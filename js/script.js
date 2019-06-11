const url = 'https://restcountries.eu/rest/v2/name/';
const countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    let countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        // .then(function(resp) {  
        //     resp.reverse()
        //     })
        // .then(doFilter)
        .then(showCountriesList)  
};

function doFilter(resp) { 
    resp.reverse();
};

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
        const liEl = document.createElement('li');
        liEl.innerText = item.name + ', ' + "Capital: " + item.capital;
        countriesList.appendChild(liEl);
    });
};

