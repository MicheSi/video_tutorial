import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import mordecai from '../media/mordecai.mp4';

const VideoPlayer = () => {
    return (
        <div className='mordecaiVideo'>
            <Player playsInline src={mordecai}>
                <BigPlayButton position='center' />
            </Player>
        </div>
        
    )
}

export default VideoPlayer;