import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #e83f5b;
  margin: 20px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').width * 0.9}px;
  height: ${Dimensions.get('window').height * 0.2}px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
