import logo from "./logo.svg";
import "./App.css";
import Navigation from "../src/Components/Navigation/Navigation";
import Cards from "./Components/Cards/Cards";
import Services from "./Components/Services/Services";
import Products from "./Components/Products/Products";
import HomePage from "./Components/HomePage/HomePage";
import BannerPage from "./Components/BannerPage/BannerPage";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <Cards />
      <Services />
      <BannerPage />
      <Products />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
