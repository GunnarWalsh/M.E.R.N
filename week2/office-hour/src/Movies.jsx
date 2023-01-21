import React from "react";

const Movies = (props) =>{
    return (
        <div>
            <h1>{props.movieTitle}</h1>
            <p>{props.movieYear}</p>
            <p>{props.movieGenre}</p>
            <p>{props.movieSale}</p>
        </div>
    )
}
export default Movies;