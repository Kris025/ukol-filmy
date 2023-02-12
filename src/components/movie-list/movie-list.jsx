import React from "react";
import {Movie} from "../movie/movie";

export const MovieList = ({ movies }) => (
    <div className={"movieList"}>
        {movies.map(movie =>
            <Movie
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                rating={movie.rating}
                year={movie.year}
                genre={movie.genre}
                director={movie.director}
                cast={movie.cast}
            />)}
    </div>
);