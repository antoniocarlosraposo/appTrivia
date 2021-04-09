import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import Routes from './routes';
import AppContainer from './hooks';
import { rootStore } from './store/rootReducer';

const App: React.FC = () => (
  <Provider store={rootStore}>
    <AppContainer>
      <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        <Routes />
      </View>
    </AppContainer>
  </Provider>
);
export default App;
