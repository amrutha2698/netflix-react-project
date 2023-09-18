import React, { useEffect, useState } from "react";
import './Banner.css';
import instance from "../instance";



function Banner({fetchUrl}) {
  //image url
  const base_url = "https://image.tmdb.org/t/p/original/";

  const[movie,setMovie]=useState([])

  const getMovies= async()=>{
    //api call
  const {data} = await instance.get(fetchUrl)
  setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    //  console.log(data.result);
  }
  useEffect(()=>{
    getMovies()
  },[])
  console.log(movie);

    // console.log(fetchUrl);
  return (
    <div className="banner"
    style={
      {
        height:'500px',
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}/${movie.backdrop_path})`
      }
    }>
      <div className="banner-content">
        <h1 className="banner-title">{movie.name}</h1>
        <h2 className="banner-overview">{movie.overview}</h2>
      </div>

    </div>
  )
}

export default Banner