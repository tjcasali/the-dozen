import React, { useState } from 'react';

import './QuestionForm.css';

const QuestionForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (
    <form>
      <div className='new-question__controls'>
        <h1>Create or Import Question List</h1>
        <div className='new-question__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-question__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className='new-question__actions'>
        <button type='submit'>Add Question</button>
      </div>
    </form>
  );
};

export default QuestionForm;
