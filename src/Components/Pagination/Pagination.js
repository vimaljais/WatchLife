import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      color: "white",
    },
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
    "& .MuiPaginationItem-root": {
      color: "whitesmoke",
    },
  },
}));

const Paginate = ({
  present_results,
  total_results,
  total_pages,
  page,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        marginTop: "15px",
        color: "white",
        marginBottom: "25px",
      }}
    >
      <h3
        style={{ cursor: "default" }}
      >{`Showing ${present_results} of ${total_results} results`}</h3>
      <Pagination
        count={total_pages}
        page={page}
        color="secondary"
        onChange={handleChange}
      />
    </div>
  );
};

export default Paginate;
