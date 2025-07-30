import { useState, useEffect } from "react";
import "country-flag-icons/react/3x2";
import "../public/country-flag-icons";
import LittleStar from "./components/LittleStar";

function App() {
  //chiave
  const apiKey = import.meta.env.VITE_API_KEY;

  // query
  const [query, setQuery] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  const urlTv = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;

  // valore dell'imput
  const [search, setSearch] = useState("");

  //api movie
  const [dataApi, setDataApi] = useState(null);

  // api tv

  const [dataApiTv, setDataApiTv] = useState(null);

  //quando scrivo nell'input ciò che scrivo diventa il suo valore
  const handleValue = (e) => {
    setSearch(e.target.value);
    console.log(setSearch);
  };

  // al clik del bottone deve essere mandata la richiesta
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  // Movies
  useEffect(() => {
    if (!query) return;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataApi(data);
      });
  }, [query]);

  // serie TV
  useEffect(() => {
    if (!query) return;
    fetch(urlTv)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataApiTv(data);
      });
  }, [query]);

  // const [filterMovie, setFilterMovie] = useState([]);
  const filterMoviesSearch = (searchT) => {
    const filtered = dataApi?.results?.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchT.toLowerCase())
    );
    setFilterMovies(filtered);
  };
  // alcune nazioni non hanno il giusto codice
  const langToCountry = {
    en: "gb",
    it: "it",
    fr: "fr",
    de: "de",
    es: "es",
    ja: "jp",
    ko: "kr",
    zh: "cn",
    ru: "ru",
    hi: "in",
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={handleValue}
          placeholder="cerca il tuo film"
        />
        <button onClick={handleSubmit}>Cerca</button>
      </div>
      <div className="movie">
        <h2>Movie</h2>
        <ul>
          {dataApi?.results?.map(
            ({
              id,
              original_title,
              vote_average,
              original_language,
              backdrop_path,
            }) => {
              return (
                <li key={id}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${backdrop_path}`}
                      alt={original_title}
                    />
                  </div>
                  <div>Titolo: {original_title}</div>
                  <div>Titolo originale: {original_title}</div>
                  <div>
                    <span
                      className={`fi fi-${langToCountry[original_language]}`}
                      style={{
                        width: "32px",
                        height: "24px",
                        display: "inline-block",
                        marginRight: "8px",
                      }}
                    ></span>
                    <div>
                      <img
                        src={`https://flagcdn.com/24x18/${langToCountry[original_language]}.png`}
                        alt={original_language}
                        style={{ marginRight: "8px" }}
                      />
                    </div>
                    Lingua: {original_language}
                  </div>
                  <div>Voto: {vote_average}</div>

                  <div>
                    <LittleStar vote={vote_average} />
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="tv">
        <h2>TV Show</h2>
        <ul>
          {dataApiTv?.results?.map(
            ({
              id,
              original_name,
              name,
              vote_average,
              original_language,
              poster_path,
            }) => {
              return (
                <li key={id}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                      alt={original_name}
                    />
                  </div>
                  <div>Titolo: {name}</div>
                  <div>Titolo originale: {original_name}</div>
                  <div>
                    <span
                      className={`fi fi-${langToCountry[original_language]}`}
                      style={{
                        width: "32px",
                        height: "24px",
                        display: "inline-block",
                        marginRight: "8px",
                      }}
                    ></span>
                    <div>
                      <img
                        src={`https://flagcdn.com/24x18/${langToCountry[original_language]}.png`}
                        alt={original_language}
                        style={{ marginRight: "8px" }}
                      />
                    </div>
                    Lingua: {original_language}
                  </div>
                  <div>Voto: {vote_average}</div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
}

export default App;

// <i class="fa-solid fa-star"></i>
// <i class="fa-regular fa-star"></i>
