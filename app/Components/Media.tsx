import React, { useState } from 'react';
import { Paper, Slider } from '@mantine/core';
import StockVideo from './StockVideo';
import AiAvatarsData from './AiAvatarsData';
import Drop from '../Drop';
import ReactPlayer from 'react-player';

function Media() {
    const topTenAvatar = AiAvatarsData.slice(0, 10);
    const [hoveredVideo, setHoveredVideo] = useState(null);

    const handleMouseEnter = (videoId) => {
        setHoveredVideo(videoId);
    };

    const handleMouseLeave = () => {
        setHoveredVideo(null);
    };

    return (
        <div className="mt-3">
            <Drop />
            <p className='text-lg font-bold mb-2 mt-2'>Stock Video</p>
            <div className="flex overflow-x-auto">
                {StockVideo.map((video) => (
                    <div key={video.id} className="video-container mx-4">
                        <Paper
                            className="video-player relative rounded-lg shadow-lg"
                            style={{ width: "142px", height: "80px" }}
                            key={video.id}
                            onMouseEnter={() => handleMouseEnter(video.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ReactPlayer
                                url={video.video_link}
                                playing={hoveredVideo === video.id}
                                controls={false}
                                loop={true}
                                width="100%"
                                height="100%"
                                style={{ borderRadius: '10px' }}
                            />
                        </Paper>
                    </div>
                ))}
            </div>

            <Slider className="mt-4" />
            <p className='text-lg font-bold mt-3'>Ai Creators</p>
            <div className="overflow-x-auto">
                <div className="flex space-x-8 p-4">
                    {topTenAvatar.map((avatar) => (
                        <div key={avatar.id} className="relative">
                            <div className="w-24 h-24 overflow-hidden rounded-lg border border-gray-200">
                                <img
                                    src={avatar.img_link}
                                    alt={`Avatar ${avatar.id}`}
                                    width={100}
                                    height={100}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Media;
