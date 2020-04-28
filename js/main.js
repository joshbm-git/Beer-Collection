("use strict");

// =========== Beer functionality =========== //
/*
global variables: _beers
*/
let _beers = [];

/*
Fetches json data from the file beers.json
*/
fetch("json/beers.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    _beers = json;
    appendBeers(json);
  });

function appendBeers(beers) {
  let htmlTemplate = "";
  for (let beer of beers) {
    htmlTemplate += `
    <a href="#beer">
    <article>
    <figure>
    <img src="${beer.img}">
    <h4>${beer.name}</h4>
    </figure>

  </article>
  </a>
  
    `;
  }
  document.querySelector("#home-container").innerHTML = htmlTemplate;
}

function addNewBeer() {
  let name = document.querySelector("#name").value;
  let brewery = document.querySelector("#name_breweries").value;
  let img = document.querySelector("#img").value;

  if (name && brewery && img) {
    _beers.push({
      name,
      brewery,
      img,
    });

    appendBeers(_beers);
    navigateTo("home");
    document.querySelector("#name").value = "";
  } else {
    alert("Please fill out all fields");
  }
}

function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredBeers = [];
  for (let beer of _beers) {
    let name = beer.name.toLowerCase();
    let brewery = beer.name_breweries.toLowerCase();
    if (name.includes(searchQuery) || brewery.includes(searchQuery)) {
      filteredBeers.push(beer);
    }
  }
  appendBeers(filteredBeers);
}
