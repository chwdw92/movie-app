import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/commons/layouts/Header";
import CustomBottomNavigation from "./components/commons/layouts/CustomBottomNavigation";
import MovieSearch from "./components/pages/MovieSearch";
import SeriesSearch from "./components/pages/SeriesSearch";
import NotFound from "./components/pages/NotFound";
import Loading from "./components/commons/layouts/Loading";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container>
            <Header />
            <main>
              {loading ? <Loading /> : ""}
              <Routes>
                <Route
                  path="/"
                  element={
                    <MovieSearch loading={loading} setLoading={setLoading} />
                  }
                />
                <Route
                  path="/series"
                  element={
                    <SeriesSearch loading={loading} setLoading={setLoading} />
                  }
                />
              </Routes>
            </main>
          </Container>
          <CustomBottomNavigation />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
