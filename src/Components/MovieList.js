// import React from 'react';
// import MovieCard from './MovieCard';

// const MovieList = ({ title, movies }) => {
//   // Check if movies is null or undefined
//   if (!movies) {
//     return <div>Loading...</div>; // or handle null case
//   }

//   return (
//     <div className='px-6'>
//         <h1 className='text-3xl py-4'>{title}</h1>
//       <div className='flex overflow-x-scroll'>
//         <div className='flex'>
//           {movies.map(movie => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // Check if movies is null or undefined
  if (!movies) {
    return <div>Loading...</div>; // or handle null case
  }

  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex' style={{ overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className='flex'>
          {movies.map(movie => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
