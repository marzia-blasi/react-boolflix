import { useState } from "react";

export default function Header({ query, setQuery }) {
  // valore dell'imput
  const [search, setSearch] = useState("");

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

  return (
    <>
      <header>
        <div>
          <img src="../public/boolflix_logo.png" alt="boolflix_logo" />
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={handleValue}
            placeholder="cerca il tuo film"
          />
          <button onClick={handleSubmit}>Cerca</button>
        </div>
      </header>
    </>
  );
}
