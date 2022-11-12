import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect} from "react";

function Detail (){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
       <div>
            <h1><Link to="/">◀◀</Link> Detail: {movie.id} </h1>
            <div key={movie.id}>
                <img src={movie.large_cover_image} alt={movie.title} />
                <h2>{movie.title}</h2> 
                <p>{movie.description_full}</p>
            </div>
        </div>
    );
}
export default Detail