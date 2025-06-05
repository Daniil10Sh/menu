import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaClock, FaUtensils, FaFireAlt } from 'react-icons/fa';
import Difficulty from './Difficulty';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 20px;
    color: #333;
  }
`;

const RecipeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const RecipeCard = styled.div`
  padding: 24px;
  border-bottom: 1px solid #eee;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  ${({ $isComplex }) => $isComplex && `
    background-color: #fff9f0;
    border-left: 4px solid #ffa500;
  `}
`;

const RecipeTitle = styled.h2`
  color: #2c3e50;
  margin: 0 0 16px 0;
  font-size: 1.8rem;
  font-weight: 600;
`;

const MetaContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  font-size: 1rem;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, #eee, transparent);
  margin: 24px 0;
`;

const RecipeList = () => {
  const recipes = [
    {
      id: 1,
      title: 'Smoked salmon burger',
      time: '20 min',
      servings: '6 servings',
      calories: '210 calories',
      difficulty: 1
    },
    {
      id: 2,
      title: 'Tomatoes With Creamy Feta',
      time: '15 min',
      servings: '3 servings',
      calories: '600 calories',
      difficulty: 1
    },
    {
      id: 3,
      title: 'Spicy potato salad',
      time: '30 min',
      servings: '2 servings',
      calories: '320 calories',
      difficulty: 3,
      isComplex: true
    },
    {
      id: 4,
      title: 'Chicken Biryani',
      time: '40 min',
      servings: '4 servings',
      calories: '700 calories',
      difficulty: 2
    }
  ];

  return (
    <>
      <GlobalStyle />
      <RecipeContainer>
        {recipes.map((recipe) => (
          <React.Fragment key={recipe.id}>
            <RecipeCard $isComplex={recipe.isComplex}>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              
              <MetaContainer>
                <MetaItem>
                  <FaClock /> {recipe.time}
                </MetaItem>
                <MetaItem>
                  <FaUtensils /> {recipe.servings}
                </MetaItem>
                <MetaItem>
                  <FaFireAlt /> {recipe.calories}
                </MetaItem>
              </MetaContainer>
              
              <Difficulty level={recipe.difficulty} />
            </RecipeCard>
            
            {recipe.id !== recipes.length && <Divider />}
          </React.Fragment>
        ))}
      </RecipeContainer>
    </>
  );
};

export default RecipeList;