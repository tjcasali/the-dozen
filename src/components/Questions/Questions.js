import React, { useState} from 'react';

import QuestionItem from './QuestionItem';
import Card from '../UI/Card';
import './Questions.css';

const Questions = (props) => {

  const [counter, setCounter] = useState(0)

  function nextQuestion() {
    setCounter(prevCounter => prevCounter + 1)
  }
  function previousQuestion() {
    setCounter(prevCounter => prevCounter - 1)
  }

  // document.addEventListener('keydown', (event) => {
  //   console.log(event.ey)
  //   if(event.key === "ArrowRight") {
  //     nextQuestion();
  //   }
  // });

  // function keyFunction(event){
  //   if(event.keyCode === 39) {
  //     nextQuestion()
  //   }
  //   if(event.keyCode === 37) {
  //     previousQuestion()
  //   }
  // }

  return (
    <Card className="questions">
      <QuestionItem
        category={props.items[counter].category}
        question={props.items[counter].question}
        amount={props.items[counter].amount}
      />
      <button onClick={previousQuestion}>Previous Question</button>
      <button onClick={nextQuestion}>Next Question</button>
    </Card>
  );
}

export default Questions;
