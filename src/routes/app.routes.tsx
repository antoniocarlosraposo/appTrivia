import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/dashboard';
import Trivia from '../pages/trivia';
import Results from '../pages/results';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFF' },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Trivia" component={Trivia} />
    <App.Screen name="Results" component={Results} />
  </App.Navigator>
);

export default AppRoutes;
