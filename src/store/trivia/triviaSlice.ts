import { createSlice } from '@reduxjs/toolkit';
import { SubmitResponse, TriviaState, SettingQuestions } from './types';

const INITIAL_STATE: TriviaState = {
  questionList: [],
  current: 0,
  userAnswer: [],
  status: 'unstarted',
  currentQuestion: {
    correct_answer: ' ',
    question: ' ',
  },
  correct: [],
  incorrect: [],
};

const triviaSlice = createSlice({
  name: 'trivia',
  initialState: INITIAL_STATE,
  reducers: {
    cleanTrivia() {
      return INITIAL_STATE;
    },
    finishQuiz(state) {
      state.status = 'finished';
    },
    advanceQuiz(state) {
      const { questionList } = state;
      const currentQuestionNumber = state.current;

      if (currentQuestionNumber + 1 < questionList.length) {
        state.current = currentQuestionNumber + 1;
        state.status = 'started';
      } else {
        state.status = 'finished';
      }
    },
    submitResponse(state, action: SubmitResponse) {
      const { questionNumber, response } = action.payload;
      const { questionList, currentQuestion } = state;

      if (state.status !== 'finished') {
        if (currentQuestion.correct_answer === response) {
          state.correct.push(questionNumber);
        } else {
          state.incorrect.push(questionNumber);
        }

        state.userAnswer.push(response);

        if (questionNumber + 1 < questionList.length) {
          state.current = questionNumber + 1;
          state.status = 'started';
          state.currentQuestion = state.questionList[questionNumber + 1];
        } else {
          state.status = 'finished';
        }
      }
    },
    settingUpQuestions(state, action: SettingQuestions) {
      state.questionList = [
        ...state.questionList,
        ...action.payload.questionList,
      ];
      state.currentQuestion = action.payload.questionList[0];
    },
  },
});

export const {
  submitResponse,
  advanceQuiz,
  cleanTrivia,
  finishQuiz,
  settingUpQuestions,
} = triviaSlice.actions;

export default triviaSlice.reducer;
