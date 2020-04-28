import beerService from "../services/beer.js";
export default class HomePage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let beers = await beerService.loadBeers();
    this.appendBeers(beers);
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
        <header class="topbar">
          <h2>Beer Collection</h2>
        </header>
        <div id="grid-beers" class="grid-container"></div>
      </section>
    `;
  }

  appendBeers(beers) {
    let template = "";
    for (let beer of beers) {
      template += /*html*/ `
        <article>
          <img src="${beer.img}">
          <h4>${beer.name}</h4>
          <h4>${beer.name_breweries}</h4>
        </article>
        `;
    }
    document.querySelector("#grid-beers").innerHTML = template;
  }

  addNewProduct() {
    let name = document.querySelector("#name").value;
    let brewery = document.querySelector("#name_breweries").value;
    let img = document.querySelector("#img").value;

    if (name && brewery && img) {
      json.push({
        name,
        brewery,
        img,
      });

      appendBeers(jsonData);
      navigateTo("home");
      document.querySelector("#name").value = "";
    } else {
      alert("Please fill out all fields");
    }
  }
}
