import { useState, useEffect } from "react";

function App() {

  //chiave
  const apiKey = import.meta.env.VITE_API_KEY;
  
  // query
  const [query, setQuery] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  //api
  const [dataApi, setDataApi] = useState(null);


  // valore dell'imput
  const [search, setSearch] = useState("");

  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataApi(data);
      });
  }, []);



  //quando scrivo nell'input ciò che scrivo diventa il suo valore
  const handleValue = (e) => {
    const searchT = e.target.value;
    setSearch(searchT);
    console.log(searchT);
  };

  // const [filterMovie, setFilterMovie] = useState([]);
  const filterMoviesSearch = (searchT) => {
    const filtered = dataApi?.results?.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchT.toLowerCase())
    );
    setFilterMovies(filtered);
  };

  // al clik del bottone deve essere mandata la richiesta
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleValue}
          placeholder="cerca il tuo film"
        />
        <button onClick={}>Cerca</button>
      </div>
      <div>
        <ul>
          {dataApi?.results?.map(
            ({ id, original_title, vote_average, original_language }) => {
              return (
                <li key={id}>
                  <div>Titolo: {original_title}</div>
                  <div>Titolo originale: {original_title}</div>
                  <div>Lingua: {original_language}</div>
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
