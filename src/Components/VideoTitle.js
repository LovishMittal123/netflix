import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-24  absolute text-white bg-gradient-to-r from-black w-screen aspect-video '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h1 className='py-6 text-lg w-1/4'>{overview}</h1>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80'>&#9655; Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ml-2'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
