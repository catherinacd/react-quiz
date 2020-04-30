import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
  state = {
    results: {}, // {[id]:'success' 'error'} результаты пользователя
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]:'success' 'error'} информация о текущем клике пользователя
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зеленый', id: 4 },
        ],
      },
      {
        id: 2,
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        answers: [
          { text: '1700', id: 1 },
          { text: '1705', id: 2 },
          { text: '1703', id: 3 },
          { text: '1803', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    // если правильный ответ - функцию не выполняем
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0] // в объекте 1 значение
      if (this.state.answerState[key] === 'success') {
        return // чтоб не заходили в данную функцию и у нас было перемещение по вопросам
      }
    }

    // текущий вопрос
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    // если ответили правильно
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({ answerState: { [answerId]: 'success' }, results })

      // чтобы показать стилистику, зададим timeout
      const timeout = window.setTimeout(() => {
        // если закончилось голосование
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }

        // чтобы не было утечки памяти
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({ answerState: { [answerId]: 'error' }, results })
    }
  }

  // дошли до конца голосования
  isQuizFinished = () =>
    this.state.activeQuestion + 1 === this.state.quiz.length

  onRetryHandler = () =>
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    })

  componentDidMount() {
    console.log('Quiz ID =', this.props.match.params.id)
  }
  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          {this.state.isFinished && (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.onRetryHandler}
            />
          )}
          {!this.state.isFinished && (
            <>
              <h1 className={classes.title}>Ответьте на все вопросы</h1>
              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Quiz
