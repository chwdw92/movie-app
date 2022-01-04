import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";

const styleBottomNavigContainer = {
  position: "fixed",
  bottom: 0,
  width: "100%",
};

const CustomBottomNavigation = () => {
  const [navVal, setNavValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (navVal) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/series");
        break;
      default:
        navigate("/");
    }
  }, [navVal]);

  return (
    <Box sx={{ ...styleBottomNavigContainer }}>
      <BottomNavigation
        showLabels
        value={navVal}
        onChange={(event, newNavValue) => {
          setNavValue(newNavValue);
        }}
      >
        <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default CustomBottomNavigation;
