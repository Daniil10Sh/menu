import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const DifficultyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

const DifficultyTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #7f8c8d;
  font-weight: 500;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Star = styled(FaStar)`
  color: ${({ $filled }) => ($filled ? '#f39c12' : '#ecf0f1')};
  font-size: 1rem;
`;

const Difficulty = ({ level }) => {
  return (
    <DifficultyContainer>
      <DifficultyTitle>Difficulty:</DifficultyTitle>
      <StarsContainer>
        <Star $filled={level >= 1} />
        <Star $filled={level >= 2} />
        <Star $filled={level >= 3} />
      </StarsContainer>
    </DifficultyContainer>
  );
};

export default Difficulty;