import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  active?: string;
  questionAnswer?: string;
  userAnswer?: string;
  answer?: string;
  questionState?: number;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => ( // eslint-disable-line
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
