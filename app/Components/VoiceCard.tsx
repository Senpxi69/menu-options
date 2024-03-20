import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface VoiceCardProps {
    buttonLabel: string;
    audioSource: string;
    imageSource: string;
    isSelected: boolean;
    handleSelect: (buttonLabel: string, audioSource: string) => void;
    currentlyPlayingAudio: string | null;
    setCurrentlyPlaying: (audioSource: string | null) => void;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ buttonLabel, audioSource, imageSource, isSelected, handleSelect, currentlyPlayingAudio, setCurrentlyPlaying }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleCardClick = () => {
        handleSelect(buttonLabel, audioSource);
    };

    useEffect(() => {
        if (audioRef.current && audioSource !== currentlyPlayingAudio && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, [audioSource, currentlyPlayingAudio, isPlaying]);

    const handleButtonClick = () => {
        if (!isPlaying) {
            audioRef.current?.play();
            setIsPlaying(true);
            setCurrentlyPlaying(audioSource);
        } else {
            audioRef.current?.pause();
            setIsPlaying(false);
            setCurrentlyPlaying(null);
        }
    };

    return (
        <div className={`card z-10 bg-white rounded-lg p-4 mb-4 ${isSelected ? 'ring-4 ring-green-500' : ''}`} onClick={handleCardClick}>
            <div className="flex justify-between items-center">
                <button className="flex justify-around items-center w-10 h-10" onClick={handleButtonClick}>
                    <Image alt="Play Icon" loading="lazy" width={30} height={30} decoding="async" src={isPlaying ? "https://playtht-website-assets.s3.amazonaws.com/img/icons/pause-btn.svg" : "https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"} />
                </button>
                <span className="font-medium text-sm">{buttonLabel}</span>
                <div className="flex items-center">
                    <img alt={buttonLabel} loading="lazy" width={40} height={40} decoding="async" src={imageSource} />
                </div>
            </div>
            <audio preload="none" ref={audioRef} src={audioSource}></audio>
        </div>
    );
};

export default VoiceCard;
