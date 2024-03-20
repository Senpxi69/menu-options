import React from 'react';
import { Paper, Slider } from '@mantine/core';
import StockVideo from './StockVideo';
import AiAvatarsData from './AiAvatarsData';
import Drop from '../Drop';
import Image from 'next/image';

function Media() {
    const topTenAvatar = AiAvatarsData.slice(0, 10);

    return (
        <div className="mt-3">
            <Drop />
            <p className='text-lg font-bold mb-2 mt-2'>Stock Video</p>
            <div className="flex overflow-x-auto">
                {StockVideo.map((video) => (
                    <div key={video.id} className="video-container mx-4">
                        <Paper
                            className="video-player relative rounded-lg shadow-lg"
                            style={{ width: "300px", height: "200px" }}
                        >
                            <video className="absolute inset-0 w-full h-full object-cover rounded-lg" controls>
                                <source src={video.video_link} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

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
                            <span className="absolute bottom-0 left-0 right-0 bg-white px-2 py-1 rounded-b-lg">
                                {avatar.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Media;
