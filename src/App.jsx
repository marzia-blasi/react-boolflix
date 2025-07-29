import { useState, useEffect } from "react";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const query = "";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  //api
  const [dataApi, setDataApi] = useState(null);
  // valore dell'imput
  const [search, setSearch] = useState("");

  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataApi(data);
      });
  }, []);

  const handleValue = (e) => {
    const searchT = e.target.value;
    setSearch(searchT);
    console.log(searchT);
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
        <button>Cerca</button>
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
