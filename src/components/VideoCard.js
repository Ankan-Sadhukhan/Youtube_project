import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,thumbnails,title}=snippet; 
  return (
    <div className='w-72 m-2 p-1 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;