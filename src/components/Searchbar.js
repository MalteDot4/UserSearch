import { useState, useEffect } from "react";
import "../App.css";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

function Searchbar(props) {
  const [user, setUser] = useState();

  function handleUserInput(e) {
    setUser(e.target.value);
  }

  function onSearchHandler() {
    props.setUserName(user);
    setUser("");
  }

  const onEnter = (e) => {
    if (e.key === "Enter") onSearchHandler();
  };
  return (
    <div className="search-bar">
      <div className="search-bar__input-container">
        <SearchIcon></SearchIcon>
        <input
          type="text"
          value={user}
          className="search-bar__user-input"
          placeholder="Search GitHub username…"
          onKeyDown={(e) => onEnter(e)}
          onChange={(e) => handleUserInput(e)}
        ></input>
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={onSearchHandler} className="search-bar__button">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
