import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { QuestionProvider } from './questions';

const AppProvider: React.FC = ({ children }) => {
  return (
    <QuestionProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </QuestionProvider>
  );
};

export default AppProvider;
