import React, { useState } from 'react';
import { Button } from '@mantine/core';
import AiVoiceData from './AiVoiceData';
import celebVoiceData from '../CelebVoiceData';
import VoiceCard from './VoiceCard';

interface VoiceData {
    buttonLabel: string;
    audioSource: string;
    imageSource: string;
}

function Voice() {
    const [selectedCeleb, setSelectedCeleb] = useState<string | null>(null);
    const [selectedAI, setSelectedAI] = useState<string | null>(null);
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

    const handleCelebSelect = (buttonLabel: string, audioSource: string) => {
        setSelectedCeleb(buttonLabel);
        setSelectedAI(null);
        setCurrentlyPlaying(audioSource);
    };

    const handleAISelect = (buttonLabel: string, audioSource: string) => {
        setSelectedAI(buttonLabel);
        setSelectedCeleb(null);
        setCurrentlyPlaying(audioSource);
    };

    const handleCeleb = () => {
        setSelectedAI(null);
        setSelectedCeleb('Celeb Voices');
    };

    const handleAI = () => {
        setSelectedAI('Actors Voices');
        setSelectedCeleb(null);
    };

    return (
        <div>
            <div className="shadow-md rounded-md p-2 mt-5 flex justify-around mb-5">
                <Button
                    className={`px-4 py-2 rounded-md focus:outline-none ${selectedCeleb ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}
                    onClick={handleCeleb}
                >
                    Celeb Voices
                </Button>

                <Button
                    className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${selectedAI ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}
                    onClick={handleAI}
                >
                    Actors Voices
                </Button>
            </div>

            <div className='shadow-md'>
                {(selectedAI ? AiVoiceData : celebVoiceData).map((voiceData: VoiceData) => (
                    <VoiceCard
                        key={voiceData.buttonLabel}
                        buttonLabel={voiceData.buttonLabel}
                        audioSource={voiceData.audioSource}
                        imageSource={voiceData.imageSource}
                        isSelected={selectedAI === voiceData.buttonLabel || selectedCeleb === voiceData.buttonLabel}
                        handleSelect={selectedAI ? handleAISelect : handleCelebSelect}
                        currentlyPlayingAudio={currentlyPlaying}
                        setCurrentlyPlaying={setCurrentlyPlaying}
                    />
                ))}
            </div>
        </div>
    );
}

export default Voice;
