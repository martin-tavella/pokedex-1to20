import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokeData(data.results));
  }, []);

  const pokemonFiltrados = pokeData.filter((pokeData) =>
    pokeData.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center">1-20 Pokedex</h1>
      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />
      <div class="poke-container">
        {pokemonFiltrados.map((pokeData, index) => (
          <a
            href={`https://www.wikidex.net/wiki/${pokeData.name}`}
            target="_blank"
          >
            <div key={pokeData[index]} class="pokeCards">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
              />
              <div>
                <h5>{pokeData.name}</h5>
                <p>{`Pokedex: ${index + 1}`}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
