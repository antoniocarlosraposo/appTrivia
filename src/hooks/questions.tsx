import React, { useState, createContext, useContext } from 'react';

interface Question {
  question: string;
  correct_answer: string;
}

const questionsContext = createContext<Question[] | null>(null);

const QuestionProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <questionsContext.Provider value={questions}>
      {children}
    </questionsContext.Provider>
  );
};

function useQuestion(): Question[] {
  const context = useContext(questionsContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { useQuestion, QuestionProvider };
