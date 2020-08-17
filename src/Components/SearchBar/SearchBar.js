import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: "85vw",
      maxWidth: "700px",
      "& .MuiFormLabel-root": {
        color: "rgba(255,255, 255, 0.54)", // or black
      },
      "& .MuiInputBase-input": {
        color: "whitesmoke", // or black
      },
    },
  },
}));

const scrollToRef = (ref) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const SearchBar = (props) => {
  const classes = useStyles();
  const myRef = useRef(null);

  const handleChange = (val) => {
    props.setQueryString(val);
    if (val.length > 0) {
      scrollToRef(myRef);
    }
  };

  const clearInput = () => {
    props.setQueryString("");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        value={props.queryString}
        label="Search Movie"
        variant="filled"
        onChange={(e) => handleChange(e.target.value)}
        InputProps={
          props.queryString.length > 0
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      style={{ color: "rgba(255,255, 255, 0.54)" }}
                      onClick={() => clearInput()}
                    >
                      Clear
                    </Button>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </form>
  );
};

export default SearchBar;
