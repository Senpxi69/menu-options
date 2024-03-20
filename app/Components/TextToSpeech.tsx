import React from 'react';
import { Button } from '@mantine/core';
import styled from 'styled-components';
import { MessageSharp } from '@mui/icons-material';

interface TextToSpeechProps {
  onClick: () => void;
}

const Text = styled.span`
  display: block;
  text-align: center;
  margin-top: 8px; /* Adjust the margin-top as needed */
`;

const StyledButtonWrapper = styled.div`
  margin-top: 16px;
`;

const TextToSpeech: React.FC<TextToSpeechProps> = ({ onClick }) => {
  return (
    <StyledButtonWrapper>
      <Button
        size="lg"
        className="bg-gray-100 border border-black hover:border-blue-500 flex flex-col justify-center items-center"
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
          <MessageSharp className='text-gray-500' />
          <Text>Text-to-Speech</Text>
        </div>
      </Button>
    </StyledButtonWrapper>
  );
}

export default TextToSpeech;
