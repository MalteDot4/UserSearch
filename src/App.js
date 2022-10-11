import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import UserCard from "./components/UserCard";
import useFetchUser from "./hooks/useFetchUser";
import { apiConfig } from "./api/configData";

function App() {
  const [userName, setUserName] = useState(apiConfig.defaultUser);
  const [theme, setTheme] = useState("light-theme");
  const { data, error } = useFetchUser(userName);

  const onToggleTheme = () => {
    setTheme((curr) => (curr === "light-theme" ? "dark-theme" : "light-theme"));
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header theme={theme} onToggleTheme={onToggleTheme}></Header>
      <Searchbar
        error={error}
        theme={theme}
        setUserName={(userName) => setUserName(userName)}
      ></Searchbar>
      <div className="main-content">
        <UserCard theme={theme} profileData={data}></UserCard>
      </div>
    </div>
  );
}

export default App;
