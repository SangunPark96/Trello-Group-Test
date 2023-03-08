import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/shows/common/Footer";
import Home from "./components/shows/home/Home";
import Nav from "./components/shows/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/showsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
// import Movie from "./components/movies/Movie";
// import MoviesIndex from "./components/movies/MoviesIndex";
// import MoviesEditForm from "./components/movies/MoviesEditForm";
// import MoviesNewForm from "./components/movies/MoviesNewForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
          {/* <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/:id/edit" element={<MoviesEditForm />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
