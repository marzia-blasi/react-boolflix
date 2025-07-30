import { useState, useEffect } from "react";
import "country-flag-icons/react/3x2";
import "../public/country-flag-icons";

import langToCountry from "./db/langToCountry";

// Componenti
import LittleStar from "./components/LittleStar";
import Header from "./components/Header";

function App() {
  //chiave
  const apiKey = import.meta.env.VITE_API_KEY;

  // query
  const [query, setQuery] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  const urlTv = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;

  //api movie
  const [dataApi, setDataApi] = useState(null);

  // api tv

  const [dataApiTv, setDataApiTv] = useState(null);

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

  const [showCard, setShowCard] = useState(false);

  // function handleMouseEnter() {
  //   console.log("Mouse sopra la card");
  // }

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <div className="container">
        <div className="movie">
          <h2>Movie</h2>
          <ul className="row list-unstyled">
            {dataApi?.results?.map(
              ({
                id,
                original_title,
                vote_average,
                original_language,
                backdrop_path,
              }) => {
                return (
                  <li
                    key={id}
                    className="col-6 col-md-4 col-lg-3 p-2"
                    onMouseEnter={() => {
                      setShowCard(true);
                    }}
                    onMouseLeave={() => {
                      setShowCard(false);
                    }}
                  >
                    <div>
                      {!showCard ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w342/${backdrop_path}`}
                          alt={original_title}
                          className="cover"
                        />
                      ) : (
                        <div className="over">
                          <div>Titolo: {original_title}</div>
                          <div>Titolo originale: {original_title}</div>
                          <div>
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
                        </div>
                      )}
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
      </div>
    </>
  );
}

export default App;
