import React from 'react';
import {render} from 'react-dom';
import './style.css';
import {Header} from "./components/header/header";
import {Movie} from "./components/movie/movie";

const App = () => (
  <>
    <Header />
    <Movie
        title={"asd"}
        poster={"pulp-fiction.jpg"}
        rating={8.9}
    />
  </>
);

render(<App />, document.querySelector('#app'));
