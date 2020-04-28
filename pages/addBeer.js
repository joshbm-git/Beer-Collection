import beerService from "../services/beer.js";
export default class AddBeerPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let beers = await beerService.loadBeers();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="addBeer" class="page">
        <header class="topbar">
          <h2>Beer Collection</h2>
        </header>
        <form>
      <input id="name" type="text" name="name" placeholder="Name">
      <input id="name_breweries" type="text" name="brewery" placeholder="Brewery">
      <input id="img" type="text" name="img" placeholder="Image URL">
      <button type="button" name="button" onclick="addNewProduct()">Save</button>
    </form>
      </section>
    `;
  }
}
