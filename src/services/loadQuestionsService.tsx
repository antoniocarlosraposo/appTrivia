import api from './api';

interface Questions {
  response_code: number;
  results: Question[];
}

interface Question {
  question: string;
  correct_answer: string;
}

const cleanData = (data: Questions) =>
  data.results.map(
    (question): Question => {
      const parsedQuestion: Question = {
        question: question.question,
        correct_answer: question.correct_answer,
      };
      return parsedQuestion;
    },
  );

const loadQuestions = async (): Promise<Question[]> => {
  try {
    const { data } = await api.get(
      '/api.php?amount=10&difficulty=hard&type=boolean',
    );
    return cleanData(data);
  } catch (error) {
    throw error.message;
  }
};

export { loadQuestions };
