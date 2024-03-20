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
                    <div key={video.id} className="video-container mx-4 rounded-lg overflow-y">
                        <Paper padding="sm" className="video-player" style={{ width: "300px", height: "200px" }}>
                            <video className="w-full h-full transition-transform transform-gpu hover:scale-95" controls style={{ width: "100%", height: "100%" }}>
                                <source src={video.video_link} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Paper>
                    </div>
                ))}
            </div>

            <Slider defaultValue={[0, 100]} className="mt-4" />
            <p className='text-lg font-bold mt-3'>Ai Creators</p>
            <div className="overflow-x-auto">
                <div className="flex space-x-8 p-4">
                    {topTenAvatar.map((avatar) => (
                        <div key={avatar.id} className="flex flex-col items-center">
                            <div className="w-24 h-24 overflow-hidden rounded-lg mb-2">
                                <Image
                                    src={avatar.img_link}
                                    alt={`Avatar ${avatar.id}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="text-sm">{avatar.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Media;
