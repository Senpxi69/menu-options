import React, { useRef, useState } from 'react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useMantineTheme } from '@mantine/core';

function Drop() {
    const theme = useMantineTheme();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <Dropzone
                className={` ${isHovered ? 'bg-gray-400' : ''} hover:border-blue-500`}
                onDrop={(files: File[]) => {
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
                    backgroundColor: isHovered ? '#cbd5e0' : 'transparent',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <p style={{ margin: '0' }}>Drag and drop files here or click to select</p>
            </Dropzone>
        </div>
    );
}

export default Drop;
