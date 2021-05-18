import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { quizzes } from './quizzes'
import './styles.css'

// console.log(quizzes);

const App = () => {
  const [quizNumber, setQuizNumber] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(0)

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
  const { title, questions } = item
  const question = questions.map((item, idx) => {
    return <p key={idx}>{item.text}</p>
  })

  console.log(questions)

  return (
    <div>
      <div>{title}</div>
      <div>{question}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
