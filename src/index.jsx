import React from 'react';
import {render} from 'react-dom';
import './style.css';
import {Header} from "./components/header/header";
import {movies} from "./movies";
import {MovieList} from "./components/movie-list/movie-list";

const App = () => (
  <>
    <Header />
    <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
