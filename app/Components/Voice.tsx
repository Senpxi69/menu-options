import React, { useState } from 'react';
import { Button } from '@mantine/core';
import AiVoiceData from './AiVoiceData';
import celebVoiceData from '../CelebVoiceData';
import VoiceCard from './VoiceCard';

function Voice() {
    const [selectedCeleb, setSelectedCeleb] = useState(true);
    const [selectedAI, setSelectedAI] = useState(false);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

    const handleCelebSelect = (buttonLabel, audioSource) => {
        setSelectedCeleb(buttonLabel);
        setSelectedAI(null);
        setCurrentlyPlaying(audioSource);
    };

    const handleAISelect = (buttonLabel, audioSource) => {
        setSelectedAI(buttonLabel);
        setSelectedCeleb(null);
        setCurrentlyPlaying(audioSource);
    };

    const handleCeleb = () => {
        setSelectedAI(false);
        setSelectedCeleb(true);
    };

    const handleAI = () => {
        setSelectedAI(true);
        setSelectedCeleb(false);
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
                {selectedAI ? (
                    AiVoiceData.map(({ buttonLabel, audioSource, imageSource }) => (
                        <VoiceCard
                            key={buttonLabel}
                            buttonLabel={buttonLabel}
                            audioSource={audioSource}
                            imageSource={imageSource}
                            isSelected={selectedAI === buttonLabel}
                            handleSelect={handleAISelect}
                            currentlyPlayingAudio={currentlyPlaying}
                            setCurrentlyPlaying={setCurrentlyPlaying}
                        />
                    ))
                ) : (
                    celebVoiceData.map(({ buttonLabel, audioSource, imageSource }) => (
                        <VoiceCard
                            key={buttonLabel}
                            buttonLabel={buttonLabel}
                            audioSource={audioSource}
                            imageSource={imageSource}
                            isSelected={selectedCeleb === buttonLabel}
                            handleSelect={handleCelebSelect}
                            currentlyPlayingAudio={currentlyPlaying}
                            setCurrentlyPlaying={setCurrentlyPlaying}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Voice;
