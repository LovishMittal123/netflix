import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies.addNowPlayingMovies)
    
    // Check if movies is null or undefined
    if (!movies) return null;
    
    // Check if movies array has elements
    if (movies.length === 0) return null;

    const mainMovie = movies[0];
    const{original_title,overview,id}=mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer
