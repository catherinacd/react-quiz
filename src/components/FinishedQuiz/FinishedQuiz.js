import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = ({ results, quiz }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.finishedQuiz}>
      <ul className={classes.list}>
        {quiz.map((quizItem, index) => {
          return (
            <li key={index} className={classes.item}>
              <strong>{index + 1}&nbsp;.</strong>
              {quizItem.question}&nbsp;
              <span>
                {console.log(results[quizItem.id])}
                {results[quizItem.id] === 'error' ? 'error' : 'check'}
              </span>
            </li>
          )
        })}
      </ul>
      <p>
        {successCount}/{quiz.length}
      </p>

      <div>
        <button> повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
