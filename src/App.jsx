import { useState, useEffect } from "react";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <input type="text" />
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
