import React, { useState } from 'react';

import Card from '../UI/Card';
import './QuestionItem.css';

const QuestionItem = (props) => {
  // function clickHandler() {}
  // const [question, setTi] = useState(props.title);
  console.log('QuestionItem evaluated by React');

  return (
    <Card className='question-item'>
      <div className='question-item__description'>
        <h2>{props.category}</h2>
        <h4>{props.question}</h4>
        <div className='question-item__price'>{props.amount}</div>
      </div>
    </Card>
  );
}

export default QuestionItem;
