import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import "./CardList.css";
import Grid from "@material-ui/core/Grid";
import MovieModal from "../MovieModal/MovieModal";
import MovieSkeleton from "../MovieSkeleton/MovieSkeleton";
import Paginate from "../Pagination/Pagination";

const CardList = () => {
  const [queryString, setQueryString] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [shouldModalDisplay, setModalDisplay] = useState(false);
  const [tmdb_id, setId] = useState("");

  const openModal = async (id) => {
    setModalDisplay(true);
    setId(id);
  };

  const closeModal = () => {
    setModalDisplay(false);
  };

  /*   const getId = async (id) => {
    const resp = await fetch(`tmdb-data?id=${id}`);
    const respJSON = await resp.json();
    const imdbId = respJSON.imdb_id;
    const videoUrl = `https://database.gdriveplayer.us/player.php?imdb=${imdbId}`;
    window.open(videoUrl);
  };
 */
  const [num_pages_results, setNumPagesAndResults] = useState({
    total_pages: 0,
    total_results: 0,
    present_results: 0,
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const cardArray = list.map((user, i) => {
    return (
      <Card
        key={i}
        id={list[i].id}
        title={list[i].title}
        year={list[i].release_date}
        imageUrl={list[i].poster_path}
        openModal={openModal}
      />
    );
  });

  const onSearchChange = (value) => {
    setQueryString(value);
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (queryString.length === 0) {
      setNumPagesAndResults({
        total_pages: 0,
        total_results: 0,
        present_results: 0,
      });
      setLoading(true);
    }

    if (queryString.length > 0) {
      setLoading(true);
      const getmovies = async (query) => {
        try {
          const res = await fetch(
            `https://arcane-sierra-37425.herokuapp.com/getmovies/?qs=${queryString}&page=${page}`,
            {
              signal: abortController.signal,
            }
          );
          if (res.status >= 200 && res.status < 400) {
            const resJSON = await res.json();
            const { results, total_pages, total_results } = resJSON;
            setList(results);

            const present_results = results.length;
            setNumPagesAndResults({
              total_pages,
              total_results,
              present_results,
            });
            setLoading(false);

            if (results && results.length === 0) {
              console.log("no movies found");
            } else {
              setLoading(false);
            }
          }
        } catch (error) {
          if (abortController.signal.aborted) {
            console.log("Request aborted. Clean up called.");
          } else {
            console.log(error);
          }
        }
      };
      getmovies(queryString);
      return () => {
        abortController.abort();
      };
    }
  }, [queryString, page, setNumPagesAndResults]);

  return (
    <div>
      <SearchBar
        queryString={queryString}
        setQueryString={setQueryString}
        onSearchChange={onSearchChange}
      />
      {num_pages_results.total_results > 0 ? (
        <Paginate
          present_results={num_pages_results.present_results}
          total_pages={num_pages_results.total_pages}
          total_results={num_pages_results.total_results}
          handleChange={handlePageChange}
        />
      ) : null}
      <Grid
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          justifyContent: "center",
        }}
        container
        spacing={3}
      >
        {isLoading && queryString.length > 0
          ? Array.from(new Array(10)).map((item, index) => (
              <MovieSkeleton key={index} />
            ))
          : cardArray}
      </Grid>
      {shouldModalDisplay ? (
        <MovieModal
          shouldModalDisplay={shouldModalDisplay}
          tmdb_id={tmdb_id}
          closeModal={closeModal}
        />
      ) : null}
    </div>
  );
};

export default CardList;
