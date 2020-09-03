import React from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
/* import Iframe from "react-iframe"; */
import CardList from "./Components/CardList/CardList";
import GitHubButton from "react-github-btn";

function App() {
  return (
    <div className="App">
      <Logo />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <GitHubButton
          href="https://github.com/vimaljais"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="small"
          aria-label="Made by Vimal Jaiswal"
        >
          Made by Vimal Jaiswal
        </GitHubButton>
      </div>
      <CardList />

      {/*       <CardList queryString={queryString} /> */}
      {/*       <Iframe
        url="https://databasegdriveplayer.xyz//player.php?imdb=tt1285016"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      /> */}
    </div>
  );
}

export default App;
