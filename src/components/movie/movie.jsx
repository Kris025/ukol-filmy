import React from "react";

export const Movie = ({ title, poster, year, rating, director, genre, cast }) => (
    <div className={"movieWrapper"}>
        <div className={"rating"}>
            {rating} <small>/10</small>
        </div>
        <img className={"poster"} src={"../../assets/" + poster} alt={"poster"} />
        <div className={"stats"}>
            <h2 className={"title"}>{title}</h2>
            <div><b>Rok vydání:</b> {year}</div>
            <div><b>Žánr:</b> {genre}</div>
            <div><b>Režie:</b> {director}</div>
        </div>
    </div>
);