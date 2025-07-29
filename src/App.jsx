import { useState, useEffect } from "react";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  //api
  const [dataApi, setDataApi] = useState(null);
  // valore dell'imput
  const [search, setSearch] = useState("");

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
          <li>Titolo</li>
          <li>Titolo originale</li>
          <li>Lingua</li>
          <li>Voto</li>
        </ul>
      </div>
    </>
  );
}

export default App;
