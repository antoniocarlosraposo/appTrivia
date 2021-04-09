import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { FlatList, State } from 'react-native-gesture-handler';
import logoImg from '../../assets/quiz.png';

import Button from '../../components/button';
import { useTypedSelector } from '../../store/useTypedSelector';
import {
  advanceQuiz,
  finishQuiz,
  submitResponse,
  cleanTrivia,
  settingUpQuestions,
} from '../../store/trivia';

import {
  ButtonContainer,
  Container,
  ImageContainer,
  Logo,
  TextContainer,
} from './styles';
import { loadQuestions } from '../../services/loadQuestionsService';

interface Question {
  question: string;
  correct_answer: string;
}

const Trivia: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const trivia = useTypedSelector(state => state.trivia);
  const triviaStatus = useTypedSelector(state => state.trivia.status);
  const [questionState, setQuestionState] = useState(0);
  const [isAnswered, setIsAnswered] = useState(0);

  const onSettingUpQuestions = (questionList: Question[]) =>
    dispatch(settingUpQuestions({ questionList }));

  const fetchQuestions = async () => {
    const response = await loadQuestions();

    onSettingUpQuestions(response);
  };

  const gameOver = () => {
    navigation.navigate('Results');
  };

  useEffect(() => {
    if (triviaStatus === 'finished') {
      gameOver();
    }
  }, [triviaStatus]);

  const onSelectAnswer = (questionNumber: number, response: string) => {
    setQuestionState(1);
    if (isAnswered === 0) {
      setIsAnswered(1);
      setTimeout(() => {
        dispatch(submitResponse({ questionNumber, response }));
        setQuestionState(0);
        setIsAnswered(0);
      }, 1000);
    }
    setIsAnswered(1);
  };

  const startTrivia = () => {
    fetchQuestions();
  };

  useEffect(() => {
    startTrivia();
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Logo source={logoImg} resizeMode="contain" />
      </ImageContainer>
      <TextContainer>
        <Text>{trivia.currentQuestion.question}</Text>
      </TextContainer>
      <ButtonContainer>
        <Button
          questionState={questionState}
          userAnswer="True"
          questionAnswer={trivia.currentQuestion.correct_answer}
          onPress={() => onSelectAnswer(trivia.current, 'True')}
        >
          True
        </Button>
        <Button
          questionState={questionState}
          userAnswer="False"
          questionAnswer={trivia.currentQuestion.correct_answer}
          onPress={() => onSelectAnswer(trivia.current, 'False')}
        >
          False
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Trivia;
