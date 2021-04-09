import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, ImageContainer, ButtonContainer } from './styles';

import logoImg from '../../assets/quiz.png';
import Button from '../../components/button';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageContainer>
        <Logo source={logoImg} resizeMode="contain" />
      </ImageContainer>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Trivia')}>Lets play</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Dashboard;
