import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  background: #312e38;
  border-color: #232129;
  padding: 20px 20px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  align-items: center;
`;

export const ImageContainer = styled.View``;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').width * 0.9}px;
  height: ${Dimensions.get('window').height * 0.2}px;
`;
