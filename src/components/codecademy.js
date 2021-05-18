import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { quizzes } from './quizzes'
import './styles.css'

// console.log(quizzes);

const App = () => {
  const [quizNumber, setQuizNumber] = useState(0)

  const quiz = quizzes.map((item, idx) => {
    return (
      <div key={idx}>
        <Quiz {...item} />
      </div>
    )
  })

  const currentQuiz = quiz[quizNumber]

  return <div className='app'>{currentQuiz}</div>
}

const Quiz = (item) => {
  const [questionNumber, setQuestionNumber] = useState(0)

  const { title, questions } = item

  const questionText = questions.map((item, idx) => {
    return <p key={idx}>{item.text}</p>
  })

  console.log(questions)

  const correct = questions[questionNumber].correctAnswer
  const wrongAnswers = questions[questionNumber].incorrectAnswers

  const answers = [...wrongAnswers, correct]
  // console.log(answers);

  const answer = answers.map((item, idx) => {
    const letters = ['A.', 'B.', 'C.', 'D.']
    console.log(letters[idx])
    let place = letters[idx]
    return (
      <p key={idx}>
        {place} {item}
      </p>
    )
  })

  return (
    <div>
      <h4>{title}</h4>
      <div>{questionText[questionNumber]}</div>
      <div>
        <span>{answer}</span>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
