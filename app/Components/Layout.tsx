"use client"
import React, { useState } from 'react';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import TitleSharpIcon from '@mui/icons-material/TitleSharp';
import CallToActionSharpIcon from '@mui/icons-material/CallToActionSharp';
import TableChartSharpIcon from '@mui/icons-material/TableChartSharp';
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import Drop from '../Drop';
import Voice from './Voice';
import TextToSpeech from './TextToSpeech';
import VoiceClone from './VoiceClone';
import TextArea from './TextArea';
import Media from './Media';

const Layout = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isTextAreaVisible, setIsTextAreaVisible] = useState(false);
    const [isVoiceAreaVisible, setIsVoiceAreaVisible] = useState(false);

    const handleClick = (section) => {
        setActiveSection(section);
        setIsTextAreaVisible(false);
        setIsVoiceAreaVisible(false);
    };

    const toggleTextArea = () => {
        setIsTextAreaVisible(!isTextAreaVisible);
        setIsVoiceAreaVisible(false);
    };

    const toggleVoiceArea = () => {
        setIsVoiceAreaVisible(!isVoiceAreaVisible);
        setIsTextAreaVisible(false);
    };

    return (
        <div className="flex h-screen relative justify-evenly py-2 rounded-lg">
            <div className="bg-neutral-300 text-white w-20 flex flex-col items-center justify-around z-20">
                <button
                    className={`py-2 px-4 rounded-full focus:outline-none ${activeSection === 'home' ? 'bg-blue-500 text-gray-100' : 'text-gray-400 hover:bg-gray-400'}`}
                    onClick={() => handleClick('home')}
                >
                    <HomeSharpIcon />
                </button>
                <button
                    className={`py-2 px-4 rounded-full focus:outline-none ${activeSection === 'translate' ? 'bg-blue-500 text-gray-100' : 'text-gray-400 hover:bg-gray-400'}`}
                    onClick={() => handleClick('translate')}
                >
                    <TranslateSharpIcon />
                </button>
                <button
                    className={`py-2 px-4 rounded-full focus:outline-none ${activeSection === 'media' ? 'bg-blue-500 text-gray-100' : 'text-gray-400 hover:bg-gray-400'}`}
                    onClick={() => handleClick('media')}
                >
                    <AddBoxSharpIcon />
                </button>
                <button className="py-2 px-4 rounded-full focus:outline-none text-gray-400 hover:bg-gray-400">
                    <MusicNoteSharpIcon />
                </button>
                <button className="py-2 px-4 rounded-full focus:outline-none text-gray-400 hover:bg-gray-400">
                    <CallToActionSharpIcon />
                </button>
                <button className="py-2 px-4 rounded-full focus:outline-none text-gray-400 hover:bg-gray-400">
                    <TitleSharpIcon />
                </button>
                <button className="py-2 px-4 rounded-full focus:outline-none text-gray-400 hover:bg-gray-400">
                    <TableChartSharpIcon />
                </button>
                <button className="py-2 px-4 rounded-full focus:outline-none text-gray-400 hover:bg-gray-400">
                    <VideocamSharpIcon />
                </button>
                <button className="py-2 px-4 rounded-full focus:outline-none text-gray-400 hover:bg-gray-400">
                    <QuestionMarkSharpIcon />
                </button>
            </div>
            <div className="flex-grow bg-gray-200 p-4 z-0">
            </div>
            <div className={`fixed h-full bg-gray-100 w-1/4 p-4 z-10 m-2 ${activeSection !== 'home' && activeSection !== 'translate' && activeSection !== 'media' ? '-left-full' : 'left-20'}`} style={{ overflowY: 'auto' }}>
                <style>
                    {`
                    ::-webkit-scrollbar {
                        width: 8px;
                    }
                    ::-webkit-scrollbar-track {
                        background: #f1f1f1; 
                    }
                    ::-webkit-scrollbar-thumb {
                        background: #a0aec0; 
                        border-radius: 4px;
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background: #718096;
                    }
                `}
                </style>
                <h2 className="text-xl font-bold mb-2">Side Section</h2>

                {activeSection === 'home' && (
                    <div>
                        <h3 className="text-lg font-bold mb-2">Home Section</h3>
                        <p>This is the home section content. Replace this text with your actual content.</p>
                    </div>
                )}
                {activeSection === 'translate' && (
                    <div>
                        <h3 className="text-lg font-bold mb-2 " style={{ overflowY: 'auto' }}>Translate Section</h3>
                        <Drop />
                        <div className="flex space-x-4">
                            <TextToSpeech onClick={toggleTextArea} />
                            <VoiceClone onClick={toggleVoiceArea} />
                        </div>
                        {isTextAreaVisible && (
                            <TextArea />
                        )}
                        {isVoiceAreaVisible && (
                            <Voice />
                        )}
                    </div>
                )}
                {activeSection === 'media' && (
                    <div>
                        <h3 className="text-lg font-bold mb-2">Media Section</h3>
                        <div className="flex space-x-4">
                            <TextToSpeech onClick={toggleTextArea} />
                            <VoiceClone onClick={toggleVoiceArea} />
                        </div>
                        {isTextAreaVisible && (
                            <TextArea />
                        )}
                        {isVoiceAreaVisible && (
                            <Voice />
                        )}
                        <Media />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Layout;
