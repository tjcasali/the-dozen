import React, {useState} from 'react';

import NewQuestion from './components/NewQuestion/NewQuestion';
import Questions from './components/Questions/Questions';

const App = () => {
  const questions = [
    {
      id: 'r1',
      category: 'MLB',
      question: 'Question 1: Who won the 2020 World Series?',
      amount: "Answer: LA Dodgers",
    },
    { 
      id: 'l1', 
      category: 'MLB',
      question: 'Question 2: Who won the 2000 World Series',
      amount: "Answer: NY Yankees",
    },
    {
      id: 'r2',
      category: 'Celebrity Mashups',
      question: 'Question 3: Who are the two celebrities in this image?',
      amount: "Answer: KenJac and Jeff DLowe",
    },
    {
      id: 'l2',
      category: 'Celebrity Mashups',
      question: 'Question 4: Who are the two celebrities in this image?',
      amount: "Answer: Stalin and Hitler",
    },
  ];

  return (
    <div>
      {/* <NewQuestion /> */}
      <Questions items={questions} />
    </div>
  );
}

export default App;
