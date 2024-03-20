import React, { useState } from 'react';
import { Button } from '@mantine/core';
import styled from 'styled-components';
import GraphicEqSharpIcon from '@mui/icons-material/GraphicEqSharp';

interface VoiceCloneProps {
    onClick: () => void;
}

const Text = styled.span`
  display: block;
  text-align: center;
  margin-top: 8px;
`;

const StyledButtonWrapper = styled.div`
  margin-top: 16px;
`;

const VoiceClone: React.FC<VoiceCloneProps> = ({ onClick }) => {



    return (
        <div>
            <StyledButtonWrapper>
                <Button
                    size="lg"
                    className="bg-gray-100 border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                    style={{
                        width: '168px',
                        height: '104px',
                        fontSize: '1.2rem',
                        color: 'black',
                        borderRadius: '10px',
                        boxShadow: 'none',
                        padding: '16px',
                    }}
                    onClick={onClick}
                >
                    <div className="flex flex-col justify-center items-center">
                        <GraphicEqSharpIcon className='text-gray-500' />
                        <Text>Voice Clone</Text>
                    </div>
                </Button>
            </StyledButtonWrapper>

        </div>
    );
}

export default VoiceClone;
