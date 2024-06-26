import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();

    useEffect(() => {
      const getMovieVideos = async () => {
        try {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
          const json = await data.json();
          const filterData = json.results.filter((video) => video.type === 'Trailer');
          const trailer = filterData.length ? filterData[0] : json.results[0];

          dispatch(addTrailerVideo(trailer));
        } catch (error) {
          console.error('Error fetching movie videos:', error);
          // Handle error state if needed
        }
      };
  
      getMovieVideos();
    }, [dispatch, movieId]);
}
export default useMovieTrailer