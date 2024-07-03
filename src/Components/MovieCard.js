import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMAGE_CDN+posterPath} alt='Image'></img>
    </div>
  )
}

export default MovieCard
