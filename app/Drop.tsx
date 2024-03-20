import React, { useRef, useState } from 'react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useMantineTheme } from '@mantine/core';

function Drop() {
    const theme = useMantineTheme();
    const openRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <Dropzone
                className={` ${isHovered ? 'bg-gray-400' : ''} hover:border-blue-500`}
                openRef={openRef}
                onDrop={(files) => {
                    console.log('Dropped files:', files);
                }}
                accept={[MIME_TYPES.pdf]}
                maxSize={30 * 1024 ** 2}
                style={{
                    padding: '20px',
                    border: `2px dashed ${theme.colors.dark[6]}`,
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: isHovered ? '#cbd5e0' : 'transparent', // Change background color on hover
                }}
                onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
                onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
            >
                <p style={{ margin: '0' }}>Drag and drop files here or click to select</p>
            </Dropzone>
        </div>
    );
}

export default Drop;
