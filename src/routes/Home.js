import React from 'react';
import { useEffect } from "react";
import NavBar from "./layout/NavBar";
import { useTitle } from "../components/Hooks";
import styles from "./Style.module.css";

const Home = () => {

    // //useTitle
    //const titleUpdater = useTitle("Loading....");
     
    // //movie API
    // const getMovies = async () => {
    //     const callapi = await fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    //     )
    //     const json = await callapi.json();
    //     titleUpdater("Home");
    // };
    // useEffect(() => getMovies(), []);     // useEffect(getMovies, []);
    
    return (
        <div className={styles.container}>
            <NavBar /> 

            <div className={styles.section}>
                <h3>세상을 구하는 기술. 컵링크</h3>
            </div> 
        </div>
    );
}

export default Home;