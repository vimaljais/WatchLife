import React, { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [queryString, setQueryString] = useState("");
  const [page, setPage] = useState(1);
  const [num_pages_results, setNumPagesAndResults] = useState({
    total_pages: 0,
    total_results: 0,
    present_results: 0,
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="App">
      <Logo />
      <SearchBar queryString={queryString} setQueryString={setQueryString} />
    </div>
  );
}

export default App;
