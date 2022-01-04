import { Fragment } from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import "../../../customStyles/Header.css";

const styleLogo = {
  color: "darkgray",
  fontSize: "40px",
};

function Header() {
  return (
    <Fragment>
      <header>
        <h1>
          <LocalMoviesIcon sx={{ ...styleLogo }} /> The Movies
        </h1>
      </header>
    </Fragment>
  );
}

export default Header;
