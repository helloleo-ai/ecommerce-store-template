import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  animation: ${fadeIn} 0.3s ease-in;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid var(--accent);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: var(--spacing-md);
  color: var(--secondary);
  font-size: 0.9em;
`;

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading amazing products...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
