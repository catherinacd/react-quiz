import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = ({ answers, onAnswerClick, state }) => (
  <ul className={classes.answersList}>
    {answers.map((answer) => (
      <AnswerItem
        key={answer.id}
        answer={answer}
        onAnswerClick={onAnswerClick}
        state={state && state[answer.id]} // если есть что-то в state
      />
    ))}
  </ul>
)

export default AnswersList
