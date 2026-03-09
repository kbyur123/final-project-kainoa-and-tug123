import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import Card from "./components/Card.jsx";
import AboutMeCard from "./components/AboutMeCard.jsx";
import InterestCard from "./components/InterestCard.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to my website!</h2>
        <Food />
      </main>
      <Footer />
      <Card />
      <AboutMeCard />
      <InterestCard />
    </div>
  );
}

export default App;
