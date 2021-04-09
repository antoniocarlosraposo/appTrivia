export interface Question {
  question: string;
  correct_answer: string;
}

export interface TriviaState {
  questionList: Question[];
  current: number;
  userAnswer: string[];
  status: 'unstarted' | 'started' | 'finished';
  currentQuestion: Question;
  correct: number[];
  incorrect: number[];
}

export interface SubmitResponse {
  type: string;
  payload: {
    questionNumber: number;
    response: string;
  };
}

export interface SettingQuestions {
  type: string;
  payload: {
    questionList: Question[];
  };
}
