import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = ({
  answers,
  question,
  onAnswerClick,
  answerNumber,
  quizLength,
  state,
}) => (
  <div className={classes.activeQuiz}>
    <p className={classes.question}>
      <span>
        <strong>{answerNumber}. </strong>&nbsp; {question}
      </span>
      <small>
        {answerNumber} / {quizLength}
      </small>
    </p>
    <AnswersList
      answers={answers}
      onAnswerClick={onAnswerClick}
      state={state}
    />
  </div>
)

export default ActiveQuiz
