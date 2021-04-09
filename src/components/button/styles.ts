import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface changeColor {
  active?: string;
  questionAnswer?: string;
  userAnswer?: string;
  questionState?: number;
}

export const Container = styled(RectButton)<changeColor>`
  height: 60px;
  width: 45%;

  background: ${props => {
    if (props.questionState === 1) {
      if (props.questionAnswer === props.userAnswer) return '#7CFC00';
      return '#e83f5b';
    }
    return '#ff9000';
  }};
  border-radius: 8px;
  border-color: #f0f8ff;
  border-style: solid;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
`;
