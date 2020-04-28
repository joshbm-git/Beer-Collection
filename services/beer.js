class BeerService {
  constructor() {}

  async loadBeers() {
    try {
      let response = await fetch("json/beers.json");
      let jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
}

const beerService = new BeerService();
export default beerService;
