import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-cards")
      .then((response) => setCards(response.data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div className="App">
      <Header setCards={setCards} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardGrid searchQuery={searchQuery} cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
