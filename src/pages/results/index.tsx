import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Container, CreateAccountButtonText } from './styles';

import { useTypedSelector } from '../../store/useTypedSelector';
import {
  advanceQuiz,
  finishQuiz,
  submitResponse,
  cleanTrivia,
  settingUpQuestions,
} from '../../store/trivia';

import Button from '../../components/button';

const Results: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const trivia = useTypedSelector(state => state.trivia);
  const userAnswer = useTypedSelector(state => state.trivia.userAnswer);
  const correct = useTypedSelector(state => state.trivia.correct);
  const onCleanTrivia = () => {
    navigation.navigate('Dashboard');
    dispatch(cleanTrivia());
  };

  return (
    <Container>
      <CreateAccountButtonText>
        You have got {correct.length}/{userAnswer.length} Questions!!!
      </CreateAccountButtonText>
      <Button onPress={() => onCleanTrivia()}>Play Again</Button>
    </Container>
  );
};

export default Results;
