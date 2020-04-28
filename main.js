// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import AddBeerPage from "./pages/addBeer.js";

import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let addBeerPage = new AddBeerPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();

window.addNewProduct = () => homePage.addNewProduct();
